import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { newsArticles } from "@/content/news";

export default async function NewsArticle({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = newsArticles.find((item) => item.slug === slug);
  if (!article) notFound();

  const relatedArticles = (article.relatedSlugs ?? [])
    .map((relatedSlug) => newsArticles.find((item) => item.slug === relatedSlug))
    .filter((item) => item !== undefined);

  return (
    <article className="flex flex-col pt-16">
      <div className="max-w-[1440px] mx-auto px-6 py-16 md:py-24 w-full">
        <nav className="mb-8 text-sm">
          <Link href="/news" className="text-[var(--color-slate)] hover:text-[var(--color-teal-600)]">News</Link>
          <span className="mx-2 text-[var(--color-slate)]">/</span>
          <span className="font-medium">{article.title}</span>
        </nav>

        <header className="max-w-3xl mx-auto mb-12">
          {article.category && <p className="text-sm text-[var(--color-slate)] mb-3">{article.category}</p>}
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">{article.title}</h1>
          <p className="text-sm text-[var(--color-slate)]">
            <time dateTime={article.date}>{article.date}</time>
            {article.author && <> · {article.author}</>}
          </p>
        </header>

        {article.featuredImage && (
          <figure className="max-w-5xl mx-auto mb-12">
            <Image src={article.featuredImage.src} alt={article.featuredImage.alt} width={1600} height={900} className="w-full h-auto" priority />
          </figure>
        )}

        <div className="max-w-[65ch] mx-auto space-y-6 text-[var(--color-slate)] leading-relaxed">
          {article.body.map((block, index) => {
            switch (block.type) {
              case "heading": {
                const Heading = block.level === 2 ? "h2" : "h3";
                return <Heading key={index} className="text-2xl font-heading font-semibold">{block.text}</Heading>;
              }
              case "paragraph":
                return <p key={index}>{block.text}</p>;
              case "list":
                return <ul key={index} className="list-disc pl-6 space-y-2">{block.items.map((item) => <li key={item}>{item}</li>)}</ul>;
              case "image":
                return (
                  <figure key={index}>
                    <Image src={block.src} alt={block.alt} width={1200} height={675} className="w-full h-auto" />
                    {block.caption && <figcaption className="mt-2 text-sm">{block.caption}</figcaption>}
                  </figure>
                );
              case "quote":
                return <blockquote key={index} className="border-l-4 border-[var(--color-teal-600)] pl-6 text-xl italic">{block.text}{block.attribution && <footer className="mt-3 text-sm not-italic">{block.attribution}</footer>}</blockquote>;
              case "media":
                return block.mediaType === "video" ? (
                  <video key={index} controls className="w-full" aria-label={block.title}><source src={block.src} /></video>
                ) : (
                  <audio key={index} controls className="w-full" aria-label={block.title}><source src={block.src} /></audio>
                );
              case "footnote":
                return <p key={index} id={`footnote-${block.id}`} className="text-sm"><sup>{block.id}</sup> {block.text}</p>;
            }
          })}
        </div>

        {relatedArticles.length > 0 && (
          <aside className="max-w-3xl mx-auto mt-16 border-t pt-8">
            <h2 className="text-xl font-heading font-semibold mb-4">Related articles</h2>
            <ul className="space-y-2">
              {relatedArticles.map((related) => (
                <li key={related.slug}><Link href={`/news/${related.slug}`} className="text-[var(--color-teal-600)] hover:underline">{related.title}</Link></li>
              ))}
            </ul>
          </aside>
        )}
      </div>
    </article>
  );
}
