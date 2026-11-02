"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { WA_DEFAULT } from "@/lib/site"
import { toolAreas, tools, type ToolArea } from "@/lib/tools"

export function ToolsView() {
  const [area, setArea] = useState<(typeof toolAreas)[number]>("Todas")
  const [query, setQuery] = useState("")

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return tools.filter((tool) => {
      const inArea = area === "Todas" || tool.area === area
      const inQuery =
        !q ||
        tool.name.toLowerCase().includes(q) ||
        tool.field.toLowerCase().includes(q) ||
        tool.text.toLowerCase().includes(q)
      return inArea && inQuery
    })
  }, [area, query])

  const areas = (area === "Todas" ? (["Programação", "Identidade visual", "Neurociência"] as ToolArea[]) : [area]).filter(
    (item) => filtered.some((tool) => tool.area === item),
  )

  return (
    <div className="wrap" style={{ paddingBottom: "5rem" }}>
      <header className="page-hero">
        <p className="kicker">
          <i /> Tecnologia
        </p>
        <h1>A base da aiion.</h1>
        <p className="lede" style={{ marginTop: "1rem" }}>
          Programação, identidade visual e neurociência. A ferramenta entra para a marca ser reconhecida, o sistema ficar no ar e a IA atender.
        </p>
      </header>

      <div className="filters">
        <input
          className="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Buscar ferramenta"
          aria-label="Buscar ferramenta"
        />
        {toolAreas.map((item) => (
          <button key={item} type="button" className={area === item ? "on" : ""} onClick={() => setArea(item)}>
            {item}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p>Nenhuma ferramenta com esse nome.</p>
      ) : (
        <div className="tool-list">
          {areas.map((group) => {
            const items = filtered.filter((tool) => tool.area === group)
            const fields = [...new Set(items.map((tool) => tool.field))]
            return (
              <section key={group} aria-labelledby={`area-${group}`}>
                <h2 id={`area-${group}`}>{group}</h2>
                <div className="tool-list" style={{ marginTop: "1.25rem" }}>
                  {fields.map((field) => (
                    <div key={field}>
                      <small>{field}</small>
                      <div className="tool-list">
                        {items
                          .filter((tool) => tool.field === field)
                          .map((tool) => (
                            <article key={tool.name}>
                              <h3>{tool.name}</h3>
                              <p>{tool.text}</p>
                            </article>
                          ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )
          })}
        </div>
      )}

      <div className="cta-band">
        <h2>Levar essa base para a empresa.</h2>
        <div style={{ display: "flex", gap: "1.2rem", flexWrap: "wrap" }}>
          <Link href="/diagnostico" className="btn btn-red">
            Quero o diagnóstico
          </Link>
          <a href={WA_DEFAULT} className="btn btn-ghost" target="_blank" rel="noreferrer">
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}
