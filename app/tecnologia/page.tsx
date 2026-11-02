import type { Metadata } from "next"
import { ToolsView } from "@/components/tools-view"

export const metadata: Metadata = {
  title: "Tecnologia",
  description:
    "A base da aiion: programação, identidade visual e neurociência por trás da marca, do sistema e da IA.",
}

export default function TecnologiaPage() {
  return <ToolsView />
}
