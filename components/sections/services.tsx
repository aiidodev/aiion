"use client";

import { services, marqueeItems } from "@/lib/site";

function spotlight(event: React.MouseEvent<HTMLElement>) {
  const rect = event.currentTarget.getBoundingClientRect();
  event.currentTarget.style.setProperty("--mx", `${event.clientX - rect.left}px`);
  event.currentTarget.style.setProperty("--my", `${event.clientY - rect.top}px`);
}

export function Services() {
  const loop = [...marqueeItems, ...marqueeItems];

  return (
    <>
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {loop.map((item, index) => (
            <span key={`${item}-${index}`}>
              {item}
              <i> ✦</i>
            </span>
          ))}
        </div>
      </div>
      <section className="section" id="servicos">
        <div className="wrap">
          <div className="section-head reveal">
            <div>
              <p className="kicker">
                <i /> O que fazemos
              </p>
              <h2>Criação encontra tecnologia</h2>
            </div>
            <p className="lede">
              Um hub que reúne marca, design e conteúdo com sistemas, automação e inteligência
              artificial. Em vez de vários fornecedores, um time que pensa a estética e a engenharia
              juntas.
            </p>
          </div>
          <div className="bento">
            {services.map((service) => (
              <div
                key={service.index}
                className={service.featured ? "beam" : service.wide ? "span-2" : undefined}
              >
                {service.featured ? <div className="beam-spin" aria-hidden="true" /> : null}
                <article className="card" onMouseMove={spotlight}>
                  <div>
                    <span className="card-index">{service.index}</span>
                    <h3>{service.title}</h3>
                  </div>
                  <p>{service.text}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
