"use client";

import PictureRailGallery from "@/components/ui/picture-rail-gallery";
import type { PictureFrameStyle, PictureRailItem } from "@/components/ui/picture-rail-gallery";
import { marqueeItems, services } from "@/lib/site";

const plates = [
  "/images/service-01.jpg",
  "/images/service-02.jpg",
  "/images/service-03.jpg",
  "/images/service-04.jpg",
  "/images/service-05.jpg",
  "/images/service-06.jpg",
];

const details = [
  ["Nome", "Manual", "Logo"],
  ["Site", "Página de venda", "Loja"],
  ["Lead", "Cliente", "Venda"],
  ["Atendimento", "Qualificação"],
  ["Redes", "Tráfego", "WhatsApp"],
  ["Sistema", "App", "Lojas"],
];

const frames: PictureFrameStyle[] = ["black", "white", "oak", "black", "oak", "white"];
const mats = [true, true, false, true, true, false];
const drops = [0.02, 0.1, -0.02, 0.14, 0.05, 0];

const prints: PictureRailItem[] = services.map((service, index) => ({
  id: service.index,
  title: service.title,
  image: plates[index] ?? plates[0],
  aspect: 1,
  frame: frames[index],
  mat: mats[index],
  drop: drops[index],
  tag: service.index,
  description: service.text,
  details: details[index],
}));

export function Services() {
  const loop = [...marqueeItems, ...marqueeItems];

  return (
    <div className="services-band">
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {loop.map((item, index) => (
            <span key={`${item}-${index}`}>{item}</span>
          ))}
        </div>
      </div>
      <PictureRailGallery
        id="servicos"
        items={prints}
        eyebrow="Serviços"
        heading="O que a sua operação recebe."
        caption="Marca, site, CRM, IA, redes, WhatsApp e app. Cada frente com uma entrega. Um time só."
        autoplay
        labels={{ front: "Frente", back: "Verso", close: "Fechar", open: "Ver este serviço" }}
        action={
          <a className="btn btn-red" href="/diagnostico">
            Quero o diagnóstico
          </a>
        }
      />
    </div>
  );
}
