"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PHONE_LABEL, WA_FOUNDER, links } from "@/lib/site";

gsap.registerPlugin(ScrollTrigger);

export function Founder() {
  const frameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        frame.querySelector("img"),
        { yPercent: -6 },
        {
          yPercent: 6,
          ease: "none",
          scrollTrigger: { trigger: frame, start: "top bottom", end: "bottom top", scrub: true },
        },
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="section founder" id="fundadora">
      <div className="wrap founder-grid">
        <div className="portrait">
          <div className="portrait-frame" ref={frameRef}>
            <Image
              src="/images/jhennifer.jpg"
              alt="Jhenni Nascimento — Tecnologia & IA na aiion"
              fill
              sizes="(max-width: 860px) 100vw, 520px"
              style={{ objectFit: "cover", objectPosition: "50% 18%" }}
            />
          </div>
          <div className="portrait-tag">Tecnologia & IA</div>
        </div>
        <div className="reveal">
          <p className="kicker">
            <i /> Fundadora
          </p>
          <h2>Tecnologia, visão e inovação</h2>
          <p className="role">Tecnologia & IA</p>
          <h3>Jhenni Nascimento</h3>
          <p className="lede">
            Engenheira de software e IA, com pós em neurociência para entender ainda mais o cérebro
            humano e replicar esse funcionamento na inteligência artificial. Criou a primeira
            plataforma de pagamento com Pix Automático do Brasil.
          </p>
          <div className="contacts">
            <a href={WA_FOUNDER} target="_blank" rel="noreferrer">
              {PHONE_LABEL}
            </a>
            <a href={links.jhenni} target="_blank" rel="noreferrer">
              jhenni.com.br
            </a>
            <a href={links.instagramPersonal} target="_blank" rel="noreferrer">
              @01jhennii
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
