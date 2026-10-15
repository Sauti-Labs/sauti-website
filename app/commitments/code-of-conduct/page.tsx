import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Code of Conduct",
  description: "We are committed to working with integrity, respect, and care in our research and use of AI.",
  openGraph: {
    title: "Code of Conduct | Sauti Labs",
    description: "We are committed to working with integrity, respect, and care in our research and use of AI.",
    url: "https://sauti.ai/commitments/code-of-conduct",
  },
};

export default function CodeOfConduct() {
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
              <span className="font-medium">Code of Conduct</span>
            </nav>

            {/* Header */}
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Code of Conduct
            </h1>
            <p className="text-lg text-[var(--color-slate)] leading-relaxed mb-12">
              We are committed to working with integrity, respect, and care in our research and use of AI.
            </p>

            <div className="max-w-[65ch] space-y-10 text-[var(--color-slate)] leading-relaxed">
              <section id="scope">
                <h2 className="text-2xl font-heading font-semibold mb-4">Who this covers</h2>
                <p>This proposed code applies to founders, employees, contractors, researchers, contributors, and representatives acting for Sauti Labs.</p>
              </section>
              <section id="standards">
                <h2 className="text-2xl font-heading font-semibold mb-4">Standards</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Act with integrity and honesty.</li>
                  <li>Treat people with respect and support inclusion.</li>
                  <li>Conduct research responsibly and communicate its limits.</li>
                  <li>Use AI responsibly and consider potential harms.</li>
                  <li>Respect confidentiality and protect information entrusted to us.</li>
                  <li>Disclose and appropriately manage conflicts of interest.</li>
                  <li>Respect intellectual property and applicable permissions.</li>
                </ul>
              </section>
              <section id="concerns">
                <h2 className="text-2xl font-heading font-semibold mb-4">Raising concerns</h2>
                <p>We are committed to taking concerns seriously and considering them fairly. Reporting channel and contact details: [To be confirmed]</p>
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
                  <a href="#scope" className="hover:text-[var(--color-teal-600)]">Who this covers</a>
                </li>
                <li>
                  <a href="#standards" className="hover:text-[var(--color-teal-600)]">Standards</a>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
