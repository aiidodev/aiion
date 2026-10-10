"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const sentence =
  "A aiion combina inteligência artificial, engenharia de software e automação para construir infraestruturas inteligentes que ajudam empresas a mover mais rápido, operar de forma mais inteligente e escalar globalmente.";

export function Philosophy() {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.querySelectorAll("span").forEach((span) => {
        (span as HTMLElement).style.color = "#f4f1ea";
      });
      return;
    }
    const ctx = gsap.context(() => {
      gsap.to(el.querySelectorAll("span"), {
        color: "#f4f1ea",
        stagger: 0.06,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          end: "bottom 60%",
          scrub: true,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="section philosophy" id="filosofia">
      <div className="wrap philo-grid">
        <div className="reveal">
          <p className="kicker">
            <i /> Nossa filosofia
          </p>
          <h2>Engenharia do Futuro da Inteligência</h2>
          <p className="words" ref={ref}>
            {sentence.split(" ").map((word, index) => (
              <span key={`${word}-${index}`}>{word} </span>
            ))}
          </p>
        </div>
        <div className="lamp" aria-hidden="true" />
      </div>
    </section>
  );
}
