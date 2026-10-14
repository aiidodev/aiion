export const PHONE_LABEL = "+55 38 99750-9402";
export const WHATSAPP_NUMBER = "5538997509402";
export const COMPANY = "aiion";
export const CNPJ = "68.254.681/0001-58";

export function waLink(text: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export const WA_DEFAULT = waLink(
  "Olá! Vim pelo site da aiion e quero saber mais.",
);

export const WA_FOUNDER = waLink("Olá Jhenni, vim pelo site da aiion!");

export const links = {
  jhenni: "https://jhenni.com.br/",
  instagramPersonal: "https://www.instagram.com/01jhennii/",
  instagram: "https://www.instagram.com/aiido.ai/",
  facebook: "https://www.facebook.com/profile.php?id=61578655212149",
  linkedin: "https://www.linkedin.com/in/aiido-ai-0897683b9/",
  behance: "https://www.behance.net/aiidoaiido",
  pinterest: "https://br.pinterest.com/aiidoaiido/",
  jingle: "https://aiidojingle.com.br/",
  leads: "https://aiidoleads.com.br/",
};

export const nav = [
  { href: "/#servicos", label: "Serviços" },
  { href: "/#metodo", label: "Método D360" },
  { href: "/#fundadora", label: "Fundadora" },
  { href: "/portfolio", label: "Portfólio" },
  { href: "/blog", label: "Blog" },
  { href: "/#contato", label: "Contato" },
];

export const services = [
  {
    index: "01",
    title: "Marca completa",
    text: "Naming, manual de marca, estratégia e aplicação: logo, papelaria e identidade visual. A base que faz o negócio nascer com autoridade e ser reconhecido em qualquer canal.",
    wide: true,
  },
  {
    index: "02",
    title: "Site, Landing Page ou E-commerce",
    text: "Site institucional, página de conversão ou loja virtual, conforme o seu momento. O ponto central onde a marca vira presença e venda.",
  },
  {
    index: "03",
    title: "Sistema de CRM e gestão",
    text: "Uma plataforma sua para gerir leads, clientes, vendas e o próprio site. Todo contato entra, é organizado e acompanhado. Nada se perde.",
  },
  {
    index: "04",
    title: "IA de atendimento 24/7",
    text: "Uma IA que atende, tira dúvidas e qualifica clientes o tempo todo, com o tom e a estratégia do seu negócio. Inclusa em todo sistema desenvolvido pela aiion.",
    featured: true,
  },
  {
    index: "05",
    title: "Redes, tráfego e conteúdo",
    text: "Criação e ativação das redes sociais, gestão de tráfego pago, disparos de WhatsApp com API oficial, criativos em imagem e vídeo e textos para blog e vendas.",
  },
  {
    index: "06",
    title: "Sistemas sob medida, apps e automação",
    text: "Desenvolvimento de sistemas próprios, aplicativos Android e iOS, publicação nas lojas e automação dos principais processos do negócio com IA.",
  },
];

export const phases = [
  {
    id: "D1",
    title: "Desenvolvimento",
    kicker: "A fundação",
    items: [
      "Marca completa: naming, manual, estratégia e aplicação",
      "Site institucional, landing page ou e-commerce",
      "Sistema de CRM e gestão próprio",
      "IA de atendimento estratégico 24/7",
    ],
  },
  {
    id: "D2",
    title: "Digitalização",
    kicker: "Ocupar o digital",
    items: [
      "Estruturação e ativação de Facebook, Instagram e TikTok",
      "LinkedIn, YouTube e Google Meu Negócio",
      "Marca encontrável e profissional onde o cliente já está",
    ],
  },
  {
    id: "D3",
    title: "Divulgação",
    kicker: "Gerar demanda e vender",
    items: [
      "Tráfego pago com verba controlada e retorno medido",
      "Disparos e automações de WhatsApp com API oficial",
      "Criativos, copy e conteúdo para blog e páginas de venda",
      "Reuniões estratégicas e plano de expansão",
    ],
  },
  {
    id: "D4",
    title: "Domínio",
    kicker: "Dominar e automatizar",
    items: [
      "Treinamento da equipe comercial",
      "Treinamento no uso dos sistemas",
      "Automação dos principais processos com IA",
      "Sistemas sob medida e aplicativos mobile",
    ],
  },
];

export const stack = [
  {
    title: "AI & ML",
    items: [
      "OpenAI APIs",
      "Claude AI",
      "LangChain",
      "LlamaIndex",
      "Hugging Face",
      "TensorFlow",
      "PyTorch",
      "CrewAI",
    ],
  },
  {
    title: "Backend & APIs",
    items: ["Python", "Node.js", "FastAPI", "NestJS", "GraphQL", "tRPC", "Prisma", "Drizzle"],
  },
  {
    title: "Frontend & Fullstack",
    items: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Vercel",
      "Vite",
      "Turborepo",
    ],
  },
  {
    title: "Cloud & Infrastructure",
    items: [
      "AWS",
      "Google Cloud",
      "Docker",
      "Kubernetes",
      "Terraform",
      "Supabase",
      "Redis",
      "PostgreSQL",
    ],
  },
];

