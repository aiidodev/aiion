import Link from "next/link";
import { FaqDrawer } from "@/components/ui/faq-drawer";
import { HowItWorks } from "@/components/ui/how-it-works";
import { articles } from "@/lib/blog";

export function Start() {
  return (
    <section className="section" id="comecar">
      <div className="wrap">
        <div className="section-head reveal">
          <div>
            <p className="kicker">
              <i /> Começo
            </p>
            <h2>Do diagnóstico ao uso.</h2>
          </div>
          <p className="lede">
            Quatro passos. O diagnóstico mostra a camada. A conversa segue no WhatsApp de quem constrói.
          </p>
        </div>
        <HowItWorks />
        <p className="more-link">
          <a href="/#contato">Contato</a>
        </p>
      </div>
    </section>
  );
}

export function Questions() {
  return (
    <div id="perguntas">
      <FaqDrawer />
    </div>
  );
}

export function Notes() {
  const notes = articles.slice(0, 4);

  return (
    <section className="section" id="notas">
      <div className="wrap">
        <div className="section-head reveal">
          <div>
            <p className="kicker">
              <i /> Blog
            </p>
            <h2>Notas da aiion.</h2>
          </div>
          <p className="lede">Atenção, IA e o trabalho que o sistema pode assumir.</p>
        </div>
        <div className="notes">
          {notes.map((post) => (
            <Link className="note-card" key={post.slug} href={`/blog/${post.slug}`}>
              <small>
                {post.category} · {post.date}
              </small>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
            </Link>
          ))}
        </div>
        <p className="more-link">
          <Link href="/blog">Ir para o blog</Link>
        </p>
      </div>
    </section>
  );
}
