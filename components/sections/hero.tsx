"use client";

import MetroHero from "@/components/ui/scroll-locked-video-hero";
import { WA_DEFAULT } from "@/lib/site";

export function Hero() {
  return (
    <MetroHero
      kicker="Marca, sistema e IA"
      title={"Atenção em\ncliente."}
      mark={{
        name: "D360",
        text: "Desenvolvimento, digitalização, divulgação e domínio.",
      }}
      tagline="Site, CRM e IA no mesmo time. A conversa começa. A operação não esquece."
      scrollHint="DESÇA"
      signature={false}
      actions={
        <>
          <a className="btn btn-red btn-lg" href="/diagnostico">
            Quero o diagnóstico
          </a>
          <a className="btn btn-lg hero-link" href={WA_DEFAULT} target="_blank" rel="noreferrer">
            Falar no WhatsApp
          </a>
        </>
      }
    />
  );
}
