import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy and Data Protection",
  description: "We are committed to respecting privacy and handling personal data thoughtfully throughout our research and operations.",
  openGraph: {
    title: "Privacy and Data Protection | Sauti Labs",
    description: "We are committed to respecting privacy and handling personal data thoughtfully throughout our research and operations.",
    url: "https://sauti.ai/commitments/privacy",
  },
};

export default function Privacy() {
  return (
    <div className="flex flex-col pt-16">
      <div className="max-w-[1440px] mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Breadcrumb */}
            <nav className="mb-8 text-sm">
              <span className="text-[var(--color-slate)]">Commitments</span>
              <span className="mx-2 text-[var(--color-slate)]">/</span>
              <span className="font-medium">Privacy and Data Protection</span>
            </nav>

            {/* Header */}
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Privacy and Data Protection
            </h1>
            <p className="text-lg text-[var(--color-slate)] leading-relaxed mb-12">
              We are committed to respecting privacy and handling personal data thoughtfully throughout our research and operations.
            </p>

            <div className="max-w-[65ch] space-y-10 text-[var(--color-slate)] leading-relaxed">
              <section id="commitment">
                <h2 className="text-2xl font-heading font-semibold mb-4">Our commitment</h2>
                <p>We aim to handle personal data with care, use it for clear purposes, and respect the rights of the people it relates to.</p>
              </section>
              <section id="legal-context">
                <h2 className="text-2xl font-heading font-semibold mb-4">Legal context</h2>
                <p>This proposed summary refers to Kenya&apos;s Data Protection Act, 2019. Its legal interpretation and any statements of compliance require legal review. This page does not replace privacy notices that apply to particular products, research, or services.</p>
              </section>
              <section id="principles">
                <h2 className="text-2xl font-heading font-semibold mb-4">Data-protection principles</h2>
                <p>We aim to be clear about purpose, limit collection and use to what is relevant, maintain appropriate data quality, respect individual rights, and handle information with care.</p>
              </section>
              <section id="research-data">
                <h2 className="text-2xl font-heading font-semibold mb-4">Speech and language data in research</h2>
                <p>Voice recordings may identify a person, directly or indirectly. Data being publicly accessible does not, by itself, mean it is free to use for any purpose. We aim to consider the source, permissions, context, and potential impact before using speech or language data.</p>
              </section>
              <section id="data-lifecycle">
                <h2 className="text-2xl font-heading font-semibold mb-4">Data lifecycle</h2>
                <p>We aim to consider privacy from collection and access through use, sharing, retention, and deletion, with decisions guided by purpose and applicable requirements.</p>
              </section>
              <section id="security-retention">
                <h2 className="text-2xl font-heading font-semibold mb-4">Security, retention, and deletion</h2>
                <p>We aim to protect personal data, retain it only as appropriate for its purpose and applicable requirements, and consider secure deletion when it is no longer needed.</p>
              </section>
              <section id="individual-rights">
                <h2 className="text-2xl font-heading font-semibold mb-4">Individual rights</h2>
                <p>We are committed to respecting rights that apply to individuals under relevant data-protection requirements. The process for making a request will be provided in applicable privacy notices.</p>
              </section>
            </div>

            {/* Related Policies */}
            <div className="mt-16 pt-8 border-t">
              <h2 className="text-xl font-heading font-semibold mb-4">
                Related Policies and Notices
              </h2>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/commitments/security"
                    className="text-[var(--color-teal-600)] hover:underline"
                  >
                    Security
                  </Link>
                </li>
                <li>
                  <Link
                    href="/commitments/data-governance"
                    className="text-[var(--color-teal-600)] hover:underline"
                  >
                    Data and Research Governance
                  </Link>
                </li>
              </ul>
            </div>

            {/* Reporting/Contact */}
            <div className="mt-8 pt-8 border-t">
              <h2 className="text-xl font-heading font-semibold mb-4">
                Questions or Concerns?
              </h2>
              <p className="text-[var(--color-slate)]">
                Privacy contact: [To be confirmed]
              </p>
            </div>

            {/* Last Reviewed */}
            <div className="mt-8 pt-8 border-t text-sm text-[var(--color-slate)]">
              Last reviewed: [Date to be confirmed]
            </div>
          </div>

          {/* Sticky Contents Rail - Desktop */}
          <aside className="hidden lg:block lg:col-span-1">
            <div className="sticky top-24">
              <h3 className="text-sm font-semibold mb-4">On this page</h3>
              <ul className="space-y-2 text-sm text-[var(--color-slate)]">
                <li>
                  <a href="#commitment" className="hover:text-[var(--color-teal-600)]">Our commitment</a>
                </li>
                <li>
                  <a href="#research-data" className="hover:text-[var(--color-teal-600)]">Research data</a>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
