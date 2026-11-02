"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const sentence =
  "A aiion desenha a marca para a pessoa guardar, o site para a conversa começar e o sistema para o lead não sumir. A IA atende no tom do negócio. Um time. O método D360.";

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
            <i /> A aiion
          </p>
          <h2>Não é uma página. É a operação.</h2>
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
