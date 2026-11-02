export const PHONE_LABEL = "+55 38 99750-9402";
export const WHATSAPP_NUMBER = "5538997509402";
export const COMPANY = "aiion";
export const CNPJ = "68.254.681/0001-58";

export function waLink(text: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export const WA_DEFAULT = waLink(
  "Olá! Vim pelo site da aiion. Quero falar sobre o D360: marca, sistema e IA.",
);

export const WA_FOUNDER = waLink(
  "Olá, Jhenni! Vim pelo site da aiion e quero conversar sobre o método D360.",
);

export const links = {
  jhenni: "https://jhenni.com.br/",
  instagramPersonal: "https://www.instagram.com/01jhennii/",
  instagram: "https://www.instagram.com/aiido.ai/",
  facebook: "https://www.facebook.com/profile.php?id=61578655212149",
  linkedin: "https://www.linkedin.com/in/aiido-ai-0897683b9/",
  behance: "https://www.behance.net/aiionai",
  pinterest: "https://br.pinterest.com/aiidoaiido/",
  jingle: "https://aiidojingle.com.br/",
  leads: "https://aiidoleads.com.br/",
};

export const nav = [
  { href: "/#servicos", label: "Serviços" },
  { href: "/#metodo", label: "Método D360" },
  { href: "/fundadora", label: "Fundadora" },
  { href: "/portfolio", label: "Portfólio" },
  { href: "/blog", label: "Blog" },
  { href: "/#contato", label: "Contato" },
];

export const services = [
  {
    index: "01",
    title: "Marca",
    text: "A marca é o que a pessoa reconhece antes de ler a oferta. Nome, logo, cores, tipografia, papelaria e manual saem juntos, para o anúncio, o site, o WhatsApp e a IA falarem com a mesma cara.",
    points: [
      { label: "Nome", text: "O nome e o jeito de falar. A empresa cabe em uma frase e a pessoa reconhece de novo na próxima peça." },
      { label: "Manual", text: "Onde a marca pode ir, o que não muda e como a equipe aplica em uma peça nova sem inventar outra versão." },
      { label: "Logo", text: "Símbolo, versão horizontal e o uso em fundo escuro, claro e pequeno. A marca aguenta o anúncio e o ícone do app." },
      { label: "Papelaria", text: "Cartão, assinatura e as peças que a pessoa vê fora da tela, no mesmo desenho do site." },
    ],
    wide: true,
  },
  {
    index: "02",
    title: "Site e loja",
    text: "O site é o endereço onde a visita entende o que você faz, para quem é e qual é o próximo passo. Institucional, página de venda ou loja. A conversa, o orçamento ou a compra seguem para o CRM.",
    points: [
      { label: "Site", text: "Quem é a empresa, o que entrega e por que continuar. Cada página tem um caminho, não um texto solto." },
      { label: "Página de venda", text: "Uma oferta, o argumento e um único próximo passo. A visita sai para o WhatsApp ou para o pedido." },
      { label: "Loja", text: "Catálogo, produto e compra. O pedido fica registrado, com o que a pessoa escolheu." },
    ],
  },
  {
    index: "03",
    title: "CRM",
    text: "O CRM guarda lead, cliente e venda no mesmo lugar. O que entrou pelo anúncio, pelo site ou pelo WhatsApp fica com origem, dono e próximo passo. A equipe retoma a conversa em vez de procurar o pedido no celular de alguém.",
    points: [
      { label: "Lead", text: "Quem chegou, de onde veio e o que pediu. Nada fica só na mensagem de um atendente." },
      { label: "Cliente", text: "Contato, histórico e o que já foi combinado. A próxima pessoa da equipe continua de onde a conversa parou." },
      { label: "Venda", text: "O pedido e o estágio, do primeiro contato ao fechamento. O que entrou não some no meio do caminho." },
    ],
  },
  {
    index: "04",
    title: "IA de atendimento",
    text: "A IA responde, tira dúvida e qualifica no tom do negócio, de dia e de noite. Entra em todo sistema da aiion. Ela sabe o que pode dizer sozinha e o que precisa passar para uma pessoa, com o histórico no CRM.",
    points: [
      { label: "Atendimento", text: "Resposta no tom da marca, fora do horário comercial. A pessoa não espera o dia seguinte para uma dúvida simples." },
      { label: "Qualificação", text: "Pergunta o que a equipe precisa saber antes de assumir: o que a pessoa quer, para quando e por qual canal." },
      { label: "Passagem", text: "Quando a pessoa pede um humano, a conversa vai junto. A equipe não recomeça do zero." },
    ],
    featured: true,
  },
  {
    index: "05",
    title: "Redes e WhatsApp",
    text: "O anúncio chama a pessoa certa. O WhatsApp oficial, pela API, conversa, manda criativo e texto de venda e registra o que foi dito. O tráfego fica com a verba no controle e o retorno medido. O clique segue para o CRM.",
    points: [
      { label: "Redes", text: "Presença e conteúdo no lugar onde a pessoa já decide. A peça usa a mesma marca do site." },
      { label: "Tráfego", text: "A verba fica no controle e o retorno é medido em conversa e pedido, não só em clique." },
      { label: "WhatsApp", text: "Disparo e automação pela API oficial, com criativo e texto de venda. O que foi dito fica registrado." },
    ],
  },
  {
    index: "06",
    title: "Sistema e app",
    text: "O sistema próprio segura a rotina que planilha e grupo não seguram: pedido, agenda, equipe e o que a operação precisa ver no dia. O app nas lojas Android e iOS leva essa rotina para fora da mesa. Quando alguém sai, o processo continua no sistema.",
    points: [
      { label: "Sistema", text: "A rotina da empresa, com o acesso da equipe e o dado no lugar certo. O processo não mora na cabeça de uma pessoa." },
      { label: "App", text: "A mesma operação no celular, para quem atende, visita ou fecha fora da mesa." },
      { label: "Lojas", text: "Publicação na Android e na iOS. A equipe baixa o app e entra com o próprio acesso." },
    ],
  },
];

export const phases = [
  {
    id: "D1",
    title: "Desenvolvimento",
    kicker: "A empresa ganha cara, endereço e quem atende",
    items: [
      "Nome, manual e a cara da marca",
      "Site, página de venda ou loja",
      "CRM com lead, cliente e venda juntos",
      "IA de atendimento 24/7, no tom do negócio",
    ],
  },
  {
    id: "D2",
    title: "Digitalização",
    kicker: "A marca aparece onde o cliente já decide",
    items: [
      "Facebook, Instagram e TikTok no ar",
      "LinkedIn, YouTube e Google Meu Negócio",
      "A marca achável onde a pessoa já passa",
    ],
  },
  {
    id: "D3",
    title: "Divulgação",
    kicker: "O anúncio chama. O WhatsApp puxa a conversa.",
    items: [
      "Tráfego pago com a verba no controle e o retorno medido",
      "WhatsApp na API oficial: disparo e automação",
      "Criativo, copy, blog e página de venda",
      "Reunião e plano de expansão",
    ],
  },
  {
    id: "D4",
    title: "Domínio",
    kicker: "A equipe opera. A IA continua a conversa.",
    items: [
      "Treino da equipe comercial",
      "Treino para operar os sistemas",
      "O que se repete passa a rodar com IA",
      "Sistema sob medida e app nas lojas",
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
    title: "IA dentro do sistema",
    text: "Atende e qualifica no tom da marca, de dia e de noite. Não é um extra colado no fim do projeto.",
  },
  {
    title: "O lead não some",
    text: "Clique, conversa e pedido ficam no mesmo lugar. A equipe retoma de onde a conversa parou.",
  },
  {
    title: "Entra o que trava agora",
    text: "Marca, site, CRM, redes, WhatsApp ou app. O diagnóstico mostra a camada que a venda está esperando.",
  },
  {
    title: "Feito para o dia seguinte",
    text: "Código, dado e acesso são ferramenta de trabalho, não uma página que se troca na semana seguinte.",
  },
  {
    title: "Quem constrói responde",
    text: "A conversa do site cai no WhatsApp de quem desenha. Sem fila entre você e a entrega.",
  },
];

export const startSteps = [
  {
    index: "01",
    title: "Diagnóstico",
    text: "Uma leitura curta de marca, site, CRM, IA, redes, tráfego, WhatsApp e app. A resposta sai nas camadas do D360.",
  },
  {
    index: "02",
    title: "WhatsApp",
    text: "A conversa continua no WhatsApp. Quem desenha e constrói é quem responde.",
  },
  {
    index: "03",
    title: "A camada que falta",
    text: "Não precisa das quatro camadas no primeiro dia. Entra o ponto em que a venda trava.",
  },
  {
    index: "04",
    title: "Uso com a equipe",
    text: "Marca, sistema e atendimento passam a ser usados. A equipe opera o que a aiion entregou.",
  },
];

export const questions = [
  {
    q: "Vocês entregam ou só desenham?",
    a: "Entregamos. Marca, site, loja, CRM, IA, redes, tráfego, WhatsApp, sistema e app nas lojas. O diagnóstico diz por onde começar.",
  },
  {
    q: "Preciso contratar as quatro camadas?",
    a: "Não. Entra a camada que trava a venda agora. Pode ser só marca, site, CRM, redes, WhatsApp ou app.",
  },
  {
    q: "A IA é cobrada à parte?",
    a: "Não. Entra no sistema, no tom do negócio, para atender e qualificar. Não é um extra no fim do projeto.",
  },
  {
    q: "Quanto custa?",
    a: "O valor segue o que entra. O diagnóstico mostra o escopo. A proposta sai no WhatsApp, sem tabela genérica no site.",
  },
  {
    q: "O WhatsApp é a API oficial?",
    a: "Sim. Disparo e automação saem pela API oficial, com criativo e texto de venda.",
  },
  {
    q: "O que a neurociência faz na aiion?",
    a: "Jhenni Nascimento é engenheira de software e IA e tem pós em neurociência. A formação lê como a atenção decide e coloca isso na página, no atendimento e na IA.",
  },
];

export const marqueeItems = [
  "Marca",
  "Sistema",
  "IA",
  "Neurociência",
  "Site e loja",
  "CRM",
  "Redes e tráfego",
  "WhatsApp API",
  "App nas lojas",
  "Método D360",
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
