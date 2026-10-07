import Link from "next/link";
import { ClickableWrap } from "@/components/ui/ClickableWrap";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description: "Our products make African language AI accessible through APIs, datasets, and tools for developers and researchers.",
  openGraph: {
    title: "Products | Sauti Labs",
    description: "Our products make African language AI accessible through APIs, datasets, and tools for developers and researchers.",
    url: "https://sauti.ai/products",
  },
};

export default function Products() {
  const products = [
    {
      name: "Sauti Speech",
      description: "Speech recognition API for African languages with real-time transcription and speaker diarization.",
      features: ["Real-time transcription", "Speaker diarization", "Multi-language support", "Custom vocabulary"],
      status: "Beta",
      link: "/products/sauti-speech",
    },
    {
      name: "Sauti Translate",
      description: "Machine translation between African languages and major world languages with context-aware outputs.",
      features: ["Bidirectional translation", "Document translation", "API access", "Batch processing"],
      status: "Coming Soon",
      link: "/products/sauti-translate",
    },
    {
      name: "Sauti TTS",
      description: "Text-to-speech synthesis with natural-sounding voices for African languages.",
      features: ["Multiple voices", "SSML support", "Audio streaming", "Custom voice training"],
      status: "In Development",
      link: "/products/sauti-tts",
    },
    {
      name: "Sauti Dataset",
      description: "Curated datasets for African language NLP research and development.",
      features: ["Speech corpora", "Text datasets", "Aligned data", "Licensing options"],
      status: "Available",
      link: "/products/sauti-dataset",
    },
  ];

  return (
    <div className="min-h-screen bg-ivory">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h1 className="text-5xl md:text-6xl font-heading font-semibold text-ink mb-6">
            Products
          </h1>
          <p className="text-xl font-serif text-slate">
            Our products make African language AI accessible through APIs, datasets, and tools for developers and researchers.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product) => {
            const isClickable = product.status !== "Coming Soon" && product.status !== "In Development";
            const CardContent = (
              <div className="bg-white p-8 rounded-lg border border-stone hover:border-clay transition-colors h-full">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-heading font-semibold text-ink">
                    {product.name}
                  </h3>
                  <span
                    className={`text-xs font-mono px-3 py-1 rounded-full ${
                      product.status === "Available"
                        ? "bg-olive text-white"
                        : product.status === "Beta"
                        ? "bg-sky text-white"
                        : "bg-oat text-ink"
                    }`}
                  >
                    {product.status}
                  </span>
                </div>
                <p className="text-slate font-serif mb-6">{product.description}</p>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature) => (
                    <li key={feature} className="text-sm text-slate flex items-center">
                      <span className="w-1.5 h-1.5 bg-clay rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                {isClickable && (
                  <span className="inline-flex items-center text-sm font-medium text-clay">
                    Learn more →
                  </span>
                )}
              </div>
            );

            return isClickable ? (
              <ClickableWrap
                key={product.name}
                href={product.link}
                label={`Learn more about ${product.name}`}
              >
                {CardContent}
              </ClickableWrap>
            ) : (
              <div key={product.name}>{CardContent}</div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-20 bg-ink text-ivory p-12 rounded-lg">
          <h2 className="text-3xl font-heading font-semibold mb-4">
            Interested in our products?
          </h2>
          <p className="text-slate mb-8 max-w-2xl">
            Contact us to learn more about pricing, enterprise solutions, or custom development for your specific needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-ink bg-clay rounded-lg hover:bg-clay-deep transition-colors"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </div>
  );
}
