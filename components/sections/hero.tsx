"use client";

import MetroHero from "@/components/ui/scroll-locked-video-hero";
export function Hero() {
  return (
    <MetroHero
      kicker="Software, CRM e IA"
      title={"Engenharia de\ninteligência."}
      mark={{
        name: "D360",
        text: "Desenvolvimento, digitalização, divulgação e domínio.",
      }}
      tagline="IA, CRM e API no mesmo sistema."
      scrollHint="DESÇA"
      signature={false}
      actions={
        <>
          <a className="btn btn-red btn-lg" href="/#contato">
            Contato
          </a>
        </>
      }
    />
  );
}
