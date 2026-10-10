"use client";

import { FormEvent, useState } from "react";
import { PHONE_LABEL, phases, waLink } from "@/lib/site";

const needs = [
  { id: "marca", label: "Marca", layer: 0 },
  { id: "site", label: "Site ou loja", layer: 0 },
  { id: "crm", label: "CRM", layer: 0 },
  { id: "ia", label: "IA de atendimento", layer: 0 },
  { id: "redes", label: "Redes sociais", layer: 1 },
  { id: "trafego", label: "Tráfego e conteúdo", layer: 2 },
  { id: "whatsapp", label: "WhatsApp API", layer: 2 },
  { id: "app", label: "App ou sistema", layer: 3 },
  { id: "automacao", label: "Automação com IA", layer: 3 },
];

type FormState = {
  nome: string;
  whatsapp: string;
  email: string;
  empresa: string;
  segmento: string;
  meta: string;
  selected: string[];
};

const empty: FormState = {
  nome: "",
  whatsapp: "",
  email: "",
  empresa: "",
  segmento: "",
  meta: "",
  selected: [],
};

export function DiagnosticView() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormState>(empty);
  const [done, setDone] = useState(false);

  const toggle = (id: string) => {
    setData((current) => ({
      ...current,
      selected: current.selected.includes(id)
        ? current.selected.filter((item) => item !== id)
        : [...current.selected, id],
    }));
  };

  const next = (event: FormEvent) => {
    event.preventDefault();
    if (step < 2) setStep((value) => value + 1);
    else setDone(true);
  };

  const chosen = needs.filter((item) => data.selected.includes(item.id));
  const layers = phases.filter((_, index) => chosen.some((item) => item.layer === index));
  const activeLayers = layers.length ? layers : phases;

  const message = [
    "Olá! Quero o diagnóstico grátis da aiion.",
    "",
    `Nome: ${data.nome}`,
    `WhatsApp: ${data.whatsapp}`,
    `E-mail: ${data.email}`,
    `Empresa: ${data.empresa || "—"}`,
    `Segmento: ${data.segmento || "—"}`,
    `Frentes: ${chosen.map((item) => item.label).join(", ") || "método completo"}`,
    `Momento: ${data.meta || "—"}`,
  ].join("\n");

  return (
    <div className="wrap" style={{ paddingBottom: "5rem" }}>
      <header className="page-hero">
        <p className="kicker">
          <i /> Diagnóstico grátis
        </p>
        <h1>Onde a sua operação trava?</h1>
        <p className="lede" style={{ marginTop: "1rem" }}>
          Em poucos minutos o roteiro aponta as camadas do método D360 que fazem sentido agora. Sem
          custo e sem compromisso. No final, você fala direto no WhatsApp {PHONE_LABEL}.
        </p>
      </header>

      <form className="form" onSubmit={next} style={{ maxWidth: 820 }}>
        <div className="form-spin" aria-hidden="true" />
        <div className="form-inner">
          {!done ? (
            <>
              <div className="steps" aria-hidden="true">
                {[0, 1, 2].map((item) => (
                  <i key={item} className={item <= step ? "on" : ""} />
                ))}
              </div>
              {step === 0 ? (
                <div className="fields">
                  <label>
                    Nome
                    <input
                      required
                      value={data.nome}
                      onChange={(event) => setData({ ...data, nome: event.target.value })}
                      placeholder="Seu nome"
                    />
                  </label>
                  <label>
                    WhatsApp
                    <input
                      required
                      value={data.whatsapp}
                      onChange={(event) => setData({ ...data, whatsapp: event.target.value })}
                      placeholder="WhatsApp com DDD"
                    />
                  </label>
                  <label>
                    E-mail
                    <input
                      required
                      type="email"
                      value={data.email}
                      onChange={(event) => setData({ ...data, email: event.target.value })}
                      placeholder="E-mail"
                    />
                  </label>
                  <label>
                    Empresa
                    <input
                      value={data.empresa}
                      onChange={(event) => setData({ ...data, empresa: event.target.value })}
                      placeholder="Empresa (opcional)"
                    />
                  </label>
                </div>
              ) : null}
              {step === 1 ? (
                <div>
                  <label className="note" htmlFor="segmento">
                    Segmento
                  </label>
                  <input
                    id="segmento"
                    value={data.segmento}
                    onChange={(event) => setData({ ...data, segmento: event.target.value })}
                    placeholder="Ex.: clínica, varejo, advocacia, educação"
                    style={{
                      width: "100%",
                      margin: "0.5rem 0 1rem",
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(244,241,234,0.12)",
                      borderRadius: 12,
                      padding: "0.8rem 0.85rem",
                    }}
                  />
                  <p className="note" style={{ marginBottom: "0.6rem" }}>
                    O que você precisa agora?
                  </p>
                  <div className="choices">
                    {needs.map((item) => (
                      <button
                        type="button"
                        key={item.id}
                        className={data.selected.includes(item.id) ? "on" : ""}
                        onClick={() => toggle(item.id)}
                        aria-pressed={data.selected.includes(item.id)}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>
              ) : null}
              {step === 2 ? (
                <label className="note">
                  Qual é o momento da empresa?
                  <textarea
                    required
                    value={data.meta}
                    onChange={(event) => setData({ ...data, meta: event.target.value })}
                    placeholder="O que você precisa? (marca, site, CRM, IA, tráfego...)"
                    style={{
                      width: "100%",
                      marginTop: "0.5rem",
                      minHeight: 140,
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(244,241,234,0.12)",
                      borderRadius: 12,
                      padding: "0.8rem 0.85rem",
                    }}
                  />
                </label>
              ) : null}
              <div className="form-actions">
                {step > 0 ? (
                  <button className="btn btn-ghost" type="button" onClick={() => setStep((value) => value - 1)}>
                    Voltar
                  </button>
                ) : (
                  <span className="note">Leva menos de um minuto.</span>
                )}
                <button className="btn btn-red" type="submit">
                  {step === 2 ? "Ver roteiro" : "Continuar"}
                </button>
              </div>
            </>
          ) : (
            <div className="plan">
              <p className="kicker">
                <i /> Roteiro inicial
              </p>
              <h2 style={{ fontSize: "2rem" }}>
                {data.nome.split(" ")[0]}, este é o recorte do D360 para o seu momento.
              </h2>
              <p className="lede">
                {data.segmento
                  ? `Segmento informado: ${data.segmento}. `
                  : ""}
                O escopo final é ajustado com quem executa. Este roteiro só organiza as camadas — não
                é uma estimativa de faturamento.
              </p>
              {activeLayers.map((layer) => (
                <article key={layer.id}>
                  <h3>
                    {layer.id} · {layer.title}
                  </h3>
                  <p className="note">{layer.kicker}</p>
                  <ul>
                    {layer.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
              <div className="form-actions">
                <button className="btn btn-ghost" type="button" onClick={() => window.print()}>
                  Imprimir ou salvar PDF
                </button>
                <a className="btn btn-red" href={waLink(message)} target="_blank" rel="noreferrer">
                  Enviar e falar no WhatsApp
                </a>
              </div>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
