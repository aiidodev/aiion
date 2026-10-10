import type { Metadata } from "next";
import { PortfolioView } from "@/components/portfolio-view";

export const metadata: Metadata = {
  title: "Portfólio",
  description:
    "Marcas, sites, sistemas, social, vídeos e livros feitos pela aiion. Projetos, leads e clientes.",
};

export default function PortfolioPage() {
  return <PortfolioView />;
}
