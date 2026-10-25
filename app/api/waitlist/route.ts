import { NextResponse } from "next/server";

export const runtime = "nodejs";

function clean(value: unknown, maxLength: number): string {
  return typeof value === "string"
    ? value.trim().slice(0, maxLength)
    : "";
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };

    return entities[character];
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Honeypot: quietly accept automated spam without sending email.
    if (clean(body?._gotcha, 200)) {
      return NextResponse.json({ success: true });
    }

    const name = clean(body?.name, 120);
    const email = clean(body?.email, 254);
    const organisation = clean(body?.organisation, 160);
    const interest = clean(body?.interest, 100);
    const languages = clean(body?.languages, 300);

    if (
      !name ||
      name.length > 120 ||
      !email ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      return NextResponse.json(
        { error: "Please provide a valid name and email address." },
        { status: 400 }
      );
    }

    // Reuse the existing, already-working Resend configuration.
    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.CONTACT_FROM_EMAIL;
    const to = process.env.CONTACT_TO_EMAIL;

    if (!apiKey || !from || !to) {
      console.error("Waitlist email configuration is incomplete.");

      return NextResponse.json(
        { error: "The waitlist is temporarily unavailable." },
        { status: 503 }
      );
    }

    const emailText = [
      "New Sauti Cloud waitlist signup",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Organisation: ${organisation || "Not provided"}`,
      `Interest: ${interest || "Not specified"}`,
      `Languages: ${languages || "Not specified"}`,
    ].join("\n");

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `[Sauti Cloud] New waitlist signup: ${name}`,
        text: emailText,
        html: `
          <h2>New Sauti Cloud waitlist signup</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Organisation:</strong> ${escapeHtml(organisation || "Not provided")}</p>
          <p><strong>Interest:</strong> ${escapeHtml(interest || "Not specified")}</p>
          <p><strong>Languages:</strong> ${escapeHtml(languages || "Not specified")}</p>
        `,
      }),
      signal: AbortSignal.timeout(10000),
    });

    if (!resendResponse.ok) {
      console.error(
        "Resend rejected a waitlist submission:",
        resendResponse.status
      );

      return NextResponse.json(
        {
          error: "We couldn't submit your details. Please try again later.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Waitlist request failed:", error);

    return NextResponse.json(
      {
        error: "We couldn't submit your details. Please try again later.",
      },
      { status: 500 }
    );
  }
}
