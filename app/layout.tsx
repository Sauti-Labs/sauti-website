import type { Metadata } from "next";
import { Inter, Source_Serif_4, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Sauti Labs - Building Speech and Language Intelligence for Africa",
    template: "%s | Sauti Labs",
  },
  description: "Sauti Labs is an African AI research and technology organisation building the data, models, infrastructure and products that let machines understand and speak African languages.",
  keywords: ["African languages", "AI", "speech recognition", "natural language processing", "machine learning", "Africa", "language technology", "ASR", "TTS", "translation"],
  authors: [{ name: "Sauti Labs" }],
  creator: "Sauti Labs",
  publisher: "Sauti Labs",
  metadataBase: new URL("https://sauti.ai"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sauti.ai",
    title: "Sauti Labs - Building Speech and Language Intelligence for Africa",
    description: "Sauti Labs is an African AI research and technology organisation building the data, models, infrastructure and products that let machines understand and speak African languages.",
    siteName: "Sauti Labs",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sauti Labs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sauti Labs - Building Speech and Language Intelligence for Africa",
    description: "Sauti Labs is an African AI research and technology organisation building the data, models, infrastructure and products that let machines understand and speak African languages.",
    images: ["/og-image.png"],
    creator: "@sautilabs",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Sauti Labs",
    description: "Sauti Labs is an African AI research and technology organisation building the data, models, infrastructure and products that let machines understand and speak African languages.",
    url: "https://sauti.ai",
    logo: "https://sauti.ai/logo.png",
    sameAs: [
      "https://twitter.com/sautilabs",
      "https://github.com/sauti-labs",
      "https://linkedin.com/company/sauti-labs",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nairobi",
      addressCountry: "KE",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "hello@sauti.ai",
      contactType: "general",
    },
  };

  return (
    <html
      lang="en"
      className={cn(inter.variable, sourceSerif.variable, jetbrainsMono.variable, "h-full", "antialiased")}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
