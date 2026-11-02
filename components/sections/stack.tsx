import { Features } from "@/components/ui/features-8"
import { IntegrationShowcase } from "@/components/ui/integration-showcase"
import { stack } from "@/lib/site"

const notes: Record<string, string> = {
  "OpenAI APIs": "Modelos de linguagem dentro dos sistemas.",
  "Claude AI": "Leitura e texto no atendimento.",
  LangChain: "Encadeia modelo, dado e ferramenta.",
  LlamaIndex: "Documentos consultáveis pela IA.",
  "Hugging Face": "Modelos abertos para treino e uso.",
  TensorFlow: "Treino de modelo quando o caso pede.",
  PyTorch: "Pesquisa e treino de modelo.",
  CrewAI: "Agentes que dividem uma tarefa.",
  Python: "Backend e automação.",
  "Node.js": "APIs e serviços.",
  FastAPI: "APIs em Python.",
  NestJS: "APIs estruturadas em Node.",
  GraphQL: "Consulta de dados sob medida.",
  tRPC: "Tipos compartilhados entre API e interface.",
  Prisma: "Acesso ao banco, com tipos.",
  Drizzle: "Acesso ao banco, leve e tipado.",
  "Next.js": "Sites e sistemas na web.",
  React: "Interfaces.",
  TypeScript: "O código tipado do produto.",
  "Tailwind CSS": "A interface no mesmo desenho.",
  "Framer Motion": "Movimento nas interfaces.",
  Vercel: "Publicação de sites e sistemas.",
  Vite: "Build das interfaces.",
  Turborepo: "Vários pacotes no mesmo repositório.",
  AWS: "Nuvem para sistema e dado.",
  "Google Cloud": "Nuvem e serviço de dados.",
  Docker: "O sistema empacotado para rodar igual.",
  Kubernetes: "Orquestração quando o volume pede.",
  Terraform: "Infraestrutura descrita em código.",
  Supabase: "Banco, autenticação e dados.",
  Redis: "Memória rápida para fila e cache.",
  PostgreSQL: "O banco relacional.",
}

function mark(name: string) {
  const letters = name.replace(/[^A-Za-z0-9]/g, "").slice(0, 2).toUpperCase() || "AI"
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#161618"/><text x="32" y="41" text-anchor="middle" font-family="Arial,sans-serif" font-size="22" font-weight="700" fill="#f4f1ea">${letters}</text></svg>`
  return `data:image/svg+xml,${encodeURIComponent(svg)}`
}

export function Stack() {
  const integrations = stack.flatMap((group) =>
    group.items.map((name) => ({
      name,
      description: notes[name] ?? group.title,
      iconSrc: mark(name),
    })),
  )

  return (
    <>
      <IntegrationShowcase
        id="stack"
        title="O que sustenta a venda."
        subtitle="A base que segura a marca, o site, o CRM, a IA e o WhatsApp no ar."
        integrations={integrations}
        action={{ href: "/tecnologia", label: "Saiba mais" }}
      />
      <section className="section" id="diferenciais" style={{ paddingTop: "clamp(2.5rem, 5vw, 3.75rem)", paddingBottom: "clamp(2.5rem, 5vw, 4rem)" }}>
        <div className="wrap">
          <div className="reveal">
            <p className="kicker">
              <i /> Jeito aiion
            </p>
            <h2 style={{ fontSize: "clamp(2.4rem, 5vw, 4.2rem)", maxWidth: "16ch", marginBottom: "1.75rem" }}>
              Por que a venda não fica na gaveta
            </h2>
          </div>
          <Features />
        </div>
      </section>
    </>
  )
}
