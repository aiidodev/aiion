import type { Metadata } from "next"
import { Founder } from "@/components/sections/founder"

export const metadata: Metadata = {
  title: "Fundadora",
  description:
    "Jhenni Nascimento, fundadora da aiion. Engenharia de software, IA e neurociência.",
}

export default function FundadoraPage() {
  return <Founder />
}
