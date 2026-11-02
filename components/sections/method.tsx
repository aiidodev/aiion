"use client";

import SushiConveyorMenu from "@/components/ui/sushi-conveyor-menu";
import type { ConveyorDish, DishTier } from "@/components/ui/sushi-conveyor-menu";
import { phases, waLink } from "@/lib/site";

const plates = [
  "/images/method-plate-d1.jpg",
  "/images/method-plate-d2.jpg",
  "/images/method-plate-d3.jpg",
  "/images/method-plate-d4.jpg",
];

const tiers: DishTier[] = [1, 2, 4, 5];

const dishes: ConveyorDish[] = phases.map((phase, index) => ({
  id: phase.id,
  name: phase.title,
  description:
    phase.id === "D4"
      ? `${phase.kicker} O núcleo do D360: a marca na atenção e a operação no sistema.`
      : phase.kicker,
  price: phase.id,
  tier: tiers[index],
  image: plates[index] ?? plates[0],
  details: phase.items,
}));

export function Method() {
  return (
    <SushiConveyorMenu
      id="metodo"
      items={dishes}
      legend={{}}
      eyebrow="Método D360"
      heading="D360"
      caption="Quatro etapas. Da marca ao cliente."
      intro={
        <>
          <p>
            Anúncio sem conversa, conversa sem registro, registro sem rotina. O D360 entra na camada que trava a venda: marca, site, CRM, IA, redes, WhatsApp ou app.
          </p>
          <ul className="mt-5 grid gap-3 text-[15px] leading-snug">
            {phases.map((phase) => (
              <li key={phase.id}>
                <strong className="font-semibold tracking-tight">
                  {phase.id} {phase.title}.
                </strong>{" "}
                {phase.kicker}
              </li>
            ))}
          </ul>
        </>
      }
      autoplay
      labels={{
        add: "Quero esta camada",
        close: "Fechar",
        previous: "Camada anterior",
        next: "Próxima camada",
        pause: "Pausar a esteira",
        open: "Ver a camada",
      }}
      onAdd={(item) => {
        window.open(
          waLink(`Olá! Quero a camada ${item.price}, ${item.name}, no método D360 da aiion.`),
          "_blank",
          "noopener,noreferrer",
        );
      }}
      action={
        <a className="btn btn-red" href="/diagnostico">
          Quero o diagnóstico
        </a>
      }
    />
  );
}
