"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { phases } from "@/lib/site";

gsap.registerPlugin(ScrollTrigger);

const angles = ["-20deg", "70deg", "160deg", "250deg"];

export function Method() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const cometRef = useRef<HTMLDivElement>(null);
  const phaseRef = useRef(0);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;
    const comet = cometRef.current;
    if (!section || !stage || !comet) return;

    const mm = gsap.matchMedia();
    mm.add("(min-width: 861px)", () => {
      ScrollTrigger.create({
        id: "d360",
        trigger: section,
        start: "top top",
        end: "+=240%",
        pin: stage,
        scrub: 0.7,
        anticipatePin: 1,
        onUpdate: (self) => {
          const next = Math.min(3, Math.floor(self.progress * 3.999));
          if (next !== phaseRef.current) {
            phaseRef.current = next;
            setPhase(next);
          }
          gsap.set(comet, { rotate: self.progress * 360 });
        },
      });
    });

    return () => mm.revert();
  }, []);

  const focus = (index: number) => {
    const trigger = ScrollTrigger.getById("d360");
    if (trigger) {
      const span = trigger.end - trigger.start;
      window.scrollTo({ top: trigger.start + (span * (index + 0.12)) / 4, behavior: "smooth" });
      return;
    }
    setPhase(index);
    document.getElementById(`phase-${phases[index].id}`)?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <section className="section method" id="metodo" ref={sectionRef}>
      <div className="wrap method-stage" ref={stageRef}>
        <div>
          <p className="kicker">
            <i /> O método
          </p>
          <h2>
            D<span>360</span>
          </h2>
          <p className="lede" style={{ marginTop: "1rem" }}>
            Digitalização e automação em 360°. Um método que funciona como uma rede: cada etapa é um
            nó que se conecta ao próximo e alimenta o núcleo do seu negócio.
          </p>
          <div className="phase-switch" role="tablist" aria-label="Camadas do D360">
            {phases.map((item, index) => (
              <button
                key={item.id}
                type="button"
                className={index === phase ? "on" : ""}
                onClick={() => focus(index)}
                role="tab"
                aria-selected={index === phase}
              >
                {item.id}
              </button>
            ))}
          </div>
          {phases.map((item, index) => (
            <article
              className={`phase${index === phase ? " on" : ""}`}
              id={`phase-${item.id}`}
              key={item.id}
            >
              <p className="sub">{item.kicker}</p>
              <h3>{item.title}</h3>
              <ul>
                {item.items.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </article>
          ))}
          <div className="nucleus">
            <strong>O núcleo — sua empresa digitalizada, automatizada e pronta para crescer.</strong>
            Quando as quatro camadas se conectam, a empresa deixa de operar no improviso e passa a
            rodar como uma rede inteligente, cada etapa alimentando a próxima.
          </div>
          <p className="hint">Role para percorrer as quatro camadas</p>
        </div>

        <div className="orbit" aria-hidden="true">
          <div className="orbit-ring r1" />
          <div className="orbit-ring r2" />
          <div className="orbit-ring r3" />
          <div className="comet-anchor">
            <div className="comet-spin" ref={cometRef}>
              <i className="comet" />
            </div>
          </div>
          <div className="core">
            <div>
              <small>O núcleo</small>
              <strong>Pronto para crescer</strong>
            </div>
          </div>
          <div className="satellites">
            {phases.map((item, index) => (
              <div
                className={`sat${index === phase ? " on" : ""}`}
                key={item.id}
                style={{ ["--a" as string]: angles[index] }}
              >
                <b>
                  {item.id} {item.title}
                </b>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
