import Link from "next/link";
import type { Metadata } from "next";

const researchDescription =
  "Our research teams advance speech and language intelligence for African languages, combining research, data, and engineering to develop the models, methods, and technologies needed to understand, generate, and support communication across Africa's linguistic diversity.";

export const metadata: Metadata = {
  title: "Research",
  description: researchDescription,
  openGraph: {
    title: "Research | Sauti Labs",
    description: researchDescription,
    url: "https://sauti.ai/research",
  },
};

export default function Research() {
  const teamCards = [
    {
      href: "/research/speech-intelligence",
      title: "Speech Intelligence",
      description:
        "The Speech Intelligence team advances the models and systems that enable machines to recognise, understand, and generate African speech, spanning speech recognition, synthesis, voice technologies, and multilingual speech processing.",
    },
    {
      href: "/research/language-intelligence",
      title: "Language Intelligence",
      description:
        "The Language Intelligence team advances AI capabilities for understanding, processing, and generating African languages, including multilingual language modelling, natural language understanding, and text generation across diverse linguistic contexts.",
    },
    {
      href: "/research/language-resources",
      title: "Language Resources",
      description:
        "The Language Resources team develops and curates datasets, corpora, benchmarks, and linguistic resources that support the development and evaluation of African language AI, with an emphasis on data quality, coverage, documentation, and reproducibility.",
    },
    {
      href: "/research/model-intelligence",
      title: "Model Intelligence",
      description:
        "The Model Intelligence team explores model architectures, training and adaptation methods, evaluation, and optimisation to improve the capability, efficiency, and deployability of AI models for speech and language tasks.",
    },
    {
      href: "/research/responsible-ai",
      title: "Responsible AI",
      description:
        "The Responsible AI team examines safety, fairness, privacy, robustness, and the societal implications of AI for African languages, helping shape approaches to building, evaluating, and deploying trustworthy systems across diverse communities.",
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
              {researchDescription}
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
