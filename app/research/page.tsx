import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Our research teams advance speech and language intelligence for African languages, investigating the models, data, and systems needed to build AI that understands, speaks, and serves the linguistic diversity of Africa.",
  openGraph: {
    title: "Research | Sauti Labs",
    description:
      "Our research teams advance speech and language intelligence for African languages, investigating the models, data, and systems needed to build AI that understands, speaks, and serves the linguistic diversity of Africa.",
    url: "https://sauti.ai/research",
  },
};

export default function Research() {
  const teamCards = [
    {
      href: "/research/speech-intelligence",
      title: "Speech Intelligence",
      description:
        "The Speech Intelligence team researches the models and systems that enable machines to understand and generate African speech, advancing speech recognition, synthesis, voice technologies, and robust multilingual speech processing.",
    },
    {
      href: "/research/language-intelligence",
      title: "Language Intelligence",
      description:
        "The Language Intelligence team develops and studies AI systems that understand, process, and generate African languages, advancing multilingual language modeling, natural language understanding, and generation across diverse linguistic contexts.",
    },
    {
      href: "/research/language-resources",
      title: "Language Resources",
      description:
        "The Language Resources team builds the datasets, corpora, benchmarks, and linguistic resources needed to develop and evaluate AI for African languages, with an emphasis on data quality, coverage, and research reproducibility. ",
    },
    {
      href: "/research/model-intelligence",
      title: "Model Intelligence",
      description:
        "The Model Intelligence team investigates how to train, evaluate, optimize, and deploy capable AI models, advancing architectures, learning methods, and efficient systems for speech and language tasks. ",
    },
    {
      href: "/research/responsible-ai",
      title: "Responsible AI",
      description:
        "The Responsible AI team investigates the safety, fairness, robustness, and societal implications of AI for African languages, developing approaches that support trustworthy systems and responsible deployment across diverse communities. ",
    },
  ];

  return (
    <div className="flex flex-col pt-8">
      <div className="max-w-[1440px] w-full mx-auto px-6 py-12 md:py-16">
        {/* Header - Equal 50/50 Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-12 md:mb-16">
          <div className="lg:col-span-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight text-[var(--color-text,#0f172a)]">
              Research
            </h1>
          </div>
          <div className="lg:col-span-6">
            <p className="text-xl md:text-2xl text-[var(--color-slate,#475569)] leading-relaxed font-normal">
              Our research teams advance speech and language intelligence for
              African languages, investigating the models, data, and systems
              needed to build AI that understands, speaks, and serves the
              linguistic diversity of Africa.
            </p>
          </div>
        </div>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamCards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group p-8 border border-[var(--color-border,#e2e8f0)] hover:border-[var(--color-teal-600)] transition-colors rounded-lg"
            >
              <h2 className="text-xl font-heading font-semibold mb-3 group-hover:text-[var(--color-teal-600)] transition-colors">
                {card.title}
              </h2>
              <p className="text-[var(--color-slate,#475569)] mb-6 leading-relaxed">
                {card.description}
              </p>
              <span className="inline-flex items-center text-sm font-medium text-[var(--color-teal-600)]">
                Explore
                <svg
                  className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}