import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "AI for the languages of Africa.",
  openGraph: {
    title: "About | Sauti Labs",
    description: "AI for the languages of Africa.",
    url: "https://sauti.ai/about",
  },
};

export default function About() {
  const teams = [
    { name: "Research", description: "Investigating speech, language, and model intelligence for African languages." },
    { name: "Engineering/Product", description: "Designing and building the software and systems that support language AI." },
    { name: "Data and Language Resources", description: "Working with language data, datasets, documentation, and evaluation resources." },
    { name: "Responsible AI/Policy", description: "Considering governance, privacy, safety, and the wider impacts of AI." },
    { name: "Operations", description: "Supporting the organisation's planning and day-to-day work." },
  ];

  return (
    <div className="flex flex-col pt-16">
      <div className="max-w-[1440px] mx-auto px-6 py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
          AI for the languages of Africa
        </h1>
        <p className="text-lg text-[var(--color-slate)] leading-relaxed mb-12 max-w-3xl">
          Sauti Labs is an African-language AI company building the research, models, data and technologies needed to help AI understand, speak and serve Africa&apos;s linguistic diversity.
        </p>

        <div className="flex gap-4 mb-16">
          <Link href="/research" className="px-6 py-3 bg-[var(--color-teal-600)] text-white rounded min-h-[44px]">
            Explore our research
          </Link>
          {process.env.NEXT_PUBLIC_DHONAM_URL ? (
            <a href={process.env.NEXT_PUBLIC_DHONAM_URL} target="_blank" rel="noopener noreferrer" className="px-6 py-3 border rounded min-h-[44px]">
              Try Sauti
            </a>
          ) : (
            <button type="button" disabled title="Platform destination to be confirmed" className="px-6 py-3 border rounded min-h-[44px] disabled:cursor-not-allowed disabled:opacity-60">
              Try Sauti
            </button>
          )}
        </div>

        <h2 className="text-2xl font-heading font-semibold mb-8">The Team</h2>
        <p className="text-[var(--color-slate)] mb-8">
          Our work brings together different areas of expertise to explore and build language AI. These cards describe areas of work, not confirmed staffed departments.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teams.map((team) => (
            <div key={team.name} className="border">
              <div className="aspect-[4/3] border-b flex items-center justify-center">
                <p className="text-sm text-[var(--color-slate)]">Photo to be supplied</p>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-heading font-semibold mb-2">{team.name}</h3>
                <p className="text-[var(--color-slate)]">{team.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
