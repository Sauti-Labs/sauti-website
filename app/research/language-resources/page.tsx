import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Language Resources",
  description:
    "Sauti Labs develops documented speech and text datasets, corpora, benchmarks, and linguistic resources to support African-language AI research and evaluation.",
  alternates: {
    canonical: "/research/language-resources",
  },
  openGraph: {
    title: "Language Resources | Sauti Labs",
    description:
      "Sauti Labs develops documented speech and text datasets, corpora, benchmarks, and linguistic resources to support African-language AI research and evaluation.",
    url: "https://sauti.ai/research/language-resources",
    images: [{ url: "/opengraph-image", alt: "African-language datasets and language resources at Sauti Labs" }],
  },
};

export default function LanguageResources() {
  const teams = [
    { href: "/research/speech-intelligence", label: "Speech Intelligence" },
    { href: "/research/language-intelligence", label: "Language Intelligence" },
    { href: "/research/language-resources", label: "Language Resources" },
    { href: "/research/model-intelligence", label: "Model Intelligence" },
    { href: "/research/responsible-ai", label: "Responsible AI" },
  ];

  const researchAreas = [
    {
      title: "Corpus Engineering & Dataset Development",
      description: "Building structured, reusable speech, text, and translation datasets through corpus construction, data acquisition, processing, and organisation.",
    },
    {
      title: "Data Quality & Validation",
      description: "Evaluating data consistency, accuracy, structure, duplication, and suitability for language research and engineering.",
    },
    {
      title: "Linguistic Annotation & Representation",
      description: "Developing annotation approaches for transcription, orthographic conventions, and linguistic metadata appropriate to each language resource.",
    },
    {
      title: "Language Coverage & Resource Development",
      description: "Identifying resource gaps and developing language resources for African languages that remain underrepresented in language technology.",
    },
    {
      title: "Dataset Documentation, Provenance & Governance",
      description: "Documenting resource origins, metadata, licensing, and versions to support traceability and responsible use.",
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
          <span className="font-medium">Language Resources</span>
        </nav>

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-8 md:mb-10">
          <div className="lg:col-span-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight text-[var(--color-text,#0f172a)]">
              Language Resources
            </h1>
          </div>

          <div className="lg:col-span-6">
            <p className="text-xl md:text-2xl text-[var(--color-slate,#475569)] leading-relaxed font-normal">
              African-language AI depends on high-quality language resources. The Language Resources team builds and maintains the speech, text, and translation datasets, linguistic corpora, and annotation systems that support Sauti Labs&apos; research and engineering. Its work spans data acquisition, cleaning, validation, linguistic annotation, dataset documentation, and provenance, licensing, and version management, helping ensure that the resources used to develop African-language AI are reliable, traceable, and fit for purpose.
            </p>

            <p className="mt-5 text-base md:text-lg text-[var(--color-slate,#475569)] leading-relaxed">
              <span className="font-semibold">Research teams:</span>{" "}
              {teams.map((team, index) => (
                <span key={team.href}>
                  {index > 0 && " · "}
                  <Link
                    href={team.href}
                    className={cn(
                      "underline underline-offset-4 hover:text-[var(--color-teal-600)]",
                      false
                    )}
                  >
                    {team.label}
                  </Link>
                </span>
              ))}
            </p>
          </div>
        </div>

        <div className="border-t-2 border-neutral-950" aria-hidden="true" />

        {/* Research Areas: 60/40 layout */}
        <section
          aria-labelledby="research-areas-heading"
          className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12 items-start pt-8 md:pt-10"
        >
          <div className="min-w-0 lg:col-span-3">
            <h2
              id="research-areas-heading"
              className="mb-6 text-3xl md:text-4xl font-heading font-semibold tracking-tight"
            >
              Research areas
            </h2>

            <div className="border-t border-[var(--color-border,#d1d5db)]">
              {researchAreas.map((area, index) => (
                <details
                  key={area.title}
                  className="group border-b border-[var(--color-border,#d1d5db)]"
                >
                  <summary className="flex min-h-24 cursor-pointer list-none items-center gap-4 py-6 [&::-webkit-details-marker]:hidden">
                    <span className="shrink-0 text-sm font-semibold tabular-nums text-[var(--color-slate,#64748b)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="flex-1 text-lg md:text-xl font-heading font-semibold leading-snug">
                      {area.title}
                    </span>

                    <span
                      aria-hidden="true"
                      className="ml-2 shrink-0 text-2xl font-light transition-transform duration-200 group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>

                  <div className="pb-7 pl-10 pr-4">
                    <p className="text-base leading-relaxed text-[var(--color-slate,#475569)]">
                      {area.description}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>

          <div className="min-w-0 lg:col-span-2">
            <Image
              src="/Language Resource.jpeg"
              alt="Language Resource artwork"
              width={720}
              height={974}
              sizes="(max-width: 1023px) 100vw, 40vw"
              className="block h-auto w-full object-contain"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
