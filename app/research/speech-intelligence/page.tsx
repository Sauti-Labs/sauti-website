import Link from "next/link";
import type { Metadata } from "next";
import { cn } from "@/lib/utils";

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
  const teams = [
    { href: "/research/speech-intelligence", label: "Speech Intelligence" },
    { href: "/research/language-intelligence", label: "Language Intelligence" },
    { href: "/research/language-resources", label: "Language Resources" },
    { href: "/research/model-intelligence", label: "Model Intelligence" },
    { href: "/research/responsible-ai", label: "Responsible AI" },
  ];

  const researchAreas = [
    "Understanding speech across languages",
    "Generating natural and expressive speech",
    "Building speech systems for real-world use",
  ];

  return (
    <div className="flex flex-col pt-16">
      <div className="max-w-[1440px] mx-auto px-6 py-16 md:py-24">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <Link href="/research" className="text-[var(--color-slate)] hover:text-[var(--color-teal-600)]">
            Research
          </Link>
          <span className="mx-2 text-[var(--color-slate)]">/</span>
          <span className="font-medium">Speech Intelligence</span>
        </nav>

        {/* Header */}
        <div className="max-w-3xl mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Speech Intelligence
          </h1>
          <p className="text-lg text-[var(--color-slate)] leading-relaxed">
            Why speech AI struggles across African accents, languages and data gaps
          </p>
        </div>

        {/* Team Navigation */}
        <nav className="mb-16 overflow-x-auto">
          <div className="flex gap-8 border-b">
            {teams.map((team) => (
              <Link
                key={team.href}
                href={team.href}
                className={cn(
                  "pb-4 text-sm font-medium whitespace-nowrap transition-colors",
                  team.href === "/research/speech-intelligence"
                    ? "font-semibold border-b-2 border-[var(--color-teal-600)]"
                    : "hover:text-[var(--color-teal-600)]"
                )}
              >
                {team.label}
              </Link>
            ))}
          </div>
        </nav>

        {/* Research Areas - Three full-width rows */}
        <div className="space-y-8">
          {researchAreas.map((area) => (
            <div key={area} className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-b">
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
