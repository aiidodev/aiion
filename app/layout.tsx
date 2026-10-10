import type { Metadata } from "next";
import { Outfit, Syne } from "next/font/google";
import Script from "next/script";
import { Shell } from "@/components/shell";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "aiion — Criação encontra tecnologia",
    template: "%s · aiion",
  },
  description:
    "Sistemas avançados de IA, automação e engenharia de software. Marca, sites, CRM, atendimento 24/7 e o método D360.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${syne.variable} ${outfit.variable}`}>
      <body>
        <Script id="boot-flag" strategy="beforeInteractive">
          {`try{var r=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(!r&&!sessionStorage.getItem("aiion-boot"))document.documentElement.classList.add("booting");}catch(e){}`}
        </Script>
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}
