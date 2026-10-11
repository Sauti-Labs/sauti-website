import type { Metadata } from "next";
import { AboutContent } from "@/components/AboutContent";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Sauti Labs - our story, team, mission, and vision for building speech and language intelligence for Africa.",
  openGraph: {
    title: "About Sauti Labs",
    description: "Learn about Sauti Labs - our story, team, mission, and vision for building speech and language intelligence for Africa.",
    url: "https://sauti.ai/about",
  },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      {/* <section className="flex flex-col items-center justify-center px-6 py-12 bg-ivory">
        <div className="max-w-4xl w-full pt-12 space-y-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold leading-[1.1] text-ink">
            About Sauti Labs
          </h1>
          <p className="md:text-base font-serif leading-relaxed text-slate">
            Building speech and language intelligence for Africa.
          </p>
        </div>
      </section> */}

      {/* Dropdown Sections */}
      <AboutContent />
    </div>
  );
}
