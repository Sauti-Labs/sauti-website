import Link from "next/link";
import type { Metadata } from "next";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Responsible AI",
  description: "Data governance, privacy, legal compliance, safety, and accountability.",
  openGraph: {
    title: "Responsible AI | Sauti Labs",
    description: "Data governance, privacy, legal compliance, safety, and accountability.",
    url: "https://sauti.ai/research/responsible-ai",
  },
};

export default function ResponsibleAI() {
  const teams = [
    { href: "/research/speech-intelligence", label: "Speech Intelligence" },
    { href: "/research/language-intelligence", label: "Language Intelligence" },
    { href: "/research/language-resources", label: "Language Resources" },
    { href: "/research/model-intelligence", label: "Model Intelligence" },
    { href: "/research/responsible-ai", label: "Responsible AI" },
  ];

  const areas = [
    "AI and data governance",
    "Privacy, data protection, and legal compliance",
    "Safety, fairness, and accountability",
    "Responsible research and deployment",
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
          <span className="font-medium">Responsible AI</span>
        </nav>

        {/* Header */}
        <div className="max-w-3xl mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Responsible AI
          </h1>
          <p className="text-lg text-[var(--color-slate)] leading-relaxed">
            Data governance, privacy, legal compliance, safety, and accountability.
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
                  team.href === "/research/responsible-ai"
                    ? "font-semibold border-b-2 border-[var(--color-teal-600)]"
                    : "hover:text-[var(--color-teal-600)]"
                )}
              >
                {team.label}
              </Link>
            ))}
          </div>
        </nav>

        <div className="space-y-8 mb-16">
          {areas.map((area) => (
            <div key={area} className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-b">
              <h2 className="text-xl font-heading font-semibold md:col-span-1">
                {area}
              </h2>
            </div>
          ))}
        </div>

        {/* Related Pages */}
        <div className="py-8 border-t">
          <h2 className="text-2xl font-heading font-semibold mb-4">
            Related Pages
          </h2>
          <ul className="space-y-2">
            <li className="text-[var(--color-slate)]">
              The research page describes questions being investigated; the
              commitments page sets out Sauti Labs&apos; intended principles and
              responsibilities.
            </li>
            <li>
              <Link href="/commitments/responsible-ai" className="text-[var(--color-teal-600)] hover:underline">
                Responsible AI commitments
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
