"use client";

import { FormEvent, useState } from "react";

const fieldClass =
  "w-full min-h-[48px] rounded border border-[var(--color-line,#DCE6E5)] bg-white px-4 py-3 text-base text-[var(--color-slate)] outline-none transition focus:border-[var(--color-teal-600)] focus:ring-2 focus:ring-[var(--color-teal-600)]/20";

const labelClass =
  "mb-2 block text-sm font-medium text-[var(--color-slate)]";

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [enquiryType, setEnquiryType] = useState("");
  const [roleOfInterest, setRoleOfInterest] = useState("");
  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setStatus(null);

    const form = event.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      organisation: String(data.get("organisation") ?? "").trim(),
      enquiryType: String(data.get("enquiryType") ?? ""),
      roleOfInterest: String(data.get("roleOfInterest") ?? ""),
      message: String(data.get("message") ?? "").trim(),
      website: String(data.get("website") ?? ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error ??
            "Your message could not be sent. Please try again later.",
        );
      }

      form.reset();
      setStatus({
        type: "success",
        message: "Your message has been submitted successfully.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again later.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-24 border-t border-[var(--color-line,#DCE6E5)] py-20 md:py-28"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-2 md:gap-20">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-teal-600)]">
            Contact
          </p>

          <h2
            id="contact-heading"
            className="text-3xl font-heading font-semibold tracking-tight md:text-4xl"
          >
            Get in touch
          </h2>

          <p className="mt-6 text-base leading-relaxed text-[var(--color-slate)] md:text-lg">
            Have a question about our research, an idea for collaboration, or
            an opportunity to work together? We would be glad to hear from you.
            Share a little about what you have in mind.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="contact-name" className={labelClass}>
              Full name <span aria-hidden="true">*</span>
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              required
              maxLength={120}
              className={fieldClass}
            />
          </div>

          <div>
            <label htmlFor="contact-email" className={labelClass}>
              Email address <span aria-hidden="true">*</span>
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              maxLength={254}
              className={fieldClass}
            />
          </div>

          <div>
            <label htmlFor="contact-organisation" className={labelClass}>
              Organisation <span className="font-normal">(optional)</span>
            </label>
            <input
              id="contact-organisation"
              name="organisation"
              type="text"
              autoComplete="organization"
              maxLength={160}
              className={fieldClass}
            />
          </div>

          <div>
            <label htmlFor="contact-type" className={labelClass}>
              Enquiry type <span aria-hidden="true">*</span>
            </label>
            <select
              id="contact-type"
              name="enquiryType"
              required
              value={enquiryType}
              onChange={(event) => {
                const value = event.target.value;
                setEnquiryType(value);
                if (value !== "Working With Us") {
                  setRoleOfInterest("");
                }
              }}
              className={fieldClass}
            >
              <option value="" disabled>
                Select an enquiry type
              </option>
              <option value="General Enquiry">General Enquiry</option>
              <option value="Research Collaboration">
                Research Collaboration
              </option>
              <option value="Working With Us">Working With Us</option>
              <option value="Partnership Opportunity">
                Partnership Opportunity
              </option>
              <option value="Other">Other</option>
            </select>
          </div>

          {enquiryType === "Working With Us" && (
            <div>
              <label htmlFor="contact-role" className={labelClass}>
                Role of interest <span aria-hidden="true">*</span>
              </label>
              <select
                id="contact-role"
                name="roleOfInterest"
                required
                value={roleOfInterest}
                onChange={(event) => setRoleOfInterest(event.target.value)}
                className={fieldClass}
              >
                <option value="" disabled>
                  Select a role
                </option>
                <option value="Machine Learning Researcher">Machine Learning Researcher</option>
                <option value="Speech Researcher">Speech Researcher</option>
                <option value="Natural Language Processing Researcher">Natural Language Processing Researcher</option>
                <option value="Model Evaluation Researcher">Model Evaluation Researcher</option>
                <option value="Machine Learning Engineer">Machine Learning Engineer</option>
                <option value="AI Systems Engineer">AI Systems Engineer</option>
                <option value="ML Infrastructure Engineer">ML Infrastructure Engineer</option>
                <option value="Backend Engineer">Backend Engineer</option>
                <option value="Frontend Engineer">Frontend Engineer</option>
                <option value="Full-Stack Engineer">Full-Stack Engineer</option>
                <option value="Software Quality & Testing Engineer">Software Quality & Testing Engineer</option>
                <option value="Language Data Engineer">Language Data Engineer</option>
                <option value="Dataset & Corpus Curator">Dataset & Corpus Curator</option>
                <option value="African Language Specialist">African Language Specialist</option>
                <option value="Computational Linguist">Computational Linguist</option>
                <option value="Speech Data Researcher">Speech Data Researcher</option>
                <option value="Data Annotation & Quality Specialist">Data Annotation & Quality Specialist</option>
                <option value="Product Designer">Product Designer</option>
                <option value="UI/UX Researcher">UI/UX Researcher</option>
                <option value="Product Engineer">Product Engineer</option>
                <option value="Developer Experience Engineer">Developer Experience Engineer</option>
                <option value="Technical Writer">Technical Writer</option>
                <option value="Accessibility Specialist">Accessibility Specialist</option>
                <option value="Responsible AI Researcher">Responsible AI Researcher</option>
                <option value="AI Governance & Policy Researcher">AI Governance & Policy Researcher</option>
                <option value="Research Communications Contributor">Research Communications Contributor</option>
                <option value="Scientific & Technical Editor">Scientific & Technical Editor</option>
                <option value="Community & Partnerships Contributor">Community & Partnerships Contributor</option>
                <option value="Research Operations Coordinator">Research Operations Coordinator</option>
                <option value="People & Talent Contributor">People & Talent Contributor</option>
                <option value="Legal & Governance Research Contributor">Legal & Governance Research Contributor</option>
              </select>
              <p className="mt-2 text-sm text-[var(--color-muted,#64748b)]">
                Choose the role you are interested in. You can explain your
                experience and interests in the message below.
              </p>
            </div>
          )}

          <div>
            <label htmlFor="contact-message" className={labelClass}>
              Message <span aria-hidden="true">*</span>
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              minLength={10}
              maxLength={5000}
              rows={6}
              className={`${fieldClass} min-h-36 resize-y`}
              placeholder="Tell us a little about your enquiry..."
            />
          </div>

          {/* Honeypot field for basic bot filtering. Keep it out of sight. */}
          <div
            aria-hidden="true"
            className="absolute -left-[10000px] h-px w-px overflow-hidden"
          >
            <label htmlFor="contact-website">Leave this field empty</label>
            <input
              id="contact-website"
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="inline-flex min-h-[48px] items-center justify-center rounded bg-[var(--color-teal-600)] px-7 py-3 font-medium text-white transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {submitting ? "Sending..." : "Send message"}
          </button>

          {status && (
            <p
              role="status"
              aria-live="polite"
              className={`text-sm leading-relaxed ${
                status.type === "success"
                  ? "text-green-700"
                  : "text-red-700"
              }`}
            >
              {status.message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

