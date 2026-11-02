"use client";

import Link from "next/link";
import { ProjectFolder, useFolderWidth } from "@/components/project-folder";
import { homeProjects } from "@/lib/portfolio";

export function Work() {
  const width = useFolderWidth();

  return (
    <section className="section" id="trabalhos">
      <div className="wrap">
        <div className="section-head reveal">
          <div>
            <p className="kicker">
              <i /> Portfólio
            </p>
            <h2>Trabalhos que você pode abrir.</h2>
          </div>
          <p className="lede">Marca, site e sistema no ar. O catálogo completo está no portfólio.</p>
        </div>
        <div className="folder-board folder-home">
          {homeProjects.map((project, index) => (
            <ProjectFolder key={project.name} project={project} width={width} delay={index * 80} />
          ))}
        </div>
        <div className="folder-more">
          <Link className="btn btn-ghost btn-lg" href="/portfolio">
            Ver todos os projetos
          </Link>
        </div>
      </div>
    </section>
  );
}
