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
  const featuredArea = {
    title: "Understanding speech across languages",
    description:
      "Developing robust automatic speech recognition (ASR) systems capable of handling complex phonetic structures, code-switching, low-resource audio datasets, and diverse regional dialects across the African continent.",
    imageSrc: "/hands.jpeg", // Update with your image path
    imageAlt: "Speech recognition wave visualization across diverse languages",
  };

  const secondaryAreas = [
    {
      title: "Generating natural and expressive speech",
      description:
        "Building text-to-speech (TTS), voice cloning, and audio synthesis models that capture natural prosody, emotion, tone, and vocal nuance tailored to native speakers.",
    },
    {
      title: "Building speech systems for real-world use",
      description:
        "Designing lightweight, latency-optimized end-to-end voice agents, real-time dubbing tools, and deployable speech infrastructure optimized for edge devices and low-connectivity settings.",
    },
  ];

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
          </div>
        </div>

        {/* Research Areas Section */}
        <section className="space-y-12 md:space-y-16">
          {/* Top Row: Featured 1st Area with Image First (Left) and Text Second (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-8 md:p-10 rounded-2xl bg-[var(--color-bg-subtle,#f8fafc)] border border-[var(--color-border,#e2e8f0)]">
            <div className="lg:col-span-6 relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-slate-200">
              <Image
                src={featuredArea.imageSrc}
                alt={featuredArea.imageAlt}
                fill
                className="object-contain transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>

            <div className="lg:col-span-6 space-y-4">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-[var(--color-text,#0f172a)]">
                {featuredArea.title}
              </h2>
              <p className="text-base md:text-lg text-[var(--color-slate,#475569)] leading-relaxed">
                {featuredArea.description}
              </p>
            </div>
          </div>

          {/* Bottom Row: 2nd and 3rd Areas Side-by-Side Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {secondaryAreas.map((area, index) => (
              <div
                key={area.title}
                className="flex flex-col justify-between p-8 rounded-2xl border border-[var(--color-border,#e2e8f0)] bg-white hover:border-[var(--color-teal-600,#0d9488)] transition-colors"
              >
                <div className="space-y-4">
                  <h3 className="text-xl md:text-2xl font-heading font-semibold text-[var(--color-text,#0f172a)]">
                    {area.title}
                  </h3>
                  <p className="text-base text-[var(--color-slate,#475569)] leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}