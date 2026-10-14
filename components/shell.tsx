"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { nav, links, COMPANY, CNPJ, WA_DEFAULT } from "@/lib/site";

gsap.registerPlugin(ScrollTrigger);

const rail = [
  { href: "/#servicos", label: "Serviços" },
  { href: "/#metodo", label: "D360" },
  { href: "/#fundadora", label: "Fundadora" },
  { href: "/#comecar", label: "Começo" },
  { href: "/#contato", label: "Contato" },
];

const places: Record<string, string> = {
  "/#servicos": "Serviços",
  "/#metodo": "D360",
  "/#filosofia": "Filosofia",
  "/#fundadora": "Fundadora",
  "/#stack": "Stack",
  "/#comecar": "Começo",
  "/#perguntas": "Perguntas",
  "/#notas": "Arquivo",
  "/#contato": "Contato",
  "/portfolio": "Portfólio",
  "/blog": "Blog",
  "/diagnostico": "Diagnóstico",
};

export function Shell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const navRef = useRef<HTMLElement>(null);
  const linksRef = useRef<HTMLElement>(null);
  const gliderRef = useRef<HTMLSpanElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const preRef = useRef<HTMLDivElement>(null);
  const bootTween = useRef<gsap.core.Tween | null>(null);
  const countRef = useRef<HTMLSpanElement>(null);
  const fillRef = useRef<HTMLElement>(null);
  const home = pathname === "/";
  const place = home ? (places[active] ?? "Início") : (places[pathname] ?? "aiion");

  const moveNav = (event: React.MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--my", `${event.clientY - rect.top}px`);
  };

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const root = document.documentElement;
    if (!root.classList.contains("booting")) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const finish = () => {
      sessionStorage.setItem("aiion-boot", "1");
      root.classList.remove("booting");
      window.dispatchEvent(new Event("aiion-ready"));
    };

    if (reduce) {
      finish();
      return;
    }

    const state = { n: 0 };
    const tween = gsap.to(state, {
      n: 100,
      duration: 2.15,
      ease: "power2.inOut",
      onUpdate: () => {
        if (countRef.current) {
          countRef.current.textContent = String(Math.round(state.n)).padStart(3, "0");
        }
        if (fillRef.current) fillRef.current.style.width = `${state.n}%`;
      },
      onComplete: () => {
        bootTween.current = null;
        gsap.to(preRef.current, {
          yPercent: -100,
          duration: 0.85,
          ease: "power4.inOut",
          onComplete: finish,
        });
      },
    });
    bootTween.current = tween;

    return () => {
      tween.kill();
    };
  }, []);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const cursor = cursorRef.current;
    if (!fine || !cursor) return;
    document.body.classList.add("has-cursor");
    const xTo = gsap.quickTo(cursor, "x", { duration: 0.35, ease: "power3.out" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.35, ease: "power3.out" });
    const move = (event: MouseEvent) => {
      cursor.style.opacity = "1";
      xTo(event.clientX);
      yTo(event.clientY);
      const target = event.target as HTMLElement | null;
      cursor.classList.toggle("hot", Boolean(target?.closest("a, button")));
    };
    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      document.body.classList.remove("has-cursor");
    };
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? window.scrollY / max : 0;
      if (barRef.current) barRef.current.style.width = `${progress * 100}%`;
      navRef.current?.classList.toggle("solid", window.scrollY > 48);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useLayoutEffect(() => {
    const root = linksRef.current;
    const glider = gliderRef.current;
    if (!root || !glider) return;
    const placeGlider = () => {
      const current = root.querySelector<HTMLElement>("a.active");
      if (!current || getComputedStyle(root).display === "none") {
        glider.style.opacity = "0";
        return;
      }
      glider.style.opacity = "1";
      glider.style.width = `${current.offsetWidth}px`;
      glider.style.transform = `translateX(${current.offsetLeft}px)`;
    };
    placeGlider();
    const observer = new ResizeObserver(placeGlider);
    observer.observe(root);
    return () => observer.disconnect();
  }, [pathname, active, open]);

  useEffect(() => {
    if (!home) return;
    const mark = () => {
      const line = window.innerHeight * 0.34;
      let current = "";
      for (const item of rail) {
        const section = document.querySelector(item.href.slice(1));
        if (!section) continue;
        if (section.getBoundingClientRect().top <= line) current = item.href;
      }
      setActive((prev) => (prev === current ? prev : current));
    };
    mark();
    window.addEventListener("scroll", mark, { passive: true });
    window.addEventListener("resize", mark);
    return () => {
      window.removeEventListener("scroll", mark);
      window.removeEventListener("resize", mark);
    };
  }, [home]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
        gsap.from(el, {
          y: 32,
          autoAlpha: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%" },
        });
      });
    });
    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, [pathname]);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const cleanups: Array<() => void> = [];
    document.querySelectorAll<HTMLElement>(".btn").forEach((button) => {
      const xTo = gsap.quickTo(button, "x", { duration: 0.4, ease: "power3.out" });
      const yTo = gsap.quickTo(button, "y", { duration: 0.4, ease: "power3.out" });
      const move = (event: MouseEvent) => {
        const rect = button.getBoundingClientRect();
        xTo((event.clientX - (rect.left + rect.width / 2)) * 0.28);
        yTo((event.clientY - (rect.top + rect.height / 2)) * 0.4);
      };
      const leave = () => {
        xTo(0);
        yTo(0);
      };
      button.addEventListener("mousemove", move);
      button.addEventListener("mouseleave", leave);
      cleanups.push(() => {
        button.removeEventListener("mousemove", move);
        button.removeEventListener("mouseleave", leave);
      });
    });
    return () => cleanups.forEach((fn) => fn());
  }, [pathname, open]);

  const skip = () => {
    bootTween.current?.kill();
    gsap.killTweensOf(preRef.current);
    sessionStorage.setItem("aiion-boot", "1");
    document.documentElement.classList.remove("booting");
    window.dispatchEvent(new Event("aiion-ready"));
  };

  return (
    <>
      <div className="grain" aria-hidden="true" />
      <div className="progress" ref={barRef} />
      <div className="cursor" ref={cursorRef} />
      <div className="preloader" ref={preRef} role="dialog" aria-label="Abrindo a aiion">
        <div className="pre-inner">
          <div className="pre-top">
            <div>
              <p className="pre-kicker">aiion // sistema</p>
              <img src="/images/logo-lockup.png" alt="AIION, tecnologia e marketing" style={{ height: 108, marginTop: 12 }} />
            </div>
            <span className="pre-count" ref={countRef}>
              000
            </span>
          </div>
          <div className="pre-bar">
            <i ref={fillRef} />
          </div>
          <button className="skip" type="button" onClick={skip}>
            Pular introdução
          </button>
        </div>
      </div>

      <header className={`nav${open ? " open" : ""}`} ref={navRef} onMouseMove={moveNav}>
        <div className="nav-light" aria-hidden="true" />
        <div className="nav-brand">
          <Link href="/" className="brand" aria-label="AIION, início">
            <img src="/images/logo.png" alt="AIION" />
          </Link>
          <span className="nav-place" aria-live="polite">
            <i aria-hidden="true" />
            <b key={place}>{place}</b>
          </span>
        </div>
        <nav className="nav-links" aria-label="Principal" ref={linksRef}>
          <span className="nav-glider" ref={gliderRef} aria-hidden="true" />
          {nav.map((item) => {
            const current = item.href.startsWith("/#") ? home && active === item.href : pathname === item.href;
            return (
              <Link key={item.href} href={item.href} className={current ? "active" : ""}>
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="nav-actions">
          <Link className="btn btn-ghost" href="/diagnostico">
            Diagnóstico grátis
          </Link>
          <a className="btn btn-red" href={WA_DEFAULT} target="_blank" rel="noreferrer">
            Falar no WhatsApp
          </a>
          <button
            className={`menu-btn${open ? " open" : ""}`}
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <span />
          </button>
        </div>
      </header>

      {open ? (
        <div className="mobile-panel">
          <p className="mobile-kicker">
            <i aria-hidden="true" />
            {place}
          </p>
          {nav.map((item, index) => (
            <Link key={item.href} href={item.href} className="mobile-link" onClick={() => setOpen(false)}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {item.label}
            </Link>
          ))}
          <div className="mobile-actions">
            <Link className="btn btn-ghost" href="/diagnostico">
              Diagnóstico grátis
            </Link>
            <a className="btn btn-red" href={WA_DEFAULT} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </div>
        </div>
      ) : null}

      {home ? (
        <nav className="rail" aria-label="Seções">
          {rail.map((item) => (
            <a key={item.href} href={item.href} className={active === item.href ? "on" : ""}>
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
      ) : null}

      <main>{children}</main>

      <footer className="footer">
        <div className="wrap footer-grid">
          <div>
            <img src="/images/logo-lockup.png" alt="AIION, tecnologia e marketing" />
          </div>
          <div>
            <h3>Mapa</h3>
            <ul>
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Ecossistema</h3>
            <ul>
              <li>
                <a href={links.jingle} target="_blank" rel="noreferrer">
                  aiion Jingle
                </a>
              </li>
              <li>
                <a href={links.leads} target="_blank" rel="noreferrer">
                  aiion Leads
                </a>
              </li>
              <li>
                <Link href="/diagnostico">Diagnóstico grátis</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>Redes</h3>
            <ul>
              <li>
                <a href={links.instagram} target="_blank" rel="noreferrer">
                  Instagram
                </a>
              </li>
              <li>
                <a href={links.facebook} target="_blank" rel="noreferrer">
                  Facebook
                </a>
              </li>
              <li>
                <a href={links.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={links.behance} target="_blank" rel="noreferrer">
                  Behance
                </a>
              </li>
              <li>
                <a href={links.pinterest} target="_blank" rel="noreferrer">
                  Pinterest
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="wrap legal">
          <span>
            {COMPANY} · CNPJ {CNPJ}
          </span>
          <span>© 2026 aiion. Todos os direitos reservados.</span>
        </div>
      </footer>
    </>
  );
}