export const differentials = [
  {
    title: "Mentalidade de desenvolvimento AI-first",
    text: "A inteligência artificial entra na arquitetura do sistema, não como um acessório colocado no final. Atendimento, qualificação e processos já nascem com esse critério.",
  },
  {
    title: "Arquitetura orientada à automação",
    text: "O que se repete deixa de depender de alguém lembrar. Lead, atendimento e rotina operacional passam a seguir um fluxo.",
  },
  {
    title: "Escalabilidade global",
    text: "A base é a mesma do primeiro cliente ao volume maior: marca, sistema e operação no mesmo desenho, sem refazer tudo quando a empresa cresce.",
  },
  {
    title: "Engenharia de nível empresarial",
    text: "Código, dados e acesso tratados com o cuidado de um sistema que a empresa vai usar todo dia, não de uma página que se troca na semana seguinte.",
  },
  {
    title: "Ciclos rápidos de inovação",
    text: "O escopo é ajustado ao momento. Entrega visível, conversa com quem executa e correção no caminho, sem um projeto que só aparece meses depois.",
  },
];

export const startSteps = [
  {
    index: "01",
    title: "Diagnóstico",
    text: "Um formulário curto mapeia marca, site, CRM, IA, redes, tráfego, WhatsApp, app e automação. O recorte sai nas camadas do D360.",
  },
  {
    index: "02",
    title: "Conversa com quem executa",
    text: "O retorno vai para o WhatsApp. Não há uma fila entre você e a pessoa que vai desenhar e construir.",
  },
  {
    index: "03",
    title: "Escopo do momento",
    text: "Nem toda empresa precisa das quatro camadas de uma vez. O método é ajustado ao que trava a operação agora.",
  },
  {
    index: "04",
    title: "Entrega e domínio",
    text: "Marca, sistema, conteúdo e automações entram em uso. A equipe é treinada para operar o que foi construído.",
  },
];

export const questions = [
  {
    q: "A IA de atendimento é um adicional?",
    a: "Não. Ela é inclusa em todo sistema desenvolvido pela aiion, com o tom e a estratégia do negócio, para atender e qualificar o tempo todo.",
  },
  {
    q: "Preciso contratar o método D360 inteiro?",
    a: "Não. O diagnóstico mostra as camadas e o escopo é ajustado ao momento: marca, site, CRM, redes, tráfego, WhatsApp, app ou automação.",
  },
  {
    q: "Vocês publicam aplicativo nas lojas?",
    a: "Sim. Sistemas sob medida e aplicativos Android e iOS, com publicação nas lojas, fazem parte da etapa de domínio do método.",
  },
  {
    q: "O WhatsApp usa a API oficial?",
    a: "Sim. Disparos e automações de WhatsApp são feitos com a API oficial, junto de tráfego, criativos e conteúdo.",
  },
  {
    q: "Quem conduz o projeto?",
    a: "Quem executa. A conversa do site vai direto para o WhatsApp da aiion, sem intermediário comercial.",
  },
  {
    q: "Como a neurociência entra na IA?",
    a: "Jhenni Nascimento é engenheira de software e IA e tem pós em neurociência. A formação serve para entender melhor o cérebro humano e replicar esse funcionamento na inteligência artificial dos sistemas.",
  },
];

export const marqueeItems = [
  "Criação encontra tecnologia",
  "IA 24/7",
  "Método D360",
  "Marca",
  "CRM",
  "Automação",
  "Apps iOS e Android",
  "Tráfego",
  "WhatsApp API",
];

