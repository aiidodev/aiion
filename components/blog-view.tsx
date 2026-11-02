"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArticleFigure } from "@/components/article-figure";
import { articles, blogCategories, readingMinutes } from "@/lib/blog";

export function BlogView() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Todos");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return articles.filter((post) => {
      const inCategory = category === "Todos" || post.category === category;
      const haystack = [post.title, post.excerpt, ...post.sections.flatMap((section) => [section.heading, ...section.paragraphs])]
        .join(" ")
        .toLowerCase();
      return inCategory && (!q || haystack.includes(q));
    });
  }, [query, category]);

  return (
    <div className="wrap" style={{ paddingBottom: "4rem" }}>
      <header className="page-hero">
        <p className="kicker">
          <i /> Blog
        </p>
        <h1>Notas da aiion.</h1>
        <p className="lede" style={{ marginTop: "1rem" }}>
          Atenção, IA e o trabalho que o sistema pode assumir. Cada nota abre inteira.
        </p>
      </header>
      <div className="filters">
        <input
          className="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Buscar artigo ou tema..."
          aria-label="Buscar artigos"
        />
        {blogCategories.map((item) => (
          <button
            key={item}
            type="button"
            className={category === item ? "on" : ""}
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="blog-layout">
        <div className="post-grid">
          {filtered.map((post) => (
            <Link className="post" key={post.slug} href={`/blog/${post.slug}`}>
              <ArticleFigure seed={post.seed} label={post.category} />
              <div>
                <small>
                  {post.category} · {post.date} · {readingMinutes(post)} min
                </small>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
              </div>
            </Link>
          ))}
          {filtered.length === 0 ? <p className="empty">Nenhum artigo com esse filtro.</p> : null}
        </div>
        <aside>
          <h2 style={{ fontSize: "1.4rem", marginBottom: "1rem" }}>Linha do tempo</h2>
          <div className="timeline">
            {filtered.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <small>{post.date}</small>
                <strong>{post.title}</strong>
              </Link>
            ))}
          </div>
        </aside>
      </div>
      <div className="cta-band">
        <div>
          <h2>Levar isso para a empresa.</h2>
          <p className="lede" style={{ marginTop: "0.6rem" }}>
            Marca, site, CRM, IA, redes, tráfego e app. A conversa começa no contato.
          </p>
        </div>
        <a className="btn btn-red" href="/#contato">
          Contato
        </a>
      </div>
    </div>
  );
}
