import Link from "next/link";
import type { Metadata } from "next";
import ModelResearchAreas from "./ModelResearchAreas";

export const metadata: Metadata = {
  title: "Model Intelligence",
  description: "Research into model training and adaptation, performance evaluation, and computational efficiency for African languages.",
  alternates: {
    canonical: "/research/model-intelligence",
  },
  openGraph: {
    title: "Model Intelligence | Sauti Labs",
    description: "Research into model training and adaptation, performance evaluation, and computational efficiency for African languages.",
    url: "https://sautilabs.co.ke/research/model-intelligence",
    images: [{ url: "/opengraph-image", alt: "Model Intelligence research at Sauti Labs" }],
  },
};

export default function ModelIntelligence() {


  return (
    <div className="flex flex-col pt-8">
      <div className="max-w-[1440px] w-full mx-auto px-6 py-12 md:py-16">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <Link href="/research" className="text-[var(--color-slate)] hover:text-[var(--color-teal-600)]">
            Research
          </Link>
          <span className="mx-2 text-[var(--color-slate)]">/</span>
          <span className="font-medium">Model Intelligence</span>
        </nav>        {/* Header */}
        <div className="mb-12 grid grid-cols-1 items-start gap-8 md:mb-16 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <h1 className="font-heading text-5xl font-bold tracking-tight text-[var(--color-text,#0f172a)] md:text-6xl lg:text-7xl">
              Model Intelligence
            </h1>
          </div>

          <div className="lg:col-span-6">
            <p className="text-xl font-normal leading-relaxed text-[var(--color-slate,#475569)] md:text-2xl">
              Model performance depends on more than the size of a model or the volume of its training data. Many African languages face limited training resources, evaluation benchmarks, and computing infrastructure, creating challenges for developing reliable and efficient language technologies. The Model Intelligence team researches model training and adaptation, performance evaluation, and computational efficiency to advance models that work effectively across African languages and can be deployed under practical resource constraints.
            </p>

            <p className="mt-5 text-base leading-relaxed text-[var(--color-slate,#475569)] md:text-lg">
              <span className="font-semibold">Research teams:</span>{" "}
              <Link href="/research/speech-intelligence" className="underline underline-offset-4 hover:text-[var(--color-teal-600)]">
                Speech Intelligence
              </Link>
              {" · "}
              <Link href="/research/language-intelligence" className="underline underline-offset-4 hover:text-[var(--color-teal-600)]">
                Language Intelligence
              </Link>
              {" · "}
              <Link href="/research/language-resources" className="underline underline-offset-4 hover:text-[var(--color-teal-600)]">
                Language Resources
              </Link>
              {" · "}
              <Link href="/research/model-intelligence" className="underline underline-offset-4 hover:text-[var(--color-teal-600)]">
                Model Intelligence
              </Link>
              {" · "}
              <Link href="/research/responsible-ai" className="underline underline-offset-4 hover:text-[var(--color-teal-600)]">
                Responsible AI
              </Link>
            </p>
          </div>
        </div>

        <div
          className="mx-4 border-t-2 border-neutral-950 md:mx-8"
          aria-hidden="true"
        />

        <ModelResearchAreas />

      </div>
    </div>
  );
}
