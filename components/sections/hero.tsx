"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import { NeuralField } from "@/components/neural-field";
import { WA_DEFAULT, phases } from "@/lib/site";

function Split({ text }: { text: string }) {
  return (
    <>
      {text.split(" ").map((word, index, list) => (
        <span className="word" key={`${word}-${index}`}>
          {word.split("").map((char, charIndex) => (
            <span className="char" key={charIndex}>
              {char}
            </span>
          ))}
          {index < list.length - 1 ? <span className="char">&nbsp;</span> : null}
        </span>
      ))}
    </>
  );
}

const signals = [
  "Atendimento com IA, o tempo todo",
  "Marca e engenharia no mesmo time",
  "Todo contato entra. Nada se perde.",
];

export function Hero() {
  const [signal, setSignal] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let ctx: gsap.Context | undefined;

    const play = () => {
      if (reduce) return;
      ctx?.revert();
      ctx = gsap.context(() => {
        gsap.from(".hero .char", {
          yPercent: 120,
          duration: 0.95,
          stagger: 0.016,
          ease: "power4.out",
        });
        gsap.from(".hero .rise", {
          y: 22,
          autoAlpha: 0,
          duration: 0.8,
          stagger: 0.08,
          delay: 0.4,
          ease: "power3.out",
        });
      });
    };

    if (!document.documentElement.classList.contains("booting")) play();
    else window.addEventListener("aiion-ready", play, { once: true });

    return () => {
      window.removeEventListener("aiion-ready", play);
      ctx?.revert();
    };
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setSignal((value) => (value + 1) % signals.length);
    }, 2800);
    return () => window.clearInterval(timer);
  }, []);

  const moveSpot = (event: React.MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--x", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--y", `${event.clientY - rect.top}px`);
  };

  return (
    <section className="hero" id="topo" onMouseMove={moveSpot}>
      <div className="hero-grid" />
      <div className="hero-spot" />
      <NeuralField />
      <div className="hero-layout">
        <div>
          <p className="eyebrow rise">Engenharia de IA & Sistemas Inteligentes</p>
          <h1 aria-label="Engenharia de Inteligência">
            <span aria-hidden="true">
              <Split text="Engenharia" />
              <br />
              <Split text="de Inteligência" />
            </span>
          </h1>
          <p className="lede rise">
            Sistemas avançados de IA, automação e engenharia de software para empresas prontas para
            escalar globalmente.
          </p>
          <div className="hero-cta rise">
            <a className="btn btn-red btn-lg" href="#contato">
              Quero meu projeto
            </a>
            <a className="btn btn-ghost btn-lg" href={WA_DEFAULT} target="_blank" rel="noreferrer">
              Falar no WhatsApp
            </a>
          </div>
          <div className="hero-meta rise">
            <div>
              <strong>24/7</strong>
              Atendimento com IA
            </div>
            <div>
              <strong>D360</strong>
              Digitalização em 360°
            </div>
            <div>
              <strong>aiion</strong>
              Criação + tecnologia
            </div>
          </div>
        </div>

        <aside className="panel rise" aria-label="Painel do método D360">
          <div className="scan" aria-hidden="true" />
          <div className="panel-head">
            <span>Método D360</span>
            <span className="live">
              <b /> ao vivo
            </span>
          </div>
          <div className="nodes">
            {phases.map((phase) => (
              <div className="node" key={phase.id}>
                <em>{phase.id}</em>
                <span>{phase.title}</span>
                <small>{phase.kicker}</small>
              </div>
            ))}
          </div>
          <div className="panel-foot">
            <span>{signals[signal]}</span>
            <strong>núcleo</strong>
          </div>
        </aside>
      </div>
    </section>
  );
}
