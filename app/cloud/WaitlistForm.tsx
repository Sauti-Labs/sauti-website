"use client";

import { FormEvent, useState } from "react";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function WaitlistForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    // Honeypot field: reject submissions that fill the hidden field.
    if (String(formData.get("_gotcha") ?? "").trim()) {
      setStatus("success");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          organisation: formData.get("organisation"),
          interest: formData.get("interest"),
          languages: formData.get("languages"),
          _gotcha: formData.get("_gotcha"),
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error || "We couldn't submit your details. Please try again."
        );
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage(
        "We couldn't submit your details. Please check your connection and try again."
      );
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-xl border border-teal-100 bg-teal-100/60 p-6"
      >
        <div className="flex size-11 items-center justify-center rounded-full bg-teal-900 text-white">
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            className="size-5"
          >
            <path
              d="m5 12 4 4L19 6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <h3 className="mt-5 text-xl font-semibold text-teal-950">
          You’re on the list.
        </h3>

        <p className="mt-2 text-sm leading-6 text-slate">
          Thanks for your interest in Sauti Cloud. We’ll be in touch when
          there are relevant updates or early-access opportunities.
        </p>

        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-5 text-sm font-medium text-teal-700 underline underline-offset-4 hover:text-teal-950"
        >
          Add another person
        </button>
      </div>
    );
  }

  const inputClass =
    "mt-2 min-h-12 w-full rounded-lg border border-border bg-white px-4 py-3 text-base text-teal-950 outline-none transition placeholder:text-stone focus:border-teal-600 focus:ring-2 focus:ring-teal-100";

  const labelClass = "text-sm font-medium text-teal-900";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="waitlist-name" className={labelClass}>
          Full name <span aria-hidden="true">*</span>
        </label>
        <input
          id="waitlist-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          maxLength={120}
          placeholder="Your full name"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="waitlist-email" className={labelClass}>
          Email address <span aria-hidden="true">*</span>
        </label>
        <input
          id="waitlist-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          maxLength={254}
          placeholder="you@example.com"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="waitlist-organisation" className={labelClass}>
          Organisation <span className="font-normal text-slate">(optional)</span>
        </label>
        <input
          id="waitlist-organisation"
          name="organisation"
          type="text"
          autoComplete="organization"
          maxLength={160}
          placeholder="Company, university, or organisation"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="waitlist-interest" className={labelClass}>
          What are you interested in?
        </label>
        <select
          id="waitlist-interest"
          name="interest"
          defaultValue=""
          className={inputClass}
        >
          <option value="">Choose an area (optional)</option>
          <option value="speech-recognition">Speech recognition</option>
          <option value="speech-generation">Speech generation</option>
          <option value="voice-ai">Voice AI and agents</option>
          <option value="datasets-research">Datasets and research</option>
          <option value="building-with-sauti">Building with Sauti</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="waitlist-languages" className={labelClass}>
          Languages you’re interested in{" "}
          <span className="font-normal text-slate">(optional)</span>
        </label>
        <input
          id="waitlist-languages"
          name="languages"
          type="text"
          maxLength={300}
          placeholder="e.g. Kiswahili, Dholuo, Kikuyu"
          className={inputClass}
        />
      </div>

      {/* Hidden anti-spam field */}
      <div aria-hidden="true" className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden">
        <label htmlFor="waitlist-company-website">Leave this field empty</label>
        <input
          id="waitlist-company-website"
          type="text"
          name="_gotcha"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {status === "error" && (
        <p
          role="alert"
          className="rounded-lg border border-coral/40 bg-coral/10 px-4 py-3 text-sm leading-6 text-teal-950"
        >
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-[var(--color-teal-600)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-sun-deep hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Joining…" : "Join the waitlist"}
        {status !== "submitting" && (
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            className="size-4"
          >
            <path
              d="M5 12h14m-6-6 6 6-6 6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>

      <p className="text-xs leading-5 text-slate">
        By joining, you agree that Sauti Labs may use the details you submit
        to contact you about Sauti Cloud. Read our{" "}
        <a
          href="/commitments/privacy"
          className="font-medium text-teal-700 underline underline-offset-4 hover:text-teal-950"
        >
          Privacy and Data Protection notice
        </a>
        .
      </p>
    </form>
  );
}