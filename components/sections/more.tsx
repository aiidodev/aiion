import Link from "next/link";
import { FaqDrawer } from "@/components/ui/faq-drawer";
import { HowItWorks } from "@/components/ui/how-it-works";
import { posts } from "@/lib/site";

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
          <Link href="/diagnostico">Quero o diagnóstico</Link>
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
  const notes = posts.filter((post) => post.excerpt).slice(0, 4);

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
            <article className="note-card" key={post.title}>
              <small>
                {post.category} · {post.date}
              </small>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
            </article>
          ))}
        </div>
        <p className="more-link">
          <Link href="/blog">Ir para o blog</Link>
        </p>
      </div>
    </section>
  );
}
