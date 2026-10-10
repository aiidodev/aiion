import type { Metadata } from "next";
import { DiagnosticView } from "@/components/diagnostic-view";

export const metadata: Metadata = {
  title: "Diagnóstico grátis",
  description: "Mapeie as camadas do método D360 e fale direto com a aiion no WhatsApp.",
};

export default function DiagnosticPage() {
  return <DiagnosticView />;
}
