import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Language Intelligence",
  description:
    "Research into multilingual language understanding, language generation, and the evaluation of language models across African languages.",
  alternates: {
    canonical: "/research/language-intelligence",
  },
  openGraph: {
    title: "Language Intelligence | Sauti Labs",
    description:
      "Research into multilingual language understanding, language generation, and the evaluation of language models across African languages.",
    url: "https://sauti.ai/research/language-intelligence",
    images: [{ url: "/opengraph-image", alt: "Language Intelligence research at Sauti Labs" }],
  },
};

const researchAreas = [
  {
    number: "01",
    title: "Multilingual Language Understanding",
    description:
      "Understanding language requires more than recognising words. Research in this area examines how models capture meaning, interpret context, and represent linguistic relationships across African languages, with particular attention to languages that remain underrepresented in digital data and modern language models.",
  },
  {
    number: "02",
    title: "Language Generation and Adaptation",
    description:
      "Generating language that feels natural and preserves meaning across linguistic and cultural contexts presents a distinct set of challenges. This research explores multilingual text generation, cross-lingual transfer, and model adaptation to advance the generation of coherent, contextually appropriate text across African languages.",
  },
  {
    number: "03",
    title: "Language Evaluation and Benchmarking",
    description:
      "Reliable language technology demands more than strong performance on widely used benchmarks. Research here investigates evaluation methodologies, language-specific benchmarks, and comparative assessments that expose model limitations, measure linguistic coverage, and reveal gaps in how language technologies serve Africa's diverse linguistic communities.",
  },
];

export default function LanguageIntelligence() {
  return (
    <div className="flex flex-col pt-8">
      <div className="mx-auto w-full max-w-[1440px] px-6 py-12 md:py-16">
        <nav className="mb-8 text-sm">
          <Link
            href="/research"
            className="text-[var(--color-slate)] hover:text-[var(--color-teal-600)]"
          >
            Research
          </Link>
          <span className="mx-2 text-[var(--color-slate)]">/</span>
          <span className="font-medium">Language Intelligence</span>
        </nav>

        <div className="mb-12 grid grid-cols-1 items-start gap-8 md:mb-16 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <h1 className="font-heading text-5xl font-bold tracking-tight text-[var(--color-text,#0f172a)] md:text-6xl lg:text-7xl">
              Language Intelligence
            </h1>
          </div>

          <div className="lg:col-span-6">
            <p className="text-xl font-normal leading-relaxed text-[var(--color-slate,#475569)] md:text-2xl">
              Language is central to how people communicate, reason, and
              express knowledge, yet language technologies remain unevenly
              developed across the world&apos;s linguistic diversity. Many
              African languages face limited representation in language
              models, evaluation benchmarks, and training data. The Language
              Intelligence team researches multilingual language
              understanding, language generation, and model evaluation to
              advance language technologies that better represent African
              languages.
            </p>

            <p className="mt-5 text-base leading-relaxed text-[var(--color-slate,#475569)] md:text-lg">
              <span className="font-semibold">Research teams:</span>{" "}
              <Link
                href="/research/speech-intelligence"
                className="underline underline-offset-4 hover:text-[var(--color-teal-600)]"
              >
                Speech Intelligence
              </Link>
              {" · "}
              <Link
                href="/research/language-intelligence"
                className="underline underline-offset-4 hover:text-[var(--color-teal-600)]"
              >
                Language Intelligence
              </Link>
              {" · "}
              <Link
                href="/research/language-resources"
                className="underline underline-offset-4 hover:text-[var(--color-teal-600)]"
              >
                Language Resources
              </Link>
              {" · "}
              <Link
                href="/research/model-intelligence"
                className="underline underline-offset-4 hover:text-[var(--color-teal-600)]"
              >
                Model Intelligence
              </Link>
              {" · "}
              <Link
                href="/research/responsible-ai"
                className="underline underline-offset-4 hover:text-[var(--color-teal-600)]"
              >
                Responsible AI
              </Link>
            </p>
          </div>
        </div>

        <div
          className="mx-4 border-t-2 border-neutral-950 md:mx-8"
          aria-hidden="true"
        />

        <section className="mt-10 md:mt-14">
          <div className="mb-8 md:mb-12">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-[var(--color-text,#0f172a)] md:text-4xl">
              Research areas
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-[var(--color-slate,#475569)] md:text-lg">
              Investigating the capabilities, limitations, and possibilities
              of language technologies across African languages.
            </p>
          </div>

          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <div className="relative mx-auto aspect-[690/1081] w-full max-w-[460px] overflow-hidden rounded-sm bg-[var(--color-border,#e2e8f0)] lg:mx-0">
                <Image
                  src="/Language%20Inteligence.jpeg"
                  alt="African artwork accompanying Sauti Labs Language Intelligence research"
                  fill
                  sizes="(max-width: 1023px) 90vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7">
              {researchAreas.map((area, index) => (
                <article
                  key={area.number}
                  className={`py-7 md:py-9 ${
                    index === 0 ? "border-t" : ""
                  } border-b border-[var(--color-border,#e2e8f0)]`}
                >
                  <div className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-4 md:grid-cols-[3rem_minmax(0,1fr)] md:gap-6">
                    <span className="pt-1 text-sm font-medium tracking-wider text-[var(--color-teal-600)]">
                      {area.number}
                    </span>

                    <div>
                      <h3 className="font-heading text-xl font-semibold leading-snug tracking-tight text-[var(--color-text,#0f172a)] md:text-2xl">
                        {area.title}
                      </h3>

                      <p className="mt-4 text-base leading-7 text-[var(--color-slate,#475569)] md:text-lg md:leading-8">
                        {area.description}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
