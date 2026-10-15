export type NewsBlock =
  | { type: "heading"; text: string; level: 2 | 3 }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "quote"; text: string; attribution?: string }
  | { type: "media"; src: string; mediaType: "audio" | "video"; title: string }
  | { type: "footnote"; id: string; text: string };

export type NewsArticle = {
  slug: string;
  title: string;
  date: string;
  category?: string;
  excerpt: string;
  thumbnail?: string;
  featuredImage?: { src: string; alt: string };
  author?: string;
  body: NewsBlock[];
  relatedSlugs?: string[];
};

export const newsArticles: NewsArticle[] = [];
