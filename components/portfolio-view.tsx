"use client";

import { useMemo, useState } from "react";
import { ProjectFolder, useFolderWidth } from "@/components/project-folder";
import { projectFilters, projects } from "@/lib/portfolio";

export function PortfolioView() {
  const [filter, setFilter] = useState<(typeof projectFilters)[number]>("Todos");
  const width = useFolderWidth();

  const list = useMemo(
    () => (filter === "Todos" ? projects : projects.filter((project) => project.kind === filter)),
    [filter],
  );

  return (
    <div className="wrap" style={{ paddingBottom: "4rem" }}>
      <header className="page-hero">
        <p className="kicker">
          <i /> Portfólio
        </p>
        <h1>Trabalhos no ar.</h1>
        <p className="lede" style={{ marginTop: "1rem" }}>
          Marca, site, sistema e rede. Abra a pasta e veja o que foi entregue.
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
      <div className="folder-board">
        {list.map((project, index) => (
          <ProjectFolder
            key={`${project.kind}-${project.name}-${index}`}
            project={project}
            width={width}
            delay={(index % 4) * 70}
          />
        ))}
      </div>
      <div className="cta-band">
        <div>
          <h2>Quer isso na sua empresa.</h2>
          <p className="lede" style={{ marginTop: "0.6rem" }}>
            O diagnóstico mostra a camada que falta. A conversa segue no WhatsApp.
          </p>
        </div>
        <a className="btn btn-red" href="/diagnostico">
          Quero o diagnóstico
        </a>
      </div>
    </div>
  );
}
