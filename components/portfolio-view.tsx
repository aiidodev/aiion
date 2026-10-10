"use client";

import { useMemo, useState } from "react";
import { projectFilters, projects, type ProjectKind } from "@/lib/site";

export function PortfolioView() {
  const [filter, setFilter] = useState<(typeof projectFilters)[number]>("Todos");

  const list = useMemo(() => {
    if (filter === "Todos") return projects;
    if (filter === "Lançamentos") return projects.filter((project) => project.year === "2025");
    return projects.filter((project) => project.kind === (filter as ProjectKind));
  }, [filter]);

  return (
    <div className="wrap" style={{ paddingBottom: "4rem" }}>
      <header className="page-hero">
        <p className="kicker">
          <i /> Máquinas em operação · Grupo LeadAcademy
        </p>
        <h1>Projetos. Leads. Clientes. Nessa ordem.</h1>
        <p className="lede" style={{ marginTop: "1rem" }}>
          Cada case abaixo é uma máquina de captação rodando agora. Marca que gera confiança, site
          que captura, conteúdo que aquece, tráfego que enche o funil. Veja o que construímos pros
          nossos clientes.
        </p>
      </header>
      <div className="filters" role="tablist" aria-label="Filtrar portfólio">
        {projectFilters.map((item) => (
          <button
            key={item}
            type="button"
            className={filter === item ? "on" : ""}
            onClick={() => setFilter(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <p className="note">
        {list.length} {list.length === 1 ? "projeto" : "projetos"}
      </p>
      {list.length === 0 ? <p className="empty">Nada neste filtro.</p> : null}
      <div className="work-grid" style={{ marginTop: "1rem" }}>
        {list.map((project, index) => (
          <article className="work" key={`${project.kind}-${project.name}-${index}`}>
            <div>
              <small>{project.kind}</small>
              <h3>{project.name}</h3>
              <p>{project.detail}</p>
            </div>
            {project.year ? <span className="year">{project.year}</span> : null}
          </article>
        ))}
      </div>
      <div className="cta-band">
        <div>
          <h2>Quer uma máquina dessas rodando pra você?</h2>
          <p className="lede" style={{ marginTop: "0.6rem" }}>
            Conta pra nossa IA seu segmento e meta de leads. Em 30 segundos preparamos um plano de
            captação sob medida pra você.
          </p>
        </div>
        <a className="btn btn-red" href="/diagnostico">
          Quero gerar leads
        </a>
      </div>
    </div>
  );
}
