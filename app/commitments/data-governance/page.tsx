import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data and Research Governance",
  description: "We aim to govern research data with care, clear purposes, and respect for people and language communities.",
  openGraph: {
    title: "Data and Research Governance | Sauti Labs",
    description: "We aim to govern research data with care, clear purposes, and respect for people and language communities.",
    url: "https://sauti.ai/commitments/data-governance",
  },
};

export default function DataGovernance() {
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
              <span className="font-medium">Data and Research Governance</span>
            </nav>

            {/* Header */}
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Data and Research Governance
            </h1>
            <p className="text-lg text-[var(--color-slate)] leading-relaxed mb-12">
              We aim to govern research data with care, clear purposes, and respect for people and language communities.
            </p>

            <div className="max-w-[65ch] space-y-10 text-[var(--color-slate)] leading-relaxed">
              <section id="principles">
                <h2 className="text-2xl font-heading font-semibold mb-4">Data governance principles</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Provenance:</strong> We aim to document where data comes from and the basis for its use.</li>
                  <li><strong>Purpose limitation:</strong> We aim to use data for defined, appropriate purposes.</li>
                  <li><strong>Quality:</strong> We aim to document relevant limitations and quality considerations.</li>
                  <li><strong>Privacy:</strong> We are committed to considering privacy and applicable data-protection requirements.</li>
                  <li><strong>Accountability:</strong> We aim to make decisions and responsibilities clear.</li>
                </ul>
              </section>
              <section id="lifecycle">
                <h2 className="text-2xl font-heading font-semibold mb-4">Dataset lifecycle and documentation</h2>
                <p>We aim to consider sourcing, permissions, collection, documentation, access, use, maintenance, sharing, and deletion throughout a dataset&apos;s lifecycle.</p>
              </section>
              <section id="classification">
                <h2 className="text-2xl font-heading font-semibold mb-4">Dataset classification</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Public</strong></li>
                  <li><strong>Restricted</strong></li>
                  <li><strong>Confidential</strong></li>
                  <li><strong>Sensitive</strong></li>
                </ul>
                <p className="mt-4">These categories are proposed; their definitions and handling requirements require confirmation before operational use.</p>
              </section>
              <section id="integrity">
                <h2 className="text-2xl font-heading font-semibold mb-4">Research integrity</h2>
                <p>We are committed to accurate reporting, clear documentation of methods and limitations, and responsible handling of research data and results.</p>
              </section>
              <section id="community">
                <h2 className="text-2xl font-heading font-semibold mb-4">Community and participant considerations</h2>
                <p>We aim to respect the rights, context, and interests of participants and language communities when data is collected, used, or shared.</p>
              </section>
              <section id="release">
                <h2 className="text-2xl font-heading font-semibold mb-4">Responsible release</h2>
                <p>We aim to consider permissions, privacy, safety, documentation, and potential impacts before releasing datasets or research materials.</p>
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
                    href="/commitments/privacy"
                    className="text-[var(--color-teal-600)] hover:underline"
                  >
                    Privacy and Data Protection
                  </Link>
                </li>
                <li>
                  <Link
                    href="/commitments/responsible-ai"
                    className="text-[var(--color-teal-600)] hover:underline"
                  >
                    Responsible AI
                  </Link>
                </li>
              </ul>
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
                  <a href="#principles" className="hover:text-[var(--color-teal-600)]">Data governance principles</a>
                </li>
                <li>
                  <a href="#lifecycle" className="hover:text-[var(--color-teal-600)]">Dataset lifecycle</a>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
