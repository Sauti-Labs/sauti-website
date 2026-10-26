import type { Metadata } from "next";
import Link from "next/link";
import { WaitlistForm } from "./WaitlistForm";

export const metadata: Metadata = {
  title: "Sauti Cloud — Early Access",
  description:
    "Join the Sauti Cloud waitlist for updates and early access opportunities for African speech and language AI.",
  alternates: {
    canonical: "/cloud",
  },
  openGraph: {
    title: "Sauti Cloud — Early Access | Sauti Labs",
    description:
      "Sauti Cloud is in development. Join the waitlist for updates and early access opportunities for African speech and language AI.",
    url: "https://sautilabs.co.ke/cloud",
    images: [{ url: "/opengraph-image", alt: "Sauti Cloud by Sauti Labs" }],
  },
};

const capabilities = [
  "Speech recognition",
  "Speech generation",
  "Voice AI",
];

export default function SautiCloudPage() {
  return (
    <div className="min-h-full bg-bg text-text">
      <section className="relative overflow-hidden border-b border-border bg-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-teal-100/70 to-transparent"
        />

        <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-16 sm:px-10 sm:py-20 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-16 lg:py-24">
          <div className="max-w-2xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-teal-100 bg-white/80 px-3.5 py-2 text-xs font-medium tracking-wide text-teal-700">
              <span
                aria-hidden="true"
                className="size-2 rounded-full bg-[var(--color-teal-600)]"
              />
              SAUTI CLOUD · EARLY ACCESS
            </div>

            <p className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-teal-600">
              African speech and language AI
            </p>

            <h1 className="max-w-xl text-4xl font-bold leading-tight tracking-tight text-teal-950 sm:text-5xl lg:text-6xl">
              AI that speaks to Africa’s linguistic diversity.
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate">
              Sauti Cloud is in development. Join the waitlist to follow our
              progress and hear about opportunities to participate as access
              becomes available.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              {capabilities.map((capability) => (
                <span
                  key={capability}
                  className="rounded-full border border-border bg-white px-4 py-2 text-sm text-teal-800"
                >
                  {capability}
                </span>
              ))}
            </div>

            <p className="mt-9 text-sm leading-6 text-slate">
              Interested in the research behind Sauti?
              {" "}
              <Link
                href="/research"
                className="font-medium text-teal-700 underline decoration-teal-300 underline-offset-4 hover:text-teal-950"
              >
                Explore our research
              </Link>
              .
            </p>
          </div>

          <div className="mx-auto w-full max-w-xl">
            <div className="rounded-2xl border border-border bg-white p-6 shadow-sm sm:p-9">
              <div className="mb-8">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-teal-600">
                  Get early access
                </p>

                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-teal-950 sm:text-3xl">
                  Join the waitlist.
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate">
                  Tell us a little about yourself. We’ll use your details to
                  contact you about Sauti Cloud and relevant early-access
                  opportunities.
                </p>
              </div>

              <WaitlistForm />
            </div>

            <p className="mt-5 text-center text-xs leading-5 text-slate">
              Sauti Cloud is not yet generally available. Joining the waitlist
              does not guarantee access.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-teal-600">
              01
            </p>
            <h3 className="mt-3 text-lg font-semibold text-teal-950">
              Built for linguistic diversity
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate">
              Our direction is centred on speech and language technology
              designed for the breadth of languages spoken across Africa.
            </p>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-teal-600">
              02
            </p>
            <h3 className="mt-3 text-lg font-semibold text-teal-950">
              Research-led development
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate">
              We are developing the research, data, models, and technologies
              needed to support future Sauti capabilities.
            </p>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-teal-600">
              03
            </p>
            <h3 className="mt-3 text-lg font-semibold text-teal-950">
              Follow the journey
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate">
              Join the waitlist for updates as the project develops and
              opportunities become available.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}