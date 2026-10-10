"use client";

import { FormEvent, useState } from "react";
import { COMPANY, CNPJ, PHONE_LABEL, WA_DEFAULT, waLink } from "@/lib/site";

export function Contact() {
  const [sent, setSent] = useState(false);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const text = [
      "Olá! Vim pelo site da aiion e quero montar um plano.",
      "",
      `Nome: ${data.get("nome") || "—"}`,
      `WhatsApp: ${data.get("whatsapp") || "—"}`,
      `E-mail: ${data.get("email") || "—"}`,
      `Empresa: ${data.get("empresa") || "—"}`,
      `Segmento: ${data.get("segmento") || "—"}`,
      `Preciso de: ${data.get("precisa") || "—"}`,
    ].join("\n");
    window.open(waLink(text), "_blank", "noopener,noreferrer");
    setSent(true);
  };

  return (
    <section className="section" id="contato">
      <div className="wrap contact-grid contact">
        <div className="reveal">
          <p className="kicker">
            <i /> Contato
          </p>
          <h2>Vamos montar o seu plano?</h2>
          <p className="lede">
            Conte o seu momento que a gente ajusta o escopo do método D360 para a sua empresa. Sem
            enrolação: você fala com quem realmente executa.
          </p>
          <div className="contacts">
            <a className="btn btn-red" href={WA_DEFAULT} target="_blank" rel="noreferrer">
              Falar no WhatsApp
            </a>
            <a className="btn btn-ghost" href="/diagnostico">
              Diagnóstico grátis
            </a>
          </div>
          <p className="note" style={{ marginTop: "1.4rem" }}>
            {PHONE_LABEL}
            <br />
            {COMPANY} · CNPJ {CNPJ}
          </p>
        </div>

        <form className="form" onSubmit={submit}>
          <div className="form-spin" aria-hidden="true" />
          <div className="form-inner">
            <div className="form-top">
              <span>Fale com a gente</span>
              <span>Canal direto</span>
            </div>
            <div className="fields">
              <label>
                Nome
                <input name="nome" required placeholder="Seu nome" autoComplete="name" />
              </label>
              <label>
                WhatsApp
                <input name="whatsapp" required placeholder="WhatsApp com DDD" autoComplete="tel" />
              </label>
              <label>
                E-mail
                <input name="email" type="email" required placeholder="E-mail" autoComplete="email" />
              </label>
              <label>
                Empresa
                <input name="empresa" placeholder="Empresa (opcional)" autoComplete="organization" />
              </label>
              <label className="full">
                Segmento
                <input name="segmento" placeholder="Segmento (opcional)" />
              </label>
              <label className="full">
                Projeto
                <textarea
                  name="precisa"
                  required
                  placeholder="O que você precisa? (marca, site, CRM, IA, tráfego...)"
                />
              </label>
            </div>
            <div className="form-actions">
              <p className="note">Enviamos direto para o WhatsApp {PHONE_LABEL}.</p>
              <button className="btn btn-red" type="submit">
                Enviar e falar no WhatsApp
              </button>
            </div>
            {sent ? <p className="ok">Abrimos o WhatsApp com a sua mensagem.</p> : null}
          </div>
        </form>
      </div>
    </section>
  );
}
