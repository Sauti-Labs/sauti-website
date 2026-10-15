import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security",
  description: "We aim to consider security throughout our work and the AI lifecycle.",
  openGraph: {
    title: "Security | Sauti Labs",
    description: "We aim to consider security throughout our work and the AI lifecycle.",
    url: "https://sauti.ai/commitments/security",
  },
};

export default function Security() {
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
              <span className="font-medium">Security</span>
            </nav>

            {/* Header */}
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Security
            </h1>
            <p className="text-lg text-[var(--color-slate)] leading-relaxed mb-12">
              We aim to consider security throughout our work and the AI lifecycle.
            </p>

            <div className="max-w-[65ch] space-y-10 text-[var(--color-slate)] leading-relaxed">
              <section id="commitment">
                <h2 className="text-2xl font-heading font-semibold mb-4">Security commitment</h2>
                <p>We are committed to treating security as an ongoing consideration in our research, products, and internal use of AI tools. This statement describes our intentions and does not claim a particular certification, audit, or set of controls.</p>
              </section>
              <section id="principles">
                <h2 className="text-2xl font-heading font-semibold mb-4">Principles</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Considering security during design and development.</li>
                  <li>Limiting access according to role and need.</li>
                  <li>Considering multiple layers of protection.</li>
                  <li>Taking a risk-based approach that reflects context and potential impact.</li>
                  <li>Reviewing security considerations as systems and risks change.</li>
                </ul>
              </section>
              <section id="protected">
                <h2 className="text-2xl font-heading font-semibold mb-4">What we seek to protect</h2>
                <p>Our security considerations include information, research data, systems, services, and the people and communities who may be affected by them.</p>
              </section>
              <section id="lifecycle">
                <h2 className="text-2xl font-heading font-semibold mb-4">Security across the AI lifecycle</h2>
                <p>We aim to consider security in infrastructure, data, applications and APIs, model development and use, identity and access, and service resilience. We do not publish operational details that could make systems or people less safe.</p>
              </section>
              <section id="reporting">
                <h2 className="text-2xl font-heading font-semibold mb-4">Vulnerability reporting</h2>
                <p>We welcome responsible reports of potential security issues. Reporting contact details: [To be confirmed]</p>
              </section>
              <section id="incidents">
                <h2 className="text-2xl font-heading font-semibold mb-4">Incident handling</h2>
                <p>We aim to assess and respond to security concerns appropriately, including considering relevant notification obligations and steps to reduce potential harm.</p>
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
                    href="/commitments/data-governance"
                    className="text-[var(--color-teal-600)] hover:underline"
                  >
                    Data and Research Governance
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
                  <a href="#principles" className="hover:text-[var(--color-teal-600)]">Principles</a>
                </li>
                <li>
                  <a href="#lifecycle" className="hover:text-[var(--color-teal-600)]">AI lifecycle</a>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
