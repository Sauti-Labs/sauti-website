import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Explore research, machine learning, engineering, data, and product opportunities at Sauti Labs, an African-language AI research and technology company.",
  alternates: {
    canonical: "/company/careers",
  },
  openGraph: {
    title: "Careers | Sauti Labs",
    description:
      "Explore research, machine learning, engineering, data, and product opportunities at Sauti Labs.",
    url: "https://sauti.ai/company/careers",
    images: [{ url: "/opengraph-image", alt: "Careers at Sauti Labs" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers | Sauti Labs",
    description:
      "Explore opportunities to help build speech and language technology for African languages.",
    images: ["/opengraph-image"],
  },
};

export default function CareersLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
