import Link from "next/link";
import type { Metadata } from "next";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Language Resources",
  description: "Reliable datasets, documented corpora and benchmarks.",
  openGraph: {
    title: "Language Resources | Sauti Labs",
    description: "Reliable datasets, documented corpora and benchmarks.",
    url: "https://sauti.ai/research/language-resources",
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
    "Building high-quality language datasets",
    "Creating benchmarks that measure progress",
    "Expanding linguistic coverage and accessibility",
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

        {/* Header - Equal 50/50 Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-12 md:mb-16">
          <div className="lg:col-span-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight text-[var(--color-text,#0f172a)]">
              Language Resources
            </h1>
          </div>
          <div className="lg:col-span-6">
            <p className="text-xl md:text-2xl text-[var(--color-slate,#475569)] leading-relaxed font-normal">
              Reliable datasets, documented corpora and benchmarks
            </p>
          </div>
        </div>

        {/* Team Navigation */}
        <nav className="mb-12 overflow-x-auto">
          <div className="flex gap-8 border-b border-[var(--color-border,#e2e8f0)] pb-1">
            {teams.map((team) => (
              <Link
                key={team.href}
                href={team.href}
                className={cn(
                  "pb-4 text-sm font-medium whitespace-nowrap transition-colors",
                  team.href === "/research/language-resources"
                    ? "font-semibold border-b-2 border-[var(--color-teal-600)]"
                    : "hover:text-[var(--color-teal-600)]"
                )}
              >
                {team.label}
              </Link>
            ))}
          </div>
        </nav>

        {/* Research Areas */}
        <div className="space-y-8">
          {researchAreas.map((area) => (
            <div key={area} className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-b border-[var(--color-border,#e2e8f0)]">
              <h2 className="text-xl font-heading font-semibold md:col-span-1">
                {area}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}