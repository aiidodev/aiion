import type { Metadata } from "next";
import { PortfolioView } from "@/components/portfolio-view";

export const metadata: Metadata = {
  title: "Portfólio",
  description: "Marca, site e sistema que a aiion colocou no ar.",
};

export default function PortfolioPage() {
  return <PortfolioView />;
}
