import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description: "Explore ways to contribute to research and technology for Africa's linguistic diversity.",
  openGraph: {
    title: "Careers | Sauti Labs",
    description: "Explore ways to contribute to research and technology for Africa's linguistic diversity.",
    url: "https://sauti.ai/company/careers",
  },
};

export default function Careers() {
  return (
    <div className="flex flex-col pt-16">
      <div className="max-w-[1440px] mx-auto px-6 py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
          Careers
        </h1>
        <p className="text-lg text-[var(--color-slate)] leading-relaxed mb-12 max-w-3xl">
          We welcome people interested in contributing to research and technology for Africa&apos;s linguistic diversity.
        </p>

        <h2 className="text-2xl font-heading font-semibold mb-4">Kinds of Contribution</h2>
        <p className="text-[var(--color-slate)] mb-8">
          Proposed areas of contribution include research, engineering and product, data and language resources, responsible AI and policy, and operations.
        </p>

        <h2 className="text-2xl font-heading font-semibold mb-4">Open Roles</h2>
        <div className="py-8 border mb-8">
          <p className="text-[var(--color-slate)]">There are no open roles listed at the moment.</p>
        </div>

        <h2 className="text-2xl font-heading font-semibold mb-4">How to Apply</h2>
        <p className="text-[var(--color-slate)] mb-8">Application instructions will be provided with each role listing.</p>

        <h2 className="text-2xl font-heading font-semibold mb-4">Recruitment Contact</h2>
        <p className="text-[var(--color-slate)]">Recruitment contact: [To be confirmed]</p>
      </div>
    </div>
  );
}