export type ProjectKind =
  | "Marcas"
  | "Sites"
  | "Desenvolvimento"
  | "Social"
  | "Vídeos"
  | "Livros";

export type Project = {
  name: string;
  detail: string;
  kind: ProjectKind;
  year?: string;
};

const marcas: [string, string, string][] = [
  ["Eu Quero Meu Desconto", "Tecnologia avançada para fidelização de clientes", "2024"],
  ["Amadoria", "Arte, autoconhecimento, bem-estar e amor", "2023"],
  ["Silveirinhas", "Doces e Salgados", "2024"],
  ["4on", "Growing together", "2022"],
  ["Brasmáquinas", "Apoiando e cultivando seus valores", "2023"],
  ["Vegans 2GO", "Por um mundo onde só se mata a fome", "2022"],
  ["Clube UP Brasil", "Proteção Auto que move o Brasil", "2023"],
  ["Mil Viagens", "Viaje mil vezes mais pagando mil vezes menos", "2024"],
  ["Momento com Deus", "Devocional, leve e contemporâneo", "2024"],
  ["San Angel Construtora", "Construindo com solidez e propósito", "2025"],
  ["WM Construtora", "Realizando sonhos através da construção", "2024"],
  ["Muutos Imóveis", "Mais que imóveis, o lar que muda a sua vida", "2025"],
  ["Hatoria", "Marketing jurídico que constrói autoridade", "2025"],
  ["Noémie", "Essência da elegância.", "2024"],
  ["Djhórdan Gomes", "Advocacia e consultoria jurídica com tradição e elegância", "2025"],
  ["MRSI Advocacia", "Sobriedade e elegância para um escritório de advocacia moderno", "2025"],
  ["Nogueira Costa Advogados Associados", "Tradição familiar e modernidade no direito", "2025"],
  ["Alícia Almeida Advocacia Especializada", "A Justiça no feminino, autoridade serena e elegante", "2025"],
  ["Agência do Contador", "Contabilidade que constrói negócios", "2025"],
  ["Juridico Pro", "Tecnologia jurídica para escritórios que pensam à frente", "2025"],
  ["Mulher Saudável", "Identidade acolhedora para a nutricionista Daiane Halaiko", "2025"],
  ["Loja Celda", "Servindo bem, para servir sempre.", "1980"],
  ["Thayza Vasconcellos", "Advocacia com sofisticação e presença", "2025"],
  ["Maternidade Protegida", "Cuidado, acolhimento e proteção para cada nova vida", "2025"],
  ["Jaqueline Ricci Fra", "Advocacia previdenciária com sofisticação e proximidade", "2025"],
  ["Fiorot Imóveis", "Solidez e prosperidade no mercado imobiliário", "2025"],
  ["Caixeta Advocacia", "Advocacia e consultoria jurídica com elegância e confiança", "2025"],
  ["Dona Papeleira", "A sua gráfica digital, vibrante, divertida e cheia de amor", "2025"],
  ["Costurices da Carminha", "Costurando carinho em cada detalhe da infância", "2025"],
  ["Carvalho Delivery", "The Art of Transportation", "2024"],
  ["CarHouse Veículos", "Sua próxima conquista começa aqui", "2024"],
  ["Cantinho do Jake", "Tudo para o seu melhor aumigo", "2024"],
  ["Bendito Burguer", "Hambúrguer artesanal com alma", "2024"],
  ["Barbearia Monteiro", "Seja sua melhor versão", "2024"],
  ["Ateliê dos Personalizados", "Feito com amor, do seu jeito", "2024"],
];

