import { ScrollWaveCta } from "@/components/sections/ScrollWaveCta";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Sauti Labs is an African AI research and technology organisation. We build the data, models, infrastructure and products that let machines understand and speak African languages.",
  openGraph: {
    title: "Sauti Labs - Building Speech and Language Intelligence for Africa",
    description: "Sauti Labs is an African AI research and technology organisation. We build the data, models, infrastructure and products that let machines understand and speak African languages.",
    url: "https://sauti.ai",
  },
};

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center px-6 py-12 bg-ivory">
        <div className="max-w-6xl w-full pt-12 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold leading-[1.1] text-ink">
              Building speech and language intelligence for Africa.
            </h1>
            <p className="md:text-base font-serif leading-relaxed text-slate">
              Sauti Labs is an African AI research and technology organisation. We build the data, models, infrastructure and products that let machines understand and speak African languages.
            </p>
          </div>

        </div>
      </section>


      {/* Scroll Wave CTA */}
      <ScrollWaveCta />
    </div>
  );
}
