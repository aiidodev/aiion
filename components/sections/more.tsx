import Link from "next/link";
import { posts, questions, startSteps } from "@/lib/site";

export function Start() {
  return (
    <section className="section" id="comecar">
      <div className="wrap">
        <div className="section-head reveal">
          <div>
            <p className="kicker">
              <i /> Começo
            </p>
            <h2>Como um projeto entra</h2>
          </div>
          <p className="lede">
            Do diagnóstico ao uso. Quatro passos, sem fila entre a conversa e a execução.
          </p>
        </div>
        <ol className="index">
          {startSteps.map((step) => (
            <li key={step.index}>
              <span>{step.index}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
        <p className="more-link">
          <Link href="/diagnostico">Fazer o diagnóstico grátis</Link>
        </p>
      </div>
    </section>
  );
}

export function Questions() {
  return (
    <section className="section" id="perguntas">
      <div className="wrap">
        <div className="section-head reveal">
          <div>
            <p className="kicker">
              <i /> Perguntas
            </p>
            <h2>O que costuma travar a decisão</h2>
          </div>
        </div>
        <div className="faq">
          {questions.map((item) => (
            <details key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
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
              <i /> Arquivo
            </p>
            <h2>Notas do blog</h2>
          </div>
          <p className="lede">Textos curtos sobre IA, automação e a operação da empresa.</p>
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
          <Link href="/blog">Ler o blog</Link>
        </p>
      </div>
    </section>
  );
}
