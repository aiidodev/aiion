import { WA_DEFAULT } from "@/lib/site";

export function Contact() {
  return (
    <section className="section" id="contato">
      <div className="wrap contact-grid contact">
        <div className="reveal">
          <p className="kicker">
            <i /> Contato
          </p>
          <h2>A conversa começa aqui.</h2>
          <p className="lede">
            Conta o que trava: marca, site, CRM, IA, redes, WhatsApp ou app. Quem desenha o D360 responde.
          </p>
        </div>

        <div className="contact-cta">
          <p className="kicker">
            <i /> Contato
          </p>
          <p className="contact-cta-line">Sem formulário. A conversa segue por aqui.</p>
          <a className="btn btn-red btn-lg" href={WA_DEFAULT} target="_blank" rel="noreferrer">
            Contato
          </a>
        </div>
      </div>
    </section>
  );
}
