"use client";

import { useMemo, useState } from "react";
import { blogCategories, posts } from "@/lib/site";

export function BlogView() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Todos");
  const [open, setOpen] = useState<string | null>(posts[0]?.title ?? null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((post) => {
      const inCategory = category === "Todos" || post.category === category;
      const inQuery =
        !q ||
        post.title.toLowerCase().includes(q) ||
        (post.excerpt || "").toLowerCase().includes(q);
      return inCategory && inQuery;
    });
  }, [query, category]);

  const featured = filtered.filter((post) => post.excerpt);
  const archive = filtered;

  return (
    <div className="wrap" style={{ paddingBottom: "4rem" }}>
      <header className="page-hero">
        <p className="kicker">
          <i /> Blog aiion
        </p>
        <h1>Inteligência artificial e tecnologia, sem hype</h1>
        <p className="lede" style={{ marginTop: "1rem" }}>
          50 artigos publicados desde janeiro de 2026 sobre IA, automação, engenharia e o impacto
          disso tudo em operações reais.
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
          {featured.map((post) => {
            const expanded = open === post.title;
            return (
              <article className="post" key={post.title}>
                <div>
                  <small>
                    {post.category} · {post.date}
                    {post.read ? ` · ${post.read} de leitura` : ""}
                  </small>
                  <h3>{post.title}</h3>
                  {expanded ? <p>{post.excerpt}</p> : <p>{post.excerpt}</p>}
                </div>
                <button
                  type="button"
                  className="btn btn-ghost"
                  style={{ marginTop: "1rem", alignSelf: "flex-start" }}
                  onClick={() => setOpen(expanded ? null : post.title)}
                  aria-expanded={expanded}
                >
                  {expanded ? "Fechar" : "Ler resumo"}
                </button>
              </article>
            );
          })}
          {featured.length === 0 ? <p className="empty">Nenhum artigo com esse filtro.</p> : null}
        </div>
        <aside>
          <h2 style={{ fontSize: "1.4rem", marginBottom: "1rem" }}>Linha do tempo</h2>
          <div className="timeline">
            {archive.map((post) => (
              <a
                key={`${post.date}-${post.title}`}
                href={`#${slug(post.title)}`}
                onClick={(event) => {
                  if (post.excerpt) {
                    event.preventDefault();
                    setOpen(post.title);
                  }
                }}
              >
                <small>{post.date}</small>
                <strong>{post.title}</strong>
              </a>
            ))}
          </div>
        </aside>
      </div>
      <div className="cta-band">
        <div>
          <h2>Quer saber o que dá para automatizar na sua operação?</h2>
          <p className="lede" style={{ marginTop: "0.6rem" }}>
            Em poucos minutos, nosso diagnóstico mapeia gargalos e devolve um roteiro do método
            D360. Sem custo e sem compromisso. Dá para imprimir ou salvar em PDF.
          </p>
        </div>
        <a className="btn btn-red" href="/diagnostico">
          Fazer diagnóstico gratuito
        </a>
      </div>
    </div>
  );
}

function slug(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-");
}
