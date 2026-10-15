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
  metadataBase: new URL("https://sauti.ai"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sauti.ai",
    title: "Sauti Labs - Building Speech and Language Intelligence for Africa",
    description: "Sauti Labs is an African-language AI company building the research, models, data and technologies needed to help AI understand, speak and serve Africa's linguistic diversity.",
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
    description: "Sauti Labs is an African-language AI company building the research, models, data and technologies needed to help AI understand, speak and serve Africa's linguistic diversity.",
    images: ["/og-image.png"],
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
    "@type": "Organization",
    name: "Sauti Labs",
    description: "Sauti Labs is an African-language AI company building the research, models, data and technologies needed to help AI understand, speak and serve Africa's linguistic diversity.",
    url: "https://sauti.ai",
    logo: {
      "@type": "ImageObject",
      url: "https://sauti.ai/sauti-logo1.png",
      width: 200,
      height: 200,
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