const sites: [string, string][] = [
  ["Dra. Ana Carla", "Saúde"],
  ["Multcare", "Saúde"],
  ["Solo Pilates", "Saúde"],
  ["Pacto Odontologia", "Saúde"],
  ["All Mar - Dra. Marleide", "Saúde"],
  ["Instituto Priorize", "Saúde"],
  ["Dr. Flávio Roberto", "Saúde"],
  ["Centro de Cirurgia Oral", "Saúde"],
  ["Instituto Benvenutti", "Saúde"],
  ["Dra. Adriana Rodrigues", "Saúde"],
  ["Clínica Intense", "Saúde"],
  ["Dr. Cleides", "Saúde"],
  ["Integrallis (Implantes)", "Saúde"],
  ["Renan Lamounier", "Saúde"],
  ["Kanehira", "Saúde"],
  ["Erez Odonto", "Saúde"],
  ["Kely Olira", "Saúde"],
  ["Ube-Gyn", "Saúde"],
  ["Luma Odonto", "Saúde"],
  ["Studio Mirian Manso", "Saúde"],
  ["Dra. Thaissa (Psiquiatria)", "Saúde"],
  ["Studio Corpo & Movimento", "Saúde"],
  ["Dr. Alexandre Lamaro", "Saúde"],
  ["Vivati Odontologia", "Saúde"],
  ["Dr. Dennison", "Saúde"],
  ["Dr. Bruno (Invisalign)", "Saúde"],
  ["Dra. Larissa Martins", "Saúde"],
  ["Dra. Thais Endoped", "Saúde"],
  ["Pró-Clínico Exames", "Saúde"],
  ["EMD Advogados", "Jurídico"],
  ["Consílio Ambientes", "Arquitetura"],
  ["Marcelle Arquitetura", "Arquitetura"],
  ["Tok Fino", "Arquitetura"],
  ["Omar Engenharia", "Arquitetura"],
  ["Garden Ouro", "Arquitetura"],
  ["Peixaria Guanabara", "Gastronomia"],
  ["Premier Bebidas", "Gastronomia"],
  ["Bello Pane", "Gastronomia"],
  ["Crema Gelateria", "Gastronomia"],
  ["Empório Paiol", "Gastronomia"],
  ["Carvalho Delivery", "Gastronomia"],
  ["Skalepay", "Indústria & Varejo"],
  ["LM Tubos", "Indústria & Varejo"],
  ["Borges Tubos", "Indústria & Varejo"],
  ["Ana T-Shirts", "Indústria & Varejo"],
  ["Frans Esmalteria", "Indústria & Varejo"],
  ["Ferever", "Indústria & Varejo"],
  ["Conekta Cell", "Indústria & Varejo"],
  ["Grau Cell", "Indústria & Varejo"],
  ["Daniel Gouvea (Inglês)", "Educação"],
  ["Colégio IPE", "Educação"],
  ["Master Classic", "Marketing"],
];

const dev: [string, string][] = [
  ["Tapaggo", "Plataforma SaaS"],
  ["MasterClassic", "Plataforma SaaS"],
  ["aiion Marketplaces", "Plataforma SaaS"],
  ["Educaiy", "EdTech · SaaS"],
  ["Movity", "Plataforma SaaS"],
];

const social: [string, string][] = [
  ["Vitta Fisio", "Saúde e Bem-estar"],
  ["Allan Pimenta", "Cursos e Consultoria"],
  ["Rádio Hits FM 87,9", "Rádio · Comunicação"],
  ["Sales Construtora", "Construção Civil"],
  ["Roberta Finamore", "Carreira & Liderança"],
  ["Paulinho", "Artes Avulsas"],
  ["Agrobuy Alimentos", "Alimentos / Castanhas e Nuts"],
];

const videos: [string, string][] = [
  ["Rebranding, Brasmáquinas", "branding"],
  ["Vídeo Institucional, Affiance", "institucional"],
  ["Gravação e Edição de Palestra", "palestras"],
  ["Animação Comercial, Affiance", "motion"],
  ["Inauguração, Chefe Rocco", "eventos"],
  ["Cobertura de Evento, Casa Cor (Casa do Governador)", "eventos"],
  ["Animação com a EVA 2, Affiance", "motion"],
  ["Vídeo Institucional, Affiance", "institucional"],
  ["Animação de Marca, Vegans 2Go", "branding"],
  ["Edição, Gravação e Direção de Vídeos", "Edição & Direção"],
  ["Animação de Logo, Simetria Brasil", "branding"],
  ["Animação EVA, Affiance", "motion"],
  ["Vídeo Institucional, Dimensione Cidadania", "institucional"],
  ["Motion Designer e Animações", "Motion Design"],
  ["Animação de Marca, Clara Senra (Master Chef)", "motion"],
  ["Vídeo Institucional, Simetria Brasil", "institucional"],
  ["Vídeo de Publicidade, Affiance", "motion"],
  ["Animação, Dimensione Cidadania", "motion"],
  ["Vídeo Comercial, Affiance", "motion"],
];

