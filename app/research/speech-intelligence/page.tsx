import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Speech Intelligence",
  description: "Why speech AI struggles across African accents, languages and data gaps.",
  openGraph: {
    title: "Speech Intelligence | Sauti Labs",
    description: "Why speech AI struggles across African accents, languages and data gaps.",
    url: "https://sauti.ai/research/speech-intelligence",
  },
};

export default function SpeechIntelligence() {
  return (
    <div className="flex flex-col pt-8">
      <div className="max-w-[1440px] w-full mx-auto px-6 py-12 md:py-16">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <Link href="/research" className="text-[var(--color-slate)] hover:text-[var(--color-teal-600)]">
            Research
          </Link>
          <span className="mx-2 text-[var(--color-slate)]">/</span>
          <span className="font-medium">Speech Intelligence</span>
        </nav>

        {/* Header - Equal 50/50 Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-12 md:mb-16">
          <div className="lg:col-span-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight text-[var(--color-text,#0f172a)]">
              Speech Intelligence
            </h1>
          </div>
          <div className="lg:col-span-6">
            <p className="text-xl md:text-2xl text-[var(--color-slate,#475569)] leading-relaxed font-normal">
              Speech is one of the most natural ways people communicate, yet AI systems still struggle to understand and generate speech across the linguistic diversity of Africa. Differences in language, accent, pronunciation, speaking style, and available training data create significant challenges for building reliable speech technologies. The Speech Intelligence team researches the models, methods, and systems needed to make speech AI work across African languages, from automatic speech recognition and speech synthesis to voice cloning, dubbing, and spoken-language interaction.
            </p>

            <p className="mt-5 text-base md:text-lg text-[var(--color-slate,#475569)] leading-relaxed">
              <span className="font-semibold">Research teams:</span>{" "}
              <Link href="/research/speech-intelligence" className="underline underline-offset-4 hover:text-[var(--color-teal-600)]">Speech Intelligence</Link>
              {" · "}
              <Link href="/research/language-intelligence" className="underline underline-offset-4 hover:text-[var(--color-teal-600)]">Language Intelligence</Link>
              {" · "}
              <Link href="/research/language-resources" className="underline underline-offset-4 hover:text-[var(--color-teal-600)]">Language Resources</Link>
              {" · "}
              <Link href="/research/model-intelligence" className="underline underline-offset-4 hover:text-[var(--color-teal-600)]">Model Intelligence</Link>
              {" · "}
              <Link href="/research/responsible-ai" className="underline underline-offset-4 hover:text-[var(--color-teal-600)]">Responsible AI</Link>
            </p>
          </div>
        </div>

        <div className="mx-4 md:mx-8 border-t-2 border-neutral-950" aria-hidden="true" />

        <section className="mt-8 md:mt-10">
          <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight text-[var(--color-text,#0f172a)]">
            Research areas
          </h2>

          <div className="mt-10 md:mt-14">
            {/* Research area 01: text left, image right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className="max-w-2xl">
                <h3 className="text-2xl md:text-3xl font-heading font-bold tracking-tight text-[var(--color-text,#0f172a)]">
                  Speech Recognition and Perception
                </h3>
                <p className="mt-4 text-base md:text-lg text-[var(--color-slate,#475569)] leading-relaxed">
                  The team explores how AI systems recognise and interpret spoken language from audio signals. Its work spans automatic speech recognition, acoustic modelling, and pronunciation variation, addressing the challenges of understanding speech across African languages, accents, and speaking conditions.
                </p>
              </div>

              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
                <Image
                  src="/hands.jpeg"
                  alt="Visual representation of speech and language research"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Research area 02: full-width */}
            <div className="mt-16 md:mt-24 border-t border-neutral-200 pt-10 md:pt-14">
              <div className="max-w-4xl">
                <h3 className="text-2xl md:text-3xl font-heading font-bold tracking-tight text-[var(--color-text,#0f172a)]">
                  Speech Synthesis and Generation
                </h3>
                <p className="mt-4 text-base md:text-lg text-[var(--color-slate,#475569)] leading-relaxed">
                  Advancing natural, intelligible, and expressive speech in African languages requires models that capture more than words alone. This research area focuses on text-to-speech, acoustic speech generation, pronunciation and prosody modelling, and multilingual speech synthesis.
                </p>
              </div>
            </div>

            {/* Research areas 03 and 04: two columns */}
            <div className="mt-16 md:mt-24 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 border-t border-neutral-200 pt-10 md:pt-14">
              <div>
                <h3 className="text-2xl md:text-3xl font-heading font-bold tracking-tight text-[var(--color-text,#0f172a)]">
                  Multilingual and Cross-Lingual Speech Modelling
                </h3>
                <p className="mt-4 text-base md:text-lg text-[var(--color-slate,#475569)] leading-relaxed">
                  Many African languages remain underserved by speech technologies. By studying shared speech representations, cross-lingual transfer, and language adaptation, the team seeks to understand how models can learn across languages and apply that knowledge to languages with limited training data.
                </p>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-heading font-bold tracking-tight text-[var(--color-text,#0f172a)]">
                  Robust and Adaptive Speech Systems
                </h3>
                <p className="mt-4 text-base md:text-lg text-[var(--color-slate,#475569)] leading-relaxed">
                  Speech technologies must work beyond controlled recording environments. This area examines acoustic robustness, speaker variation, and adaptation to changing conditions, with the goal of making speech recognition and generation more reliable across diverse speakers, accents, and real-world settings.
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
