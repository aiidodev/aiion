"use client";

import { useEffect, useRef, useState } from "react";
import GlassFolder, { type ArtPreset } from "@/components/ui/glass-folder-cards";
import { projectShot, type Project, type ProjectKind } from "@/lib/portfolio";

const artFor: Record<ProjectKind, ArtPreset> = {
  Plataformas: "glacier",
  Saúde: "dusk",
  "Jurídico e obras": "aurora",
  Gastronomia: "ember",
  "Indústria e varejo": "verdant",
  Serviços: "glacier",
  Educação: "dusk",
  Redes: "ember",
  Marcas: "aurora",
};

function seedOf(name: string) {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (h * 33 + name.charCodeAt(i)) >>> 0;
  return h % 997;
}

export function useFolderWidth() {
  const [width, setWidth] = useState(300);
  useEffect(() => {
    const fit = () => {
      const space = window.innerWidth - 48;
      setWidth(space < 720 ? Math.max(250, Math.min(340, space)) : 280);
    };
    fit();
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, []);
  return width;
}

export function ProjectFolder({
  project,
  width,
  delay,
}: {
  project: Project;
  width: number;
  delay: number;
}) {
  const hold = useRef<HTMLDivElement>(null);
  const [near, setNear] = useState(false);
  useEffect(() => {
    const el = hold.current;
    if (!el) return;
    const see = () => {
      const box = el.getBoundingClientRect();
      if (box.bottom > -500 && box.top < window.innerHeight + 500) {
        setNear(true);
        return true;
      }
      return false;
    };
    if (see()) return;
    const onScroll = () => {
      if (see()) window.removeEventListener("scroll", onScroll);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  const shot = near ? projectShot(project) : undefined;
  const short = project.detail;
  return (
    <div ref={hold}>
      <GlassFolder
        key={shot ?? "plain"}
        label={project.name}
        meta={project.detail.split(/[.!?]/)[0]?.trim() || project.kind}
        tone="dark"
        art={shot ? "none" : artFor[project.kind]}
        seed={seedOf(project.name)}
        image={shot}
        action="none"
        width={width}
        appearDelay={delay}
        files={[
          {
            name: project.href ? "Abrir o site" : project.name,
            meta: short,
            image: shot,
            href: project.href,
          },
        ]}
      />
    </div>
  );
}
