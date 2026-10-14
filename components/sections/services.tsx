"use client";

import { services, marqueeItems } from "@/lib/site";

export function Services() {
  const loop = [...marqueeItems, ...marqueeItems];

  return (
    <>
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {loop.map((item, index) => (
            <span key={`${item}-${index}`}>{item}</span>
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
          <ol className="index">
            {services.map((service) => (
              <li key={service.index}>
                <span>{service.index}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
