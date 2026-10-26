import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Speech Intelligence",
  description: "Sauti Labs researches speech recognition, speech generation, voice AI, and multilingual speech systems for African languages and accents.",
  alternates: {
    canonical: "/research/speech-intelligence",
  },
  openGraph: {
    title: "Speech Intelligence | Sauti Labs",
    description: "Sauti Labs researches speech recognition, speech generation, voice AI, and multilingual speech systems for African languages and accents.",
    url: "https://sautilabs.co.ke/research/speech-intelligence",
    images: [{ url: "/opengraph-image", alt: "Speech Intelligence research at Sauti Labs" }],
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

        <section
          className="mt-12 md:mt-16"
          aria-labelledby="speech-research-areas-heading"
        >
          <div className="mb-10 md:mb-14">
            <h2
              id="speech-research-areas-heading"
              className="font-heading text-3xl font-semibold leading-tight tracking-tight text-[var(--color-text,#0f172a)] md:text-4xl lg:text-5xl"
            >
              Research areas
            </h2>
          </div>

          <div className="grid grid-cols-1 items-center gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="grid grid-cols-[2rem_minmax(0,1fr)] gap-4 md:grid-cols-[3rem_minmax(0,1fr)] md:gap-6">
              <span className="pt-1 text-sm font-medium tabular-nums tracking-wide text-[var(--color-teal-600)]">
                01
              </span>

              <div className="max-w-2xl">
                <h3 className="font-heading text-xl font-semibold leading-snug tracking-tight text-[var(--color-text,#0f172a)] md:text-2xl">
                  Speech Recognition and Perception
                </h3>

                <p className="mt-5 text-base leading-7 text-[var(--color-slate,#475569)] md:text-lg md:leading-8">
                The team explores how AI systems recognise and interpret spoken language from audio signals. Its work spans automatic speech recognition, acoustic modelling, and pronunciation variation, addressing the challenges of understanding speech across African languages, accents, and speaking conditions.
                </p>
              </div>
            </div>

            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-neutral-100">
              <Image
                src="/hands.jpeg"
                alt="Visual representation of speech and language research"
                fill
                className="object-cover"
                sizes="(max-width: 1023px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="mt-12 border-t border-[var(--color-border,#e2e8f0)] md:mt-16">
            <article className="grid grid-cols-[2rem_minmax(0,1fr)] gap-4 border-b border-[var(--color-border,#e2e8f0)] py-7 md:grid-cols-[3rem_minmax(0,1fr)] md:gap-6 md:py-9">
              <span className="pt-1 text-sm font-medium tabular-nums tracking-wide text-[var(--color-teal-600)]">
                02
              </span>

              <div className="max-w-4xl">
                <h3 className="font-heading text-xl font-semibold leading-snug tracking-tight text-[var(--color-text,#0f172a)] md:text-2xl">
                  Speech Synthesis and Generation
                </h3>

                <p className="mt-3 text-base leading-7 text-[var(--color-slate,#475569)] md:mt-4 md:text-lg md:leading-8">
                  Advancing natural, intelligible, and expressive speech in African languages requires models that capture more than words alone. This research area focuses on text-to-speech, acoustic speech generation, pronunciation and prosody modelling, and multilingual speech synthesis.
                </p>
              </div>
            </article>

            <article className="grid grid-cols-[2rem_minmax(0,1fr)] gap-4 border-b border-[var(--color-border,#e2e8f0)] py-7 md:grid-cols-[3rem_minmax(0,1fr)] md:gap-6 md:py-9">
              <span className="pt-1 text-sm font-medium tabular-nums tracking-wide text-[var(--color-teal-600)]">
                03
              </span>

              <div className="max-w-4xl">
                <h3 className="font-heading text-xl font-semibold leading-snug tracking-tight text-[var(--color-text,#0f172a)] md:text-2xl">
                  Multilingual and Cross-Lingual Speech Modelling
                </h3>

                <p className="mt-3 text-base leading-7 text-[var(--color-slate,#475569)] md:mt-4 md:text-lg md:leading-8">
                  Many African languages remain underserved by speech technologies. By studying shared speech representations, cross-lingual transfer, and language adaptation, the team seeks to understand how models can learn across languages and apply that knowledge to languages with limited training data.
                </p>
              </div>
            </article>

            <article className="grid grid-cols-[2rem_minmax(0,1fr)] gap-4 border-b border-[var(--color-border,#e2e8f0)] py-7 md:grid-cols-[3rem_minmax(0,1fr)] md:gap-6 md:py-9">
              <span className="pt-1 text-sm font-medium tabular-nums tracking-wide text-[var(--color-teal-600)]">
                04
              </span>

              <div className="max-w-4xl">
                <h3 className="font-heading text-xl font-semibold leading-snug tracking-tight text-[var(--color-text,#0f172a)] md:text-2xl">
                  Robust and Adaptive Speech Systems
                </h3>

                <p className="mt-3 text-base leading-7 text-[var(--color-slate,#475569)] md:mt-4 md:text-lg md:leading-8">
                  Speech technologies must work beyond controlled recording environments. This area examines acoustic robustness, speaker variation, and adaptation to changing conditions, with the goal of making speech recognition and generation more reliable across diverse speakers, accents, and real-world settings.
                </p>
              </div>
            </article>
          </div>
        </section>

      </div>
    </div>
  );
}
