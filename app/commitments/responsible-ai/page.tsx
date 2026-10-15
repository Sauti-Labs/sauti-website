import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Responsible AI",
  description: "We aim to build and use AI with care for people, language communities, and the impacts of these systems.",
  openGraph: {
    title: "Responsible AI | Sauti Labs",
    description: "We aim to build and use AI with care for people, language communities, and the impacts of these systems.",
    url: "https://sauti.ai/commitments/responsible-ai",
  },
};

export default function ResponsibleAI() {
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
              <span className="font-medium">Responsible AI</span>
            </nav>

            {/* Header */}
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Responsible AI
            </h1>
            <p className="text-lg text-[var(--color-slate)] leading-relaxed mb-12">
              We aim to build and use AI with care for people, language communities, and the impacts of these systems.
            </p>

            <div className="max-w-[65ch] space-y-10 text-[var(--color-slate)] leading-relaxed">
              <section id="scope">
                <h2 className="text-2xl font-heading font-semibold mb-4">Scope</h2>
                <p>This commitment covers the AI Sauti Labs builds and the AI tools it uses internally.</p>
              </section>
              <section id="principles">
                <h2 className="text-2xl font-heading font-semibold mb-4">Principles</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Safety:</strong> We aim to consider potential harms and reduce risks throughout AI work.</li>
                  <li><strong>Fairness and inclusion:</strong> We aim to account for differences between people, languages, and communities.</li>
                  <li><strong>Privacy:</strong> We are committed to respecting people&apos;s privacy and handling personal data carefully.</li>
                  <li><strong>Transparency:</strong> We aim to explain relevant capabilities, limitations, and uses.</li>
                  <li><strong>Accountability:</strong> We aim to take responsibility for decisions and address concerns.</li>
                  <li><strong>Reliability:</strong> We aim to understand where systems may fail and communicate uncertainty.</li>
                  <li><strong>Respect for language communities:</strong> We are committed to treating languages and their communities with respect.</li>
                </ul>
              </section>
              <section>
                <h2 className="text-2xl font-heading font-semibold mb-4">Putting the principles into practice</h2>
                <p>We aim to consider these principles when choosing data, designing and evaluating systems, and deciding whether and how to share or use AI outputs.</p>
              </section>
              <section>
                <h2 className="text-2xl font-heading font-semibold mb-4">Areas of responsibility</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Considering fairness across languages and communities.</li>
                  <li>Considering misuse, including potential misuse of voice-cloning technology.</li>
                  <li>Explaining system limitations and avoiding unsupported claims.</li>
                  <li>Considering when human oversight is appropriate.</li>
                </ul>
              </section>
              <section>
                <h2 className="text-2xl font-heading font-semibold mb-4">Evaluation and accountability</h2>
                <p>We aim to evaluate relevant risks as our work develops, listen to concerns, and review our approach when evidence or circumstances change.</p>
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
                    href="/research/responsible-ai"
                    className="text-[var(--color-teal-600)] hover:underline"
                  >
                    Research: Responsible AI
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
                  <a href="#scope" className="hover:text-[var(--color-teal-600)]">Scope</a>
                </li>
                <li>
                  <a href="#principles" className="hover:text-[var(--color-teal-600)]">Principles</a>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
