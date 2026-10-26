import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://sauti.ai";
  const monthly = "monthly" as const;
  const weekly = "weekly" as const;

  return [
    { url: `${baseUrl}/`, changeFrequency: weekly, priority: 1 },
    { url: `${baseUrl}/about`, changeFrequency: monthly, priority: 0.8 },
    { url: `${baseUrl}/research`, changeFrequency: weekly, priority: 0.9 },
    { url: `${baseUrl}/research/speech-intelligence`, changeFrequency: monthly, priority: 0.8 },
    { url: `${baseUrl}/research/language-intelligence`, changeFrequency: monthly, priority: 0.8 },
    { url: `${baseUrl}/research/language-resources`, changeFrequency: monthly, priority: 0.8 },
    { url: `${baseUrl}/research/model-intelligence`, changeFrequency: monthly, priority: 0.8 },
    { url: `${baseUrl}/research/responsible-ai`, changeFrequency: monthly, priority: 0.8 },
    { url: `${baseUrl}/company/leadership`, changeFrequency: monthly, priority: 0.9 },
    { url: `${baseUrl}/company/careers`, changeFrequency: monthly, priority: 0.6 },
    { url: `${baseUrl}/cloud`, changeFrequency: weekly, priority: 0.7 },
    { url: `${baseUrl}/commitments/responsible-ai`, changeFrequency: monthly, priority: 0.6 },
    { url: `${baseUrl}/commitments/privacy`, changeFrequency: monthly, priority: 0.5 },
    { url: `${baseUrl}/commitments/security`, changeFrequency: monthly, priority: 0.5 },
    { url: `${baseUrl}/commitments/data-governance`, changeFrequency: monthly, priority: 0.5 },
    { url: `${baseUrl}/commitments/code-of-conduct`, changeFrequency: monthly, priority: 0.5 },
  ];
}
