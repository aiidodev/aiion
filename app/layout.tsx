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
    default: "aiion — Atenção em cliente.",
    template: "%s · aiion",
  },
  description:
    "A aiion entrega marca, site, CRM, redes, WhatsApp e IA de atendimento. A conversa começa. A operação não esquece. Método D360.",
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
