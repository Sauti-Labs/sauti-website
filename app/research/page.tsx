import { ClickableWrap } from "@/components/ui/ClickableWrap";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research",
  description: "Our research focuses on building the foundational AI capabilities for African languages, from speech recognition to language modeling.",
  openGraph: {
    title: "Research | Sauti Labs",
    description: "Our research focuses on building the foundational AI capabilities for African languages, from speech recognition to language modeling.",
    url: "https://sauti.ai/research",
  },
};

export default function Research() {
  const researchAreas = [
    {
      title: "Speech Recognition",
      description: "Building ASR systems for African languages with diverse accents and dialects.",
      status: "Active",
      href: "/research/speech-recognition",
    },
    {
      title: "Language Modeling",
      description: "Training large language models that understand African linguistic structures.",
      status: "Active",
      href: "/research/language-modeling",
    },
    {
      title: "Text-to-Speech",
      description: "Creating natural-sounding synthesis for African languages.",
      status: "In Development",
      href: "/research/text-to-speech",
    },
    {
      title: "Translation",
      description: "Machine translation between African languages and major world languages.",
      status: "Active",
      href: "/research/translation",
    },
  ];

  const publications = [
    {
      title: "African Languages in the Age of AI",
      authors: "Sauti Labs Team",
      year: "2024",
      journal: "ACL Workshop",
    },
    {
      title: "Low-Resource Speech Recognition for Swahili",
      authors: "K. Ochieng et al.",
      year: "2024",
      journal: "Interspeech",
    },
  ];

  return (
    <div className="min-h-screen bg-ivory">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h1 className="text-5xl md:text-6xl font-heading font-semibold text-ink mb-6">
            Research
          </h1>
          <p className="text-xl font-serif text-slate">
            Our research focuses on building the foundational AI capabilities for African languages, from speech recognition to language modeling.
          </p>
        </div>

        {/* Research Areas */}
        <section className="mb-20">
          <h2 className="text-3xl font-heading font-semibold text-ink mb-8">
            Research Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {researchAreas.map((area) => (
              <ClickableWrap
                key={area.title}
                href={area.href}
                label={`Learn more about ${area.title} research`}
              >
                <div className="bg-white p-8 rounded-lg border border-stone hover:border-clay transition-colors h-full">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-heading font-semibold text-ink">
                      {area.title}
                    </h3>
                    <span className="text-xs font-mono px-3 py-1 bg-oat text-ink rounded-full">
                      {area.status}
                    </span>
                  </div>
                  <p className="text-slate font-serif">{area.description}</p>
                </div>
              </ClickableWrap>
            ))}
          </div>
        </section>

        {/* Publications */}
        <section>
          <h2 className="text-3xl font-heading font-semibold text-ink mb-8">
            Publications
          </h2>
          <div className="space-y-4">
            {publications.map((pub) => (
              <div
                key={pub.title}
                className="bg-white p-6 rounded-lg border border-stone"
              >
                <h3 className="text-lg font-heading font-semibold text-ink mb-2">
                  {pub.title}
                </h3>
                <p className="text-sm text-slate mb-1">{pub.authors}</p>
                <p className="text-sm font-mono text-stone">
                  {pub.journal} • {pub.year}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
