import { NextResponse } from "next/server";

export const runtime = "nodejs";

const allowedTypes = new Set([
  "General Enquiry",
  "Research Collaboration",
  "Working With Us",
  "Partnership Opportunity",
  "Other",
]);

function plainText(value: string) {
  return value.replace(/\r\n/g, "\n").trim();
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (
      typeof body.website === "string" &&
      body.website.trim().length > 0
    ) {
      // Silently accept honeypot submissions without sending email.
      return NextResponse.json({ ok: true });
    }

    const name =
      typeof body.name === "string" ? plainText(body.name) : "";
    const email =
      typeof body.email === "string" ? body.email.trim() : "";
    const organisation =
      typeof body.organisation === "string"
        ? plainText(body.organisation)
        : "";
    const enquiryType =
      typeof body.enquiryType === "string" ? body.enquiryType : "";
    const message =
      typeof body.message === "string" ? plainText(body.message) : "";

    if (
      !name ||
      name.length > 120 ||
      !email ||
      email.length > 254 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      organisation.length > 160 ||
      !allowedTypes.has(enquiryType) ||
      message.length < 10 ||
      message.length > 5000
    ) {
      return NextResponse.json(
        { error: "Please check the form fields and try again." },
        { status: 400 },
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.CONTACT_FROM_EMAIL;
    const to = process.env.CONTACT_TO_EMAIL;

    if (!apiKey || !from || !to) {
      console.error(
        "Contact form is not configured. Set RESEND_API_KEY, CONTACT_FROM_EMAIL, and CONTACT_TO_EMAIL.",
      );

      return NextResponse.json(
        {
          error:
            "The contact form is not configured yet. Please try again later.",
        },
        { status: 503 },
      );
    }

    const emailText = [
      "New message from the Sauti Labs website",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Organisation: ${organisation || "Not provided"}`,
      `Enquiry type: ${enquiryType}`,
      "",
      "Message:",
      message,
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
        subject: `[Sauti Labs] ${enquiryType}`,
        text: emailText,
      }),
      signal: AbortSignal.timeout(10000),
    });

    if (!resendResponse.ok) {
      console.error(
        "Resend rejected a contact form submission:",
        resendResponse.status,
      );

      return NextResponse.json(
        {
          error:
            "We could not send your message right now. Please try again later.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form request failed:", error);

    return NextResponse.json(
      {
        error:
          "Something went wrong while sending your message. Please try again later.",
      },
      { status: 500 },
    );
  }
}
