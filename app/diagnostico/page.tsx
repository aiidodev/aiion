import type { Metadata } from "next";
import { DiagnosticView } from "@/components/diagnostic-view";

export const metadata: Metadata = {
  title: "Diagnóstico D360",
  description: "A aiion mostra a camada do D360 que falta: marca, site, CRM, IA, redes, tráfego, WhatsApp ou app.",
};

export default function DiagnosticPage() {
  return <DiagnosticView />;
}
