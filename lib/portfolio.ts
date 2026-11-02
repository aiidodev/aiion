export type ProjectKind =
  | "Plataformas"
  | "Saúde"
  | "Jurídico e obras"
  | "Gastronomia"
  | "Indústria e varejo"
  | "Serviços"
  | "Educação"
  | "Redes"
  | "Marcas";

export type Project = {
  name: string;
  detail: string;
  kind: ProjectKind;
  href?: string;
  year?: string;
  featured?: boolean;
};

const entry = (
  name: string,
  detail: string,
  kind: ProjectKind,
  href?: string,
  extra?: Pick<Project, "year" | "featured">,
): Project => ({ name, detail, kind, href, ...extra });

export const projects: Project[] = [
  entry("Tapaggo", "Plataforma", "Plataformas", "https://tapaggo.com"),
  entry("Master Classic", "Plataforma", "Plataformas", "https://masterclassic.com.br"),
  entry("Educaiy", "Plataforma de educação", "Plataformas", "https://educaiy.com.br"),
  entry("Movity", "Plataforma", "Plataformas", "https://movity.com.br"),

  entry("Dra. Ana Carla", "Saúde", "Saúde", "https://draanacarla.hpub.com.br"),
  entry("Multcare", "Saúde", "Saúde", "https://multcare.hpub.com.br/landing-page-2"),
  entry("Solo Pilates", "Saúde", "Saúde", "https://solopilates.hpub.com.br"),
  entry("Pacto Odontologia", "Saúde", "Saúde", "https://pactoodontologia.hpub.com.br"),
  entry("All Mar - Dra. Marleide", "Saúde", "Saúde", "https://allmarodontologia.hpub.com.br"),
  entry("Instituto Priorize", "Saúde", "Saúde", "https://institutopriorize.hpub.com.br"),
  entry("Dr. Flávio Roberto", "Saúde", "Saúde", "https://drflavioroberto.hpub.com.br"),
  entry("Centro de Cirurgia Oral", "Saúde", "Saúde", "https://centrodecirurgiaoral.hpub.com.br"),
  entry("Instituto Benvenutti", "Saúde", "Saúde", "https://institutobenvenutti.hpub.com.br"),
  entry("Dra. Adriana Rodrigues", "Saúde", "Saúde", "https://draadrianarodrigues.hpub.com.br"),
  entry("Clínica Intense", "Saúde", "Saúde", "https://clinicaintense.hpub.com.br"),
  entry("Dr. Cleides", "Saúde", "Saúde", "https://drcleides.hpub.com.br"),
  entry("Integrallis Implantes", "Saúde", "Saúde", "https://clinicaintegrallis.hpub.com.br/implantes-dentais"),
  entry("Renan Lamounier", "Saúde", "Saúde", "https://renanlamounier.com.br"),
  entry("Kanehira", "Saúde", "Saúde", "https://kanehira.com.br"),
  entry("Erez Odonto", "Saúde", "Saúde", "https://erezodontologia.hpub.com.br"),
  entry("Kely Olira", "Saúde", "Saúde", "https://kelyolira.hpub.com.br"),
  entry("Ube-Gyn", "Saúde", "Saúde", "https://ube-gyn.hpub.com.br"),
  entry("Luma Odonto", "Saúde", "Saúde", "https://lumaodonto.com.br"),
  entry("Studio Mirian Manso", "Saúde", "Saúde", "https://studiomirianmanso.hpub.com.br"),
  entry("Dra. Thaissa (Psiquiatria)", "Saúde", "Saúde", "https://drathaissapsi.hpub.com.br"),
  entry("Studio Corpo & Movimento", "Saúde", "Saúde", "https://studiocorpoemmovimento.hpub.com.br"),
  entry("Dr. Alexandre Lamaro", "Saúde", "Saúde", "https://dralexandrelamaro.hpub.com.br"),
  entry("Vivati Odontologia", "Saúde", "Saúde", "https://vivatiodontologia.com.br"),
  entry("Dr. Dennison", "Saúde", "Saúde", "https://drdennison.hpub.com.br"),
  entry("Dr. Bruno (Invisalign)", "Saúde", "Saúde", "https://drbrunoinvisalign.hpub.com.br"),
  entry("Dra. Larissa Martins", "Saúde", "Saúde", "https://dralarissamartins.com.br"),
  entry("Dra. Thais Endoped", "Saúde", "Saúde", "https://drathaisendoped.com.br"),
  entry("Pró-Clínico Exames", "Saúde", "Saúde", "https://exames.proclinico.com.br"),
  entry(
    "Dr. Felipe Basilato Mazega",
    "Ortopedia e cirurgia da mão. Site, páginas por condição e agendamento.",
    "Saúde",
    "https://drfelipebasilato.com.br",
  ),
  entry(
    "FOX Healthcare do Brasil",
    "Engenharia hospitalar e ressonância. Site B2B, serviços e captação de clínicas.",
    "Saúde",
    "https://foxhealthcaredobrasil.com.br",
    { featured: true },
  ),

  entry("EMD Advogados", "Jurídico", "Jurídico e obras", "https://emdadvogados.hpub.com.br"),
  entry("Advoga Servidor", "Advocacia para servidores. Site, autoridade e páginas por nicho.", "Jurídico e obras", "https://advogaservidor.com.br"),
  entry("Consílio Ambientes", "Arquitetura", "Jurídico e obras", "https://consilioambientes.hpub.com.br"),
  entry("Marcelle Arquitetura", "Arquitetura", "Jurídico e obras", "https://marcellearquitetura.hpub.com.br"),
  entry("Tok Fino Interiores", "Arquitetura", "Jurídico e obras", "https://tokfinointeriores.hpub.com.br"),
  entry("Omar Engenharia", "Engenharia", "Jurídico e obras", "https://omarengenharia.hpub.com.br"),
  entry("Garden Ouro", "Arquitetura", "Jurídico e obras", "https://gardenouro.com.br"),
  entry(
    "Acabatto",
    "Reformas residenciais. Site, texto de conversão e orçamento no WhatsApp.",
    "Jurídico e obras",
    "https://www.acabatto.com.br",
    { featured: true },
  ),

  entry("Peixaria Guanabara", "Gastronomia", "Gastronomia", "https://peixariaguanabara.hpub.com.br"),
  entry("Premier Bebidas", "Gastronomia", "Gastronomia", "https://premierbebidas.hpub.com.br"),
  entry("Bello Pane", "Gastronomia", "Gastronomia", "https://bellopane.hpub.com.br"),
  entry("Crema Gelateria", "Gastronomia", "Gastronomia", "https://cremagelateria.hpub.com.br"),
  entry("Empório Paiol", "Gastronomia", "Gastronomia", "https://emporiopaiol.hpub.com.br"),
  entry("Carvalho Delivery", "Gastronomia", "Gastronomia", "https://carvalhodelivery.com"),

  entry("Skalepay", "Indústria e varejo", "Indústria e varejo", "https://skalepay.hpub.com.br"),
  entry("LM Tubos", "Indústria e varejo", "Indústria e varejo", "https://tuboslm.hpub.com.br"),
  entry("Borges Tubos", "Indústria e varejo", "Indústria e varejo", "https://borgestubos.com.br"),
  entry("Ana T-Shirts", "Moda. Loja, identidade e lista de espera.", "Indústria e varejo", "https://anatshirts.hpub.com.br"),
  entry("Frans Esmalteria", "Varejo", "Indústria e varejo", "https://fransesmalteria.hpub.com.br"),
  entry("Ferever Decorações", "Varejo", "Indústria e varejo", "https://fereverdecoracoes.hpub.com.br"),
  entry("Conekta Cell", "Varejo", "Indústria e varejo", "https://conektacell.hpub.com.br"),
  entry("Grau Cell", "Varejo", "Indústria e varejo", "https://graucell.hpub.com.br"),
  entry("Ameerah Essence", "Perfumaria. Loja, catálogo e estrutura para o tráfego.", "Indústria e varejo", "https://ameerahessence.com.br"),
  entry("Capítulo 2", "Varejo", "Indústria e varejo", "https://capitulodois.com.br"),
  entry("Placas e Entalhes", "Artesanato em madeira. Catálogo, galeria e orçamento no WhatsApp.", "Indústria e varejo", "https://placaseentalhes.com.br"),
  entry("MKG Eletrônica", "Indústria e varejo", "Indústria e varejo", "https://mkgeletronica.com.br"),
  entry("Casulo Rosa", "Varejo", "Indústria e varejo", "https://casulorosa.com.br"),
  entry("Casa que Florece", "Varejo", "Indústria e varejo", "https://casaqueflorece.com.br"),

  entry(
    "GestorJet",
    "Software para restaurantes e delivery. Site do produto e página de teste.",
    "Serviços",
    "https://gestorjet.com.br",
    { featured: true },
  ),
  entry("Quality Clima", "Climatização e PMOC. Site, páginas de serviço e captação B2B.", "Serviços", "https://qualityclima.com.br"),
  entry("Ar Americana", "Higienização de ar-condicionado. Site, blog e captação.", "Serviços", "https://aramericana.com.br"),
  entry(
    "Limpation",
    "Higienização de estofados em BH e Nova Lima. Site, serviços e orçamento no WhatsApp.",
    "Serviços",
    "https://limpation.com.br",
    { featured: true },
  ),
  entry("FIDEES", "Serviços", "Serviços", "https://fidees.com.br"),
  entry("Volkana Marketing", "Consultoria de marketing. Site institucional.", "Serviços", "https://volkanamarketing.com"),
  entry("Daniel Rubens Fotografia", "Fotografia de eventos. Portfólio, galeria e reserva.", "Serviços", "https://danielrubens.com.br"),
  entry("Surto Olímpico", "Notícias esportivas. Portal e áreas de mídia.", "Serviços", "https://surtoolimpico.com.br"),

  entry("Daniel Gouvea (Inglês)", "Educação", "Educação", "https://professordanny.hpub.com.br"),
  entry("Colégio IPE", "Educação", "Educação", "https://colegioipe.hpub.com.br"),
  entry("Goahead Idiomas", "Escola de idiomas. Site e captação de matrículas.", "Educação", "https://goaheadidiomas.com.br"),

  entry("Vitta Fisio", "Saúde e bem-estar", "Redes", "https://instagram.com/vittafisio"),
  entry("Allan Pimenta", "Cursos e consultoria", "Redes", "https://instagram.com/allanpimenta"),
  entry("Rádio Hits FM 87,9", "Rádio", "Redes", "https://instagram.com/hits.fmbetim"),
  entry("Sales Construtora", "Construção", "Redes", "https://instagram.com/salesconstrutora"),
  entry("Roberta Finamore", "Carreira e liderança", "Redes", "https://instagram.com/robertafinamore"),
  entry("Paulinho", "Artes", "Redes", "https://instagram.com/paulinho"),
  entry("Agrobuy Alimentos", "Alimentos", "Redes", "https://instagram.com/agrobuyalimentos"),

  entry("Eu Quero Meu Desconto", "Tecnologia avançada para fidelização de clientes", "Marcas", undefined, { year: "2024" }),
  entry("Amadoria", "Arte, autoconhecimento, bem-estar e amor", "Marcas", undefined, { year: "2023" }),
  entry("Silveirinhas", "Doces e salgados", "Marcas", undefined, { year: "2024" }),
  entry("4on", "Growing together", "Marcas", undefined, { year: "2022" }),
  entry("Brasmáquinas", "Apoiando e cultivando seus valores", "Marcas", undefined, { year: "2023" }),
  entry("Vegans 2GO", "Por um mundo onde só se mata a fome", "Marcas", undefined, { year: "2022" }),
  entry("Clube UP Brasil", "Proteção auto que move o Brasil", "Marcas", undefined, { year: "2023" }),
  entry("Mil Viagens", "Viaje mil vezes mais pagando mil vezes menos", "Marcas", undefined, { year: "2024" }),
  entry("Momento com Deus", "Devocional, leve e contemporâneo", "Marcas", undefined, { year: "2024" }),
  entry("San Angel Construtora", "Construindo com solidez e propósito", "Marcas", undefined, { year: "2025" }),
  entry("WM Construtora", "Realizando sonhos através da construção", "Marcas", undefined, { year: "2024" }),
  entry("Muutos Imóveis", "Mais que imóveis, o lar que muda a sua vida", "Marcas", undefined, { year: "2025" }),
  entry("Hatoria", "Marketing jurídico que constrói autoridade", "Marcas", undefined, { year: "2025" }),
  entry("Noémie", "Essência da elegância.", "Marcas", undefined, { year: "2024" }),
  entry("Djhórdan Gomes", "Advocacia e consultoria jurídica com tradição e elegância", "Marcas", undefined, { year: "2025" }),
  entry("MRSI Advocacia", "Sobriedade e elegância para um escritório de advocacia moderno", "Marcas", undefined, { year: "2025" }),
  entry("Nogueira Costa Advogados Associados", "Tradição familiar e modernidade no direito", "Marcas", undefined, { year: "2025" }),
  entry("Alícia Almeida Advocacia", "A justiça no feminino, autoridade serena e elegante", "Marcas", undefined, { year: "2025" }),
  entry("Agência do Contador", "Contabilidade que constrói negócios", "Marcas", undefined, { year: "2025" }),
  entry("Jurídico Pro", "Tecnologia jurídica para escritórios que pensam à frente", "Marcas", undefined, { year: "2025" }),
  entry("Mulher Saudável", "Identidade acolhedora para a nutricionista Daiane Halaiko", "Marcas", undefined, { year: "2025" }),
  entry("Loja Celda", "Servindo bem, para servir sempre.", "Marcas", undefined, { year: "1980" }),
  entry("Thayza Vasconcellos", "Advocacia com sofisticação e presença", "Marcas", undefined, { year: "2025" }),
  entry("Maternidade Protegida", "Cuidado, acolhimento e proteção para cada nova vida", "Marcas", undefined, { year: "2025" }),
  entry("Jaqueline Ricci Fra", "Advocacia previdenciária com sofisticação e proximidade", "Marcas", undefined, { year: "2025" }),
  entry("Fiorot Imóveis", "Solidez e prosperidade no mercado imobiliário", "Marcas", undefined, { year: "2025" }),
  entry("Caixeta Advocacia", "Advocacia e consultoria jurídica com elegância e confiança", "Marcas", undefined, { year: "2025" }),
  entry("Dona Papeleira", "A sua gráfica digital, vibrante, divertida e cheia de amor", "Marcas", undefined, { year: "2025" }),
  entry("Costurices da Carminha", "Costurando carinho em cada detalhe da infância", "Marcas", undefined, { year: "2025" }),
  entry("Carvalho Delivery", "The Art of Transportation", "Marcas", undefined, { year: "2024" }),
  entry("CarHouse Veículos", "Sua próxima conquista começa aqui", "Marcas", undefined, { year: "2024" }),
  entry("Cantinho do Jake", "Tudo para o seu melhor aumigo", "Marcas", undefined, { year: "2024" }),
  entry("Bendito Burguer", "Hambúrguer artesanal com alma", "Marcas", undefined, { year: "2024" }),
  entry("Barbearia Monteiro", "Seja sua melhor versão", "Marcas", undefined, { year: "2024" }),
  entry("Ateliê dos Personalizados", "Feito com amor, do seu jeito", "Marcas", undefined, { year: "2024" }),
];

const homeOrder = [
  "Acabatto",
  "GestorJet",
  "FOX Healthcare do Brasil",
  "Tapaggo",
  "Master Classic",
  "Educaiy",
];

export const homeProjects = homeOrder.map((name) => {
  const project = projects.find((item) => item.name === name);
  if (!project) throw new Error(`Projeto da página inicial ausente: ${name}`);
  return project;
});

export const projectFilters = [
  "Todos",
  "Plataformas",
  "Saúde",
  "Jurídico e obras",
  "Gastronomia",
  "Indústria e varejo",
  "Serviços",
  "Educação",
  "Redes",
  "Marcas",
] as const;

/** Screenshot of a live site, served by our own route so the browser can show it. */
export function siteShot(href: string) {
  return `/api/shot?url=${encodeURIComponent(href)}`;
}

export function projectShot(project: Project) {
  if (!project.href || /instagram\.com/i.test(project.href)) return undefined;
  return siteShot(project.href);
}
