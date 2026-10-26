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
  description: "Sauti Labs is an African-language AI company building the research, models, data and technologies needed to help AI understand, speak and serve Africa's linguistic diversity.",
  keywords: ["African languages", "AI", "speech", "language technology", "Africa"],
  authors: [{ name: "Sauti Labs" }],
  creator: "Sauti Labs",
  publisher: "Sauti Labs",
  metadataBase: new URL("https://sautilabs.co.ke"),
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sautilabs.co.ke",
    title: "Sauti Labs - Building Speech and Language Intelligence for Africa",
    description: "Sauti Labs is an African-language AI company building the research, models, data and technologies needed to help AI understand, speak and serve Africa's linguistic diversity.",
    siteName: "Sauti Labs",
    images: [
      {
        url: "/opengraph-image",
        alt: "Sauti Labs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sauti Labs - Building Speech and Language Intelligence for Africa",
    description: "Sauti Labs is an African-language AI company building the research, models, data and technologies needed to help AI understand, speak and serve Africa's linguistic diversity.",
    images: ["/opengraph-image"],
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
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://sautilabs.co.ke/#organization",
        name: "Sauti Labs",
        description:
          "Sauti Labs is an African-language AI company building the research, models, data and technologies needed to help AI understand, speak and serve Africa's linguistic diversity.",
        url: "https://sautilabs.co.ke/",
        sameAs: ["https://www.linkedin.com/company/sauti-labs"],
        knowsAbout: [
          "African languages",
          "Speech recognition",
          "Speech generation",
          "Multilingual language models",
          "Language resources and datasets",
          "Responsible artificial intelligence",
        ],
        logo: {
          "@type": "ImageObject",
          url: "https://sautilabs.co.ke/android-chrome-512x512.png",
          width: 512,
          height: 512,
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://sautilabs.co.ke/#website",
        url: "https://sautilabs.co.ke/",
        name: "Sauti Labs",
        publisher: { "@id": "https://sautilabs.co.ke/#organization" },
        inLanguage: "en",
      },
    ],
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
