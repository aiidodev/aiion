import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleFigure } from "@/components/article-figure";
import { articles, getArticle, readingMinutes } from "@/lib/blog";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: "Blog" };
  return { title: article.title, description: article.excerpt };
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();
  const minutes = readingMinutes(article);

  return (
    <article className="wrap article-page">
      <p className="article-back">
        <Link href="/blog">Blog</Link>
      </p>
      <header className="page-hero">
        <p className="kicker">
          <i /> {article.category} · {article.date} · {minutes} min de leitura
        </p>
        <h1>{article.title}</h1>
        <p className="lede">{article.excerpt}</p>
      </header>
      <figure className="article-hero">
        <ArticleFigure seed={article.seed} label={article.category} />
        <figcaption>{article.caption}</figcaption>
      </figure>
      <div className="article-body">
        {article.sections.map((section) => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </section>
        ))}
      </div>
      <section className="article-refs">
        <h2>Referências</h2>
        <ol>
          {article.references.map((item) => (
            <li key={item.href}>
              <a href={item.href} target="_blank" rel="noreferrer">
                {item.title}
              </a>
              <span>{item.source}</span>
            </li>
          ))}
        </ol>
      </section>
    </article>
  );
}