export const projects: Project[] = [
  ...marcas.map(([name, detail, year]) => ({
    name,
    detail,
    year,
    kind: "Marcas" as const,
  })),
  ...sites.map(([name, detail]) => ({ name, detail, kind: "Sites" as const })),
  ...dev.map(([name, detail]) => ({
    name,
    detail,
    kind: "Desenvolvimento" as const,
  })),
  ...social.map(([name, detail]) => ({ name, detail, kind: "Social" as const })),
  ...videos.map(([name, detail]) => ({ name, detail, kind: "Vídeos" as const })),
  {
    name: "Qualquer Coisa por Milyak",
    detail: "Meiriele Alves",
    year: "2025",
    kind: "Livros" as const,
  },
];

export const projectFilters = [
  "Todos",
  "Desenvolvimento",
  "Marcas",
  "Sites",
  "Social",
  "Vídeos",
  "Livros",
  "Lançamentos",
] as const;

export type BlogPost = {
  title: string;
  date: string;
  category?: string;
  excerpt?: string;
  read?: string;
};

export const blogCategories = [
  "Todos",
  "Curiosidades",
  "Dev & Tech",
  "Negócios",
  "Segurança",
  "Automação",
  "Inteligência Artificial",
];

export const posts: BlogPost[] = [
  {
    category: "Curiosidades",
    date: "08 ago 2026",
    read: "2 min",
    title: "7 coisas que quase ninguém sabe sobre inteligência artificial",
    excerpt:
      "Fatos pouco comentados sobre como esses sistemas realmente funcionam — e por que isso muda o seu uso.",
  },
  {
    category: "Curiosidades",
    date: "08 ago 2026",
    read: "2 min",
    title: "Segredos da internet que poucas pessoas conhecem",
    excerpt:
      "Cabos submarinos, um relógio que já parou de contar e o motivo de fevereiro quebrar tanto sistema.",
  },
  {
    category: "Curiosidades",
    date: "08 ago 2026",
    read: "2 min",
    title: "O que a sua empresa não sabe que já está perdendo com processos manuais",
    excerpt:
      "Os custos invisíveis não aparecem no DRE: retrabalho, troca de contexto e conhecimento preso em uma pessoa.",
  },
  {
    category: "Dev & Tech",
    date: "07 ago 2026",
    read: "2 min",
    title: 'Versionamento de prompt: o "git" que faltava',
    excerpt:
      "Prompt em produção é código. Sem versão, você não sabe o que mudou quando a qualidade cai.",
  },
  {
    category: "Negócios",
    date: "07 ago 2026",
    read: "2 min",
    title: "O erro de comprar ferramenta antes de definir o problema",
    excerpt:
      "Empresas acumulam licenças de software que resolvem dores que ninguém conseguiu descrever em uma frase.",
  },
  {
    category: "Segurança",
    date: "06 ago 2026",
    read: "2 min",
    title: "O que é guardrail e por que todo agente precisa de um",
    excerpt:
      "Limites explícitos entre o que o modelo sugere e o que o sistema executa são o que torna IA operável.",
  },
  {
    category: "Segurança",
    date: "06 ago 2026",
    read: "2 min",
    title: "Privacidade por design é mais barata que consertar depois",
    excerpt:
      "Coletar menos, guardar menos tempo e separar o que identifica reduz risco e custo simultaneamente.",
  },
  {
    category: "Automação",
    date: "05 ago 2026",
    read: "2 min",
    title: "Sistemas legados conversam melhor com IA do que parece",
    excerpt:
      "Não é preciso substituir o ERP para automatizar. Camadas de leitura e integração resolvem boa parte.",
  },
  {
    category: "Dev & Tech",
    date: "05 ago 2026",
    read: "2 min",
    title: "Testes automatizados: o seguro mais barato do software",
    excerpt: "O custo de corrigir um defeito cresce a cada etapa em que ele passa despercebido.",
  },
  {
    category: "Automação",
    date: "04 ago 2026",
    read: "2 min",
    title: "IA em vendas: onde ela ajuda de verdade",
    excerpt:
      "Não é escrever e-mail em massa. É priorização, contexto antes da conversa e registro depois dela.",
  },
  {
    category: "Negócios",
    date: "03 ago 2026",
    read: "2 min",
    title: "A regra dos 70% em projetos de IA",
    excerpt:
      "Chegar a um protótipo bom é rápido. Os últimos 30% de confiabilidade consomem a maior parte do prazo.",
  },
  {
    category: "Dev & Tech",
    date: "02 ago 2026",
    read: "2 min",
    title: "Streaming de resposta: por que parece muito mais rápido",
    excerpt:
      "O tempo até o primeiro token importa mais para a percepção do que o tempo total de geração.",
  },
  {
    category: "Inteligência Artificial",
    date: "01 ago 2026",
    read: "2 min",
    title: "MCP e a padronização da conexão entre IA e ferramentas",
    excerpt:
      "Um protocolo comum para dar acesso a dados e ações reduz integrações sob medida a configuração.",
  },
  { date: "30 jul 2026", title: "Como medir ROI de automação sem enganar a si mesmo" },
  { date: "27 jul 2026", title: "UX de espera: como a latência vira percepção de qualidade" },
  { date: "23 jul 2026", title: "Senhas, passkeys e o fim do que você decorava" },
  { date: "20 jul 2026", title: "O custo energético da inteligência artificial" },
  { date: "16 jul 2026", title: "Reconhecimento de documentos: do OCR ao entendimento" },
  { date: "13 jul 2026", title: "Benchmarks de IA: por que eles enganam" },
  { date: "06 jul 2026", title: "Fila de mensagens: o que separa sistema frágil de sistema resiliente" },
  { date: "02 jul 2026", title: "O que é ajuste por instrução e por que ele criou o chat moderno" },
  { date: "29 jun 2026", title: "A diferença entre modelo aberto e modelo livre" },
  { date: "25 jun 2026", title: "Por que planilhas ainda dominam — e o que fazer com isso" },
  { date: "22 jun 2026", title: "Por que o seu chatbot frustra o cliente" },
  { date: "18 jun 2026", title: "Nuvem ou servidor próprio para IA: como decidir" },
  { date: "16 jun 2026", title: "Webhooks: a espinha dorsal invisível das integrações" },
  { date: "09 jun 2026", title: "Dívida técnica: a conta que sempre chega" },
  { date: "02 jun 2026", title: "Edge computing: por que processar perto de quem usa" },
  { date: "26 mai 2026", title: "Dados sintéticos: quando inventar dado é boa prática" },
  { date: "19 mai 2026", title: "Chain-of-thought: por que pensar em voz alta melhora a resposta" },
  { date: "12 mai 2026", title: "Idempotência: o detalhe de API que evita cobrar duas vezes" },
  { date: "05 mai 2026", title: "O mito do funcionário substituído pela IA" },
  { date: "28 abr 2026", title: "Quantização: como rodar modelo grande em máquina pequena" },
  { date: "21 abr 2026", title: "Deepfakes: o problema não é a tecnologia, é a verificação" },
  { date: "14 abr 2026", title: "Por que toda empresa deveria ter um glossário de dados" },
  { date: "07 abr 2026", title: "Multimodal: quando a IA passa a ver e ouvir" },
  { date: "31 mar 2026", title: 'Observabilidade de IA: o que medir quando nada "quebra"' },
  { date: "24 mar 2026", title: "A diferença entre automação e inteligência" },
  { date: "17 mar 2026", title: "Destilação: como modelos pequenos ficaram tão bons" },
  { date: "10 mar 2026", title: "Prompt injection: a vulnerabilidade que nasce com a IA" },
  { date: "03 mar 2026", title: "Quanto custa de verdade colocar IA em produção" },
  { date: "24 fev 2026", title: "Embeddings: a tecnologia invisível por trás da busca moderna" },
  { date: "17 fev 2026", title: "O que a LGPD exige de quem usa IA generativa" },
  { date: "10 fev 2026", title: "Automatizar antes de organizar é multiplicar o caos" },
  { date: "03 fev 2026", title: "Temperatura, top-p e o mito da criatividade da IA" },
  { date: "27 jan 2026", title: "Por que GPU, e não CPU, move a IA" },
  { date: "20 jan 2026", title: "Agentes de IA: o que muda quando o modelo executa ações" },
  { date: "14 jan 2026", title: "O que é janela de contexto e por que ela limita seu produto" },
  { date: "08 jan 2026", title: "RAG explicado: quando vale mais do que fine-tuning" },
  { date: "02 jan 2026", title: "Como um LLM realmente funciona por trás do chat" },
];
