import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { newsArticles } from "@/content/news";

export const metadata: Metadata = {
  title: "News",
  description: "Announcements, research updates and organisational news from Sauti Labs.",
  openGraph: {
    title: "News | Sauti Labs",
    description: "Announcements, research updates and organisational news from Sauti Labs.",
    url: "https://sauti.ai/news",
  },
};

export default function News() {
  return (
    <div className="flex flex-col pt-16">
      <div className="max-w-[1440px] mx-auto px-6 py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
          News
        </h1>
        <p className="text-lg text-[var(--color-slate)] leading-relaxed mb-12 max-w-3xl">
          Announcements, research updates and organisational news from Sauti Labs.
        </p>

        {newsArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsArticles.map((article) => (
              <Link key={article.slug} href={`/news/${article.slug}`} className="group border hover:border-[var(--color-teal-600)] transition-colors">
                {article.thumbnail && (
                  <Image src={article.thumbnail} alt="" width={1200} height={675} className="aspect-video w-full object-cover" />
                )}
                <div className="p-8">
                  {article.category && <p className="text-sm text-[var(--color-slate)] mb-2">{article.category}</p>}
                  <p className="text-sm text-[var(--color-slate)] mb-3">{article.date}</p>
                  <h2 className="text-xl font-heading font-semibold mb-3 group-hover:text-[var(--color-teal-600)] transition-colors">{article.title}</h2>
                  <p className="text-[var(--color-slate)] leading-relaxed">{article.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="border px-6 py-8 text-[var(--color-slate)]">
            No news items are available at the moment.
          </p>
        )}
      </div>
    </div>
  );
}
