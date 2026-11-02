export type BlogReference = { title: string; source: string; href: string };
export type BlogSection = { heading: string; paragraphs: string[] };

export type BlogArticle = {
  slug: string;
  title: string;
  date: string;
  category: string;
  seed: number;
  excerpt: string;
  caption: string;
  sections: BlogSection[];
  references: BlogReference[];
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

const ref = (title: string, source: string, href: string): BlogReference => ({ title, source, href });

export const articles: BlogArticle[] = [
  {
    slug: "sete-coisas-sobre-inteligencia-artificial",
    title: "7 coisas que quase ninguém sabe sobre inteligência artificial",
    date: "08 ago 2026",
    category: "Curiosidades",
    seed: 0,
    excerpt: "O chat parece uma pessoa lendo a sua pergunta. Por baixo, é outra operação: prever a próxima palavra, com limites que o texto da tela não mostra.",
    caption: "Sete camadas entre o que o modelo calcula e o que a pessoa lê na tela.",
    sections: [
      {
        heading: "O que a tela esconde",
        paragraphs: [
          "Um modelo de linguagem não consulta um arquivo de respostas prontas. Ele estima, token a token, o que tem mais chance de continuar o texto. Por isso a frase sai fluida mesmo quando o fato está errado: fluidez e verdade não são a mesma conta.",
          "O treino e o uso são momentos diferentes. O treino ajusta os pesos com um volume enorme de texto. Na conversa, o modelo só vê o que entrou naquela janela: a pergunta, o histórico e o que um sistema externo colocou junto. Ele não “lembra” o seu CRM se ninguém ligou o CRM.",
          "A data de corte do treino não é um detalhe de rodapé. Perguntar o que aconteceu ontem, sem uma busca ou uma ferramenta, é pedir que o modelo complete um texto com o que era comum até a última leva de dados.",
        ],
      },
      {
        heading: "Sete pontos que mudam o uso",
        paragraphs: [
          "Primeiro: a resposta é uma continuação provável, não uma consulta a uma fonte. Segundo: temperatura e amostragem mudam a variedade, não a honestidade. Terceiro: a janela de contexto corta o que não cabe, em silêncio. Quarto: um número citado pode ser forma de frase, não medida.",
          "Quinto: o modelo não distingue, sozinho, instrução de dado. Um texto colado no meio do prompt pode ser lido como ordem. Sexto: ferramentas (busca, planilha, API) é que trazem o mundo atual para dentro da resposta. Sétimo: o que parece rapidez muitas vezes é o primeiro token chegando antes do texto inteiro.",
          "Nenhum desses pontos torna a ferramenta inútil. Eles dizem onde ela serve: rascunho, classificação, leitura de material que você forneceu, e rotina com limite. Onde a frase precisa valer como fato, a fonte tem de estar fora do modelo, à vista de quem lê.",
        ],
      },
    ],
    references: [
      ref("Attention Is All You Need", "Vaswani e outros, arXiv", "https://arxiv.org/abs/1706.03762"),
      ref("Language models are few-shot learners", "Brown e outros, arXiv", "https://arxiv.org/abs/2005.14165"),
      ref("OWASP Top 10 for LLM Applications", "OWASP", "https://genai.owasp.org/"),
    ],
  },
  {
    slug: "segredos-da-internet",
    title: "Segredos da internet que poucas pessoas conhecem",
    date: "08 ago 2026",
    category: "Curiosidades",
    seed: 1,
    excerpt: "A página abre na hora. O caminho até ela atravessa cabos no fundo do mar, um relógio que o mundo decidiu parar de ajustar e um fevereiro que insiste em quebrar sistema.",
    caption: "O pedido da tela atravessa cabos, relógios e calendários antes de voltar.",
    sections: [
      {
        heading: "O mar ainda carrega a maior parte",
        paragraphs: [
          "A maior parte do tráfego entre continentes não vai por satélite. Vai por cabos de fibra no leito do oceano. Um corte, uma âncora ou um reparo muda a rota e a latência sem que o site “caia” do jeito que a pessoa espera. O mapa público desses cabos é o desenho físico da rede que a gente trata como nuvem.",
          "Satélite existe e cresce em lugares sem fibra. Ele não substitui o cabo nas rotas de maior volume. Quando um serviço parece lento só para um país, a causa pode estar numa rota marítima, não no código da página.",
        ],
      },
      {
        heading: "O relógio e o fevereiro",
        paragraphs: [
          "Durante décadas, o tempo civil ganhou um segundo extra de vez em quando para acompanhar a rotação da Terra. Sistemas que assumiam que um minuto tem sempre 60 segundos quebravam nesse instante. A Conferência Geral de Pesos e Medidas decidiu abandonar esse ajuste até 2035, justamente porque o segundo intercalado virou risco operacional.",
          "Fevereiro é o outro calendário que o software esquece. Ano bissexto não é “a cada quatro anos” sem resto: 1900 não foi bissexto, 2000 foi. Quem grava data como texto, ou copia a regra pela metade, descobre o erro só no dia 29. RFC 3339 existe para a data viajar com fuso e formato, não como frase solta.",
        ],
      },
    ],
    references: [
      ref("Submarine Cable Map", "TeleGeography", "https://www.submarinecablemap.com/"),
      ref("27th meeting of the CGPM", "BIPM", "https://www.bipm.org/en/cgpm-2022"),
      ref("Date and Time on the Internet: Timestamps", "RFC 3339, IETF", "https://www.rfc-editor.org/rfc/rfc3339"),
    ],
  },
  {
    slug: "processos-manuais",
    title: "O que a sua empresa não sabe que já está perdendo com processos manuais",
    date: "08 ago 2026",
    category: "Curiosidades",
    seed: 2,
    excerpt: "O prejuízo do processo manual quase nunca aparece como uma linha no resultado. Aparece como espera, retrabalho e conhecimento que só existe na cabeça de uma pessoa.",
    caption: "O que a planilha não soma: espera, repetição e o que só uma pessoa sabe.",
    sections: [
      {
        heading: "O desperdício que não vira conta",
        paragraphs: [
          "A produção enxuta deu nome a perdas que o chão de fábrica já via: espera, movimento sem valor, defeito, excesso de estoque, excesso de processo. No escritório, a mesma lista muda de forma. A pessoa espera um arquivo. Copia o pedido para outra planilha. Corrige o que a primeira cópia errou. Nada disso nasce com o rótulo “custo”.",
          "O conhecimento preso numa pessoa é a perda mais cara de explicar. Quando só ela sabe onde está o combinado com o cliente, a empresa não tem processo: tem plantão. Férias, demissão ou um celular trocado levam o histórico junto.",
        ],
      },
      {
        heading: "O que observar antes de automatizar",
        paragraphs: [
          "Vale contar o caminho de um pedido real, do primeiro contato até o pago, e marcar onde alguém reescreve um dado que já existia. Cada reescrita é um lugar em que o número pode divergir. Esse mapa, feito com um caso, diz mais do que um discurso sobre produtividade.",
          "Automatizar o caminho torto só faz o erro andar mais rápido. O passo útil é tirar a cópia desnecessária e deixar um registro que outra pessoa consiga retomar. Aí sim a ferramenta tem o que operar.",
        ],
      },
    ],
    references: [
      ref("Toyota Production System", "Toyota", "https://global.toyota/en/company/vision-and-philosophy/production-system/"),
      ref("Strangler Fig Application", "Martin Fowler", "https://martinfowler.com/bliki/StranglerFigApplication.html"),
    ],
  },
  {
    slug: "versionamento-de-prompt",
    title: 'Versionamento de prompt: o "git" que faltava',
    date: "07 ago 2026",
    category: "Dev & Tech",
    seed: 3,
    excerpt: "Prompt em produção é código. Sem versão, ninguém sabe o que mudou quando a resposta piora.",
    caption: "O prompt entra no mesmo histórico do código: mudança, autor e motivo.",
    sections: [
      {
        heading: "Texto que muda o sistema",
        paragraphs: [
          "O prompt deixa de ser rascunho no dia em que uma resposta dele chega ao cliente ou grava um registro. A partir daí, trocar uma frase é trocar o comportamento do produto. Se a frase mora num documento solto, ou no histórico de um chat, não há como saber qual versão atendeu ontem.",
          "Git já resolve o problema para código: cada mudança tem autor, data e mensagem. O prompt pede o mesmo trato. Arquivo no repositório, revisão em par quando a mudança altera tom ou regra, e um jeito de ligar a versão do texto à versão que está no ar.",
        ],
      },
      {
        heading: "O que versionar junto",
        paragraphs: [
          "Não basta guardar o texto. O resultado depende do modelo, da temperatura, das ferramentas ligadas e dos exemplos. Uma mudança de modelo com o mesmo prompt é outra versão do sistema. O registro útil junta esses itens, senão o “voltamos atrás” não volta ao mesmo lugar.",
          "Catálogos de padrões de prompt ajudam a nomear o que a equipe repete: papel, formato de saída, critério de recusa. Nomear evita que cada pessoa reinvente a instrução num canto diferente do código.",
        ],
      },
    ],
    references: [
      ref("Pro Git", "Git", "https://git-scm.com/book/en/v2"),
      ref("A Prompt Pattern Catalog", "White e outros, arXiv", "https://arxiv.org/abs/2302.11382"),
      ref("DSPy: Compiling Declarative Language Model Calls", "Khattab e outros, arXiv", "https://arxiv.org/abs/2310.03714"),
    ],
  },
  {
    slug: "ferramenta-antes-do-problema",
    title: "O erro de comprar ferramenta antes de definir o problema",
    date: "07 ago 2026",
    category: "Negócios",
    seed: 4,
    excerpt: "A licença chega antes da frase que diz qual dor ela deveria tirar. O software fica instalado e o trabalho continua no mesmo lugar.",
    caption: "A ferramenta entra depois da frase que descreve a dor, não antes.",
    sections: [
      {
        heading: "Licença não é processo",
        paragraphs: [
          "É comum a empresa fechar um sistema porque um concorrente usa, ou porque a demonstração impressionou. Na segunda-feira, ninguém sabe qual tarefa saiu do papel. A ferramenta vira mais uma senha e mais uma aba.",
          "O teste simples é uma frase: “hoje, este trabalho trava em tal passo, e a pessoa faz isto à mão”. Se a frase não existe, ainda não há o que comprar. Se existe, dá para perguntar se a ferramenta cobre esse passo ou só a vitrine dele.",
        ],
      },
      {
        heading: "O que decidir antes do contrato",
        paragraphs: [
          "Quem opera, de onde vem o dado e para onde ele vai. Sem dono, o sistema fica vazio. Sem origem do dado, a equipe volta a digitar. Sem destino, o relatório não muda a decisão de ninguém.",
          "Uma prova curta, com um fluxo real e um prazo para desligar se não servir, custa menos do que um ano de licença parada. O contrato vem depois dessa prova, não no lugar dela.",
        ],
      },
    ],
    references: [
      ref("Strangler Fig Application", "Martin Fowler", "https://martinfowler.com/bliki/StranglerFigApplication.html"),
      ref("Hidden Technical Debt in Machine Learning Systems", "Sculley e outros, NeurIPS", "https://papers.nips.cc/paper/5656-hidden-technical-debt-in-machine-learning-systems"),
    ],
  },
  {
    slug: "guardrail",
    title: "O que é guardrail e por que todo agente precisa de um",
    date: "06 ago 2026",
    category: "Segurança",
    seed: 5,
    excerpt: "O modelo sugere. O sistema é que executa. O guardrail é o limite explícito entre uma coisa e outra.",
    caption: "A sugestão do modelo para antes da ação. O limite é desenhado no sistema.",
    sections: [
      {
        heading: "Sugestão não é permissão",
        paragraphs: [
          "Um agente que pode chamar ferramenta, enviar mensagem ou gravar dado não deve tratar o texto do modelo como ordem final. O modelo produz uma proposta. Código, regra e permissão decidem se a proposta anda.",
          "Sem esse corte, um texto ambíguo vira efeito no mundo: e-mail enviado, registro apagado, desconto aplicado. O guardrail nomeia o que pode acontecer sozinho, o que pede uma pessoa e o que está fora.",
        ],
      },
      {
        heading: "Onde o limite mora",
        paragraphs: [
          "Ele mora fora do prompt. Lista de ferramentas permitidas, teto de valor, conferência de formato, e uma recusa quando o pedido sai do escopo. O prompt pode pedir educação. A trava que impede a ação indevida é o programa.",
          "O AI Risk Management Framework, do NIST, trata risco de IA como algo a governar no sistema, não como uma frase de boas maneiras no final do manual. O mesmo vale para um agente pequeno: o limite é parte do desenho, não um aviso.",
        ],
      },
    ],
    references: [
      ref("AI Risk Management Framework", "NIST", "https://www.nist.gov/itl/ai-risk-management-framework"),
      ref("NeMo Guardrails", "NVIDIA", "https://docs.nvidia.com/nemo/guardrails/index.html"),
    ],
  },
  {
    slug: "privacidade-por-design",
    title: "Privacidade por design é mais barata que consertar depois",
    date: "06 ago 2026",
    category: "Segurança",
    seed: 6,
    excerpt: "Coletar menos, guardar por menos tempo e separar o que identifica a pessoa evita um conserto que chega quando o dado já se espalhou.",
    caption: "O dado mínimo entra no desenho. O restante não nasce para ser apagado depois.",
    sections: [
      {
        heading: "O conserto chega tarde",
        paragraphs: [
          "Privacidade acrescentada no fim vira aviso, termo e planilha de exceção. O dado já foi copiado para o log, para a ferramenta de suporte e para o modelo. Apagar numa tela não apaga nas cópias.",
          "Privacidade desde o desenho, a ideia que Ann Cavoukian nomeou e que a ISO 31700 retomou, pede o contrário: decidir antes o que é preciso para a tarefa. O que não serve ao pedido não entra.",
        ],
      },
      {
        heading: "Três cortes práticos",
        paragraphs: [
          "Coletar o mínimo. Guardar pelo tempo da tarefa, não “para sempre, vai que”. Separar o identificador do conteúdo quando a análise não precisa saber quem é a pessoa. Nenhum dos três depende de um produto novo. Dependem de uma pergunta feita na especificação.",
          "Quando a IA entra, a pergunta se repete: o prompt, o log e o provedor do modelo recebem o quê? Se o texto do cliente não precisa sair da empresa, ele não deveria ir no pedido ao modelo. Esse corte, feito cedo, evita o projeto de “limpar o histórico” no mês seguinte.",
        ],
      },
    ],
    references: [
      ref("ISO 31700, Privacy by design", "ISO", "https://www.iso.org/standard/84977.html"),
      ref("Lei nº 13.709, LGPD", "Planalto", "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm"),
    ],
  },
  {
    slug: "sistemas-legados-e-ia",
    title: "Sistemas legados conversam melhor com IA do que parece",
    date: "05 ago 2026",
    category: "Automação",
    seed: 7,
    excerpt: "Não é preciso trocar o ERP para a operação ganhar leitura e registro. Uma camada na frente do sistema antigo resolve boa parte do caminho.",
    caption: "O sistema antigo continua. Uma camada nova lê, registra e devolve.",
    sections: [
      {
        heading: "Trocar tudo é o projeto que não começa",
        paragraphs: [
          "O sistema que a empresa usa há anos guarda pedido, estoque e financeiro. Ele é ruim de tela e bom de história. Trocar esse núcleo para “colocar IA” mistura dois riscos: o da migração e o da ferramenta nova. Os dois juntos param.",
          "O padrão da figueira estranguladora faz o contrário. Uma camada nova passa a atender um pedaço do caminho, lê o sistema antigo e, só quando esse pedaço está firme, assume mais. O legado não precisa morrer no primeiro dia.",
        ],
      },
      {
        heading: "Onde a IA entra sem reescrever o núcleo",
        paragraphs: [
          "Ela lê o que já existe: e-mail, PDF, mensagem, tela exportada. Classifica, resume e devolve um registro que o sistema antigo já sabe gravar. A ação de gravar continua sendo a API ou o arquivo que o ERP aceita, não um clique inventado pelo modelo.",
          "O limite é o mesmo de qualquer integração. Se o legado não tem um jeito estável de entrar dado, o primeiro trabalho é esse contrato, não o texto do prompt. Sem contrato, a IA vira mais uma pessoa digitando no lugar errado.",
        ],
      },
    ],
    references: [
      ref("Strangler Fig Application", "Martin Fowler", "https://martinfowler.com/bliki/StranglerFigApplication.html"),
      ref("Hidden Technical Debt in Machine Learning Systems", "Sculley e outros, NeurIPS", "https://papers.nips.cc/paper/5656-hidden-technical-debt-in-machine-learning-systems"),
    ],
  },
  {
    slug: "testes-automatizados",
    title: "Testes automatizados: o seguro mais barato do software",
    date: "05 ago 2026",
    category: "Dev & Tech",
    seed: 8,
    excerpt: "O defeito custa pouco quando nasce e muito quando chega ao cliente. O teste automático é o que impede essa viagem.",
    caption: "A pirâmide: muitos testes pequenos na base, poucos no topo, o defeito parado cedo.",
    sections: [
      {
        heading: "O defeito viaja",
        paragraphs: [
          "Um erro de condição na função é uma linha. O mesmo erro, descoberto pelo cliente, é suporte, dado corrigido à mão e confiança gasta. O teste não deixa o software perfeito. Ele segura a regressão: o que já funcionava continua funcionando quando alguém mexe ao lado.",
          "A pirâmide de testes, como Martin Fowler a descreve, põe a maior parte da verificação em testes pequenos e rápidos, e reserva a ponta para poucos fluxos inteiros. Inverter isso, com só um teste manual no fim, faz a equipe descobrir o problema tarde.",
        ],
      },
      {
        heading: "O que vale a primeira leva",
        paragraphs: [
          "Não é cobertura no papel. É o caminho que, se quebrar, para a venda ou cobra a pessoa duas vezes. Esse caminho ganha um teste que roda a cada mudança. O restante entra conforme a dor aparece de novo.",
          "IA no produto não dispensa o teste. Pelo contrário: a saída do modelo varia, então o teste precisa checar contrato (formato, campo obrigatório, recusa) mais do que uma frase decorada. Frase decorada quebra no dia em que o modelo troca um sinônimo.",
        ],
      },
    ],
    references: [
      ref("Test Pyramid", "Martin Fowler", "https://martinfowler.com/bliki/TestPyramid.html"),
      ref("The Practical Test Pyramid", "Ham Vocke, Martin Fowler", "https://martinfowler.com/articles/practical-test-pyramid.html"),
    ],
  },
  {
    slug: "ia-em-vendas",
    title: "IA em vendas: onde ela ajuda de verdade",
    date: "04 ago 2026",
    category: "Automação",
    seed: 9,
    excerpt: "Não é disparar e-mail em massa. É colocar contexto antes da conversa e deixar o que foi dito registrado depois.",
    caption: "Antes da conversa, o contexto. Depois, o registro. O meio continua sendo uma pessoa.",
    sections: [
      {
        heading: "Onde a fila se perde",
        paragraphs: [
          "O time comercial perde tempo achando de onde veio o contato, o que já foi prometido e quem deveria responder. Essa busca acontece no celular, na planilha e na memória. A IA ajuda quando devolve esse contexto pronto, antes da pessoa abrir a conversa.",
          "Ajuda de novo no fim: resume o que foi combinado e grava no mesmo lugar em que o próximo colega vai olhar. Sem esse registro, o atendimento seguinte começa do zero, por mais boa que tenha sido a mensagem gerada.",
        ],
      },
      {
        heading: "O que não substitui",
        paragraphs: [
          "Mensagem em massa sem critério só aumenta a fila de gente que não pediu contato. Priorizar quem já demonstrou intenção, e calar o resto, é o uso adulto. O texto bonito sem esse filtro é barulho.",
          "Preço, prazo e promessa continuam com quem responde pela empresa. O modelo pode rascunhar. Quem envia confere. Esse corte evita que uma frase provável vire compromisso.",
        ],
      },
    ],
    references: [
      ref("ReAct: Synergizing Reasoning and Acting", "Yao e outros, arXiv", "https://arxiv.org/abs/2210.03629"),
      ref("AI Risk Management Framework", "NIST", "https://www.nist.gov/itl/ai-risk-management-framework"),
    ],
  },
  {
    slug: "regra-dos-70",
    title: "A regra dos 70% em projetos de IA",
    date: "03 ago 2026",
    category: "Negócios",
    seed: 10,
    excerpt: "O protótipo que impressiona na reunião é a parte curta. Confiabilidade, dado e operação consomem o resto do prazo.",
    caption: "O protótipo é o trecho curto. O restante é dado, avaliação e operação.",
    sections: [
      {
        heading: "A demonstração não é o sistema",
        paragraphs: [
          "Em projeto aplicado, a primeira versão que responde bem a alguns exemplos aparece cedo. O que falta é o que Sculley e colegas chamaram de dívida do sistema de aprendizado: dados que mudam, monitoramento, treino de quem opera, e o caminho quando a resposta vem errada.",
          "A “regra dos 70%” é uma heurística de projeto, não uma lei publicada. Ela lembra que a maior parte do prazo não está no modelo. Está em deixar a resposta utilizável toda vez, não só na demonstração.",
        ],
      },
      {
        heading: "O que entra nesses 70%",
        paragraphs: [
          "Exemplos reais, não só os felizes. Um jeito de medir se a resposta piorou. Um humano no caso que o modelo não deve decidir. Log do que foi pedido e do que foi feito. Sem isso, o protótipo vira produção por acidente.",
          "Quem contrata só a demonstração compra a parte curta. O contrato útil descreve o caso de uso, o que conta como erro e quem corrige. O modelo é uma peça dessa lista.",
        ],
      },
    ],
    references: [
      ref("Hidden Technical Debt in Machine Learning Systems", "Sculley e outros, NeurIPS", "https://papers.nips.cc/paper/5656-hidden-technical-debt-in-machine-learning-systems"),
      ref("AI Risk Management Framework", "NIST", "https://www.nist.gov/itl/ai-risk-management-framework"),
    ],
  },
  {
    slug: "streaming-de-resposta",
    title: "Streaming de resposta: por que parece muito mais rápido",
    date: "02 ago 2026",
    category: "Dev & Tech",
    seed: 11,
    excerpt: "A pessoa sente a espera até a primeira palavra. O tempo total de geração pesa menos do que esse instante.",
    caption: "O primeiro token chega. O resto da frase continua, e a espera muda de cara.",
    sections: [
      {
        heading: "O relógio que a pessoa olha",
        paragraphs: [
          "Se a interface espera a resposta inteira, a tela fica muda até o fim. O mesmo texto, entregue em partes, ocupa a atenção enquanto ainda está sendo escrito. A geração pode durar o mesmo. A percepção não.",
          "Por isso o desenho da conversa mede dois tempos: até o primeiro token e até o último. Otimizar só o total, e segurar a tela em branco, desperdiça a parte que o usuário sente.",
        ],
      },
      {
        heading: "O que o streaming não resolve",
        paragraphs: [
          "Ele não torna um modelo lento em modelo rápido. Se o primeiro token demora, a tela continua vazia. E uma resposta que chega aos poucos ainda pode estar errada: a forma não confere o conteúdo.",
          "Na API, o modo de stream é um contrato: o cliente lê eventos e desenha. Sem tratar erro no meio do fluxo, a pessoa vê uma frase cortada e acha que o sistema travou. O guia de streaming do provedor é o contrato, não um efeito visual.",
        ],
      },
    ],
    references: [
      ref("Streaming API responses", "OpenAI", "https://platform.openai.com/docs/guides/streaming-responses"),
      ref("Attention Is All You Need", "Vaswani e outros, arXiv", "https://arxiv.org/abs/1706.03762"),
    ],
  },
  {
    slug: "mcp",
    title: "MCP e a padronização da conexão entre IA e ferramentas",
    date: "01 ago 2026",
    category: "Inteligência Artificial",
    seed: 12,
    excerpt: "Cada ferramenta com um plugue diferente vira um projeto. Um protocolo comum transforma essa ligação em configuração.",
    caption: "Um protocolo no meio: o modelo pede, a ferramenta responde, sem um plugue novo a cada sistema.",
    sections: [
      {
        heading: "O custo de cada plugue",
        paragraphs: [
          "Ligar um modelo a uma planilha, a um banco e a um calendário, cada um com um código próprio, repete a mesma ideia: descrever a ferramenta, chamar, ler a resposta. O Model Context Protocol propõe um jeito comum para essa descrição.",
          "Com um protocolo, trocar ou acrescentar uma fonte deixa de ser uma integração escrita do zero. Vira configuração, desde que a ferramenta fale o protocolo e o cliente saiba pedi-la.",
        ],
      },
      {
        heading: "Padrão não é permissão",
        paragraphs: [
          "MCP padroniza o cano, não o juízo. O agente continua precisando de limite: qual ferramenta existe, o que ela pode alterar e o que uma pessoa precisa confirmar. Protocolo aberto sem permissão é só um caminho mais fácil para a ação errada.",
          "A especificação mora no site do protocolo. Ler o introdutório evita tratar a sigla como produto mágico. É um acordo de formato entre quem pede e quem executa.",
        ],
      },
    ],
    references: [
      ref("Model Context Protocol", "MCP", "https://modelcontextprotocol.io/"),
      ref("ReAct: Synergizing Reasoning and Acting", "Yao e outros, arXiv", "https://arxiv.org/abs/2210.03629"),
    ],
  },
  {
    slug: "roi-de-automacao",
    title: "Como medir ROI de automação sem enganar a si mesmo",
    date: "30 jul 2026",
    category: "Negócios",
    seed: 13,
    excerpt: "Hora poupada no slide não é hora poupada na semana. A conta começa no tempo que a tarefa leva hoje, medido, não estimado no corredor.",
    caption: "A conta compara o mesmo passo, antes e depois, no relógio da operação.",
    sections: [
      {
        heading: "O número que se inventa",
        paragraphs: [
          "“Vamos ganhar tantas horas” costuma sair de uma reunião, não de um cronômetro. A pessoa chuta quanto tempo a tarefa leva, multiplica pela equipe e chama isso de retorno. Ninguém volta no mês seguinte para ver se a hora apareceu.",
          "Medir, no sentido de Douglas Hubbard, começa por decidir qual decisão o número vai mudar e qual incerteza vale a pena reduzir. Sem isso, o indicador existe para o relatório, não para a operação.",
        ],
      },
      {
        heading: "Uma conta que aguenta revisão",
        paragraphs: [
          "Escolha um passo só. Conte, durante uma semana, quantas vezes ele ocorre e quanto dura, com relógio, não com memória. Depois da automação, conte de novo o mesmo passo, incluindo o tempo de corrigir o que a automação errou.",
          "O retorno é a diferença, menos o custo de manter a automação. Se a correção come a hora poupada, o projeto não retornou. Essa frase é mais útil do que um percentual redondo apresentado antes de existir medida.",
        ],
      },
    ],
    references: [
      ref("How to Measure Anything", "Douglas Hubbard", "https://www.howtomeasureanything.com/"),
      ref("Hidden Technical Debt in Machine Learning Systems", "Sculley e outros, NeurIPS", "https://papers.nips.cc/paper/5656-hidden-technical-debt-in-machine-learning-systems"),
    ],
  },
  {
    slug: "ux-de-espera",
    title: "UX de espera: como a latência vira percepção de qualidade",
    date: "27 jul 2026",
    category: "Dev & Tech",
    seed: 14,
    excerpt: "Dois sistemas com o mesmo tempo de resposta parecem diferentes se um mostra progresso e o outro mostra o nada.",
    caption: "O mesmo segundo, desenhado: progresso visível de um lado, tela muda do outro.",
    sections: [
      {
        heading: "A espera é interface",
        paragraphs: [
          "A latência não é só um número de servidor. É o que a pessoa vê enquanto o número corre. Tela em branco parece quebra. Um estado de “estamos lendo o pedido” parece trabalho. O relógio pode ser o mesmo.",
          "O Nielsen Norman Group trata tempo de resposta como parte da usabilidade: atrasos curtos passam, atrasos sem explicação viram desconfiança. A barra não acelera o servidor. Ela impede que a pessoa conclua que o clique não foi.",
        ],
      },
      {
        heading: "O que mostrar",
        paragraphs: [
          "O primeiro sinal tem de caber no tempo em que a pessoa ainda não duvidou. Se a resposta vem em partes, mostre a parte. Se vem inteira, mostre o passo em que o sistema está, desde que esse passo seja verdadeiro.",
          "Animação infinita sem fim possível é pior do que a espera calada: promete que algo acontece e não entrega saída. Quando falhar, diga que falhou e o que a pessoa pode fazer. Silêncio depois do spinner é o caso que vira chamado de suporte.",
        ],
      },
    ],
    references: [
      ref("Response Time Limits", "Nielsen Norman Group", "https://www.nngroup.com/articles/response-times-3-important-limits/"),
      ref("Progress Indicators", "Nielsen Norman Group", "https://www.nngroup.com/articles/progress-indicators/"),
    ],
  },
  {
    slug: "senhas-e-passkeys",
    title: "Senhas, passkeys e o fim do que você decorava",
    date: "23 jul 2026",
    category: "Segurança",
    seed: 15,
    excerpt: "A senha que a pessoa repete em vários sites é o elo fraco. A passkey troca esse segredo memorizado por uma chave que o dispositivo guarda.",
    caption: "O segredo deixa de ser uma frase decorada e passa a ser uma chave no dispositivo.",
    sections: [
      {
        heading: "O que a senha pede e não aguenta",
        paragraphs: [
          "Uma boa senha deveria ser longa, única e impossível de adivinhar. Uma pessoa com dezenas de serviços não sustenta isso de cabeça. O resultado conhecido é a repetição: o mesmo segredo em vários lugares. Um vazamento abre os outros.",
          "Gerenciador de senha já melhora esse quadro, porque a pessoa memoriza um acesso e o restante é aleatório. A passkey dá um passo além: não há um segredo compartilhado para vazar do servidor do mesmo jeito.",
        ],
      },
      {
        heading: "O que a passkey muda",
        paragraphs: [
          "No padrão da FIDO Alliance, o dispositivo guarda a chave privada e prova que a possui, em geral com biometria ou PIN local. O servidor guarda a chave pública. Phishing de página falsa fica mais difícil, porque a assinatura está presa à origem certa.",
          "Adoção ainda esbarra em conta compartilhada, aparelho trocado e serviço que não oferece o fluxo. Onde existe, é o caminho que tira a frase decorada do centro da segurança. Onde não existe, senha única guardada num gerenciador continua sendo o mínimo.",
        ],
      },
    ],
    references: [
      ref("Passkeys", "FIDO Alliance", "https://fidoalliance.org/passkeys/"),
      ref("Web Authentication", "W3C", "https://www.w3.org/TR/webauthn-2/"),
    ],
  },
  {
    slug: "custo-energetico-da-ia",
    title: "O custo energético da inteligência artificial",
    date: "20 jul 2026",
    category: "Curiosidades",
    seed: 16,
    excerpt: "Cada resposta tem um custo de eletricidade que a tela não mostra. O treino concentra gasto. O uso, repetido milhões de vezes, também pesa.",
    caption: "Treino num bloco, uso repetido no outro. Os dois consomem eletricidade fora da tela.",
    sections: [
      {
        heading: "Dois gastos diferentes",
        paragraphs: [
          "Treinar um modelo grande é um evento: muitas máquinas, por muitos dias. Responder uma pergunta é barato ao lado disso, e caro quando multiplicado por todo mundo que pergunta o dia inteiro. Tratar “a IA” como um único número de energia mistura as duas contas.",
          "A Agência Internacional de Energia acompanha a eletricidade dos data centers, onde esse uso se soma a busca, vídeo e o resto da nuvem. O relatório é o lugar para o número atualizado. Um artigo de blog que grava um terawatt-hora sem data envelhece no mês seguinte.",
        ],
      },
      {
        heading: "O que a escolha de produto muda",
        paragraphs: [
          "Modelo maior não é automaticamente melhor para a tarefa. Classificar um e-mail não pede o mesmo modelo que redige um parecer. Escolher o menor modelo que aguenta o caso reduz conta e energia juntas, sem discurso.",
          "Cache de resposta repetida, lote em vez de chamada solta, e não gerar texto quando uma regra fixa resolve, são cortes de engenharia. Eles não aparecem na demonstração. Aparecem na fatura e na tomada.",
        ],
      },
    ],
    references: [
      ref("Energy and AI", "Agência Internacional de Energia", "https://www.iea.org/reports/energy-and-ai"),
      ref("Electricity 2024", "Agência Internacional de Energia", "https://www.iea.org/reports/electricity-2024"),
    ],
  },
  {
    slug: "reconhecimento-de-documentos",
    title: "Reconhecimento de documentos: do OCR ao entendimento",
    date: "16 jul 2026",
    category: "Inteligência Artificial",
    seed: 17,
    excerpt: "Ler a letra do papel foi o primeiro passo. Saber que aquele número é um vencimento, e não um telefone, é outro.",
    caption: "Da esquerda, o caractere. Da direita, o campo: o mesmo tinta, outro sentido.",
    sections: [
      {
        heading: "OCR não entende o documento",
        paragraphs: [
          "O reconhecimento óptico de caracteres devolve texto: letras onde havia tinta. Ele não sabe se a linha é um endereço, um total ou uma observação. Um PDF nascido digital nem precisa de OCR. Um scan torto, com carimbo, precisa, e ainda erra.",
          "Tesseract e os motores clássicos resolveram a letra. O erro que sobra no escritório é de estrutura. O valor está na coluna errada. A data foi lida como código. O texto existe e o campo, não.",
        ],
      },
      {
        heading: "Do texto ao campo",
        paragraphs: [
          "Modelos de documento, como a linha LayoutLM, olham texto e posição juntos. A coordenação na página é parte do sentido: total costuma ficar embaixo, à direita, não porque a palavra “total” apareceu. Sem a posição, o modelo lê uma sopa.",
          "Mesmo assim, o campo extraído pede conferência quando o documento gera pagamento ou obrigação. A leitura automática reduz digitação. Ela não assina pelo conferente. O desenho honesto mostra o recorte do papel ao lado do campo preenchido, para a pessoa ver de onde saiu.",
        ],
      },
    ],
    references: [
      ref("Tesseract OCR", "Tesseract", "https://tesseract-ocr.github.io/"),
      ref("LayoutLMv3", "Huang e outros, arXiv", "https://arxiv.org/abs/2204.08387"),
    ],
  },
  {
    slug: "benchmarks-de-ia",
    title: "Benchmarks de IA: por que eles enganam",
    date: "13 jul 2026",
    category: "Inteligência Artificial",
    seed: 18,
    excerpt: "A tabela de ranking mede a prova, não o seu caso. Um modelo no topo pode falhar na tarefa que a empresa precisa repetir.",
    caption: "O ranking mede a prova. A tarefa da empresa é outra coluna, muitas vezes vazia.",
    sections: [
      {
        heading: "A prova não é o trabalho",
        paragraphs: [
          "Benchmark é um conjunto fixo de perguntas com jeito combinado de corrigir. Ele serve para comparar modelos na mesma prova. Não serve, sozinho, para dizer se o modelo classifica o seu boleto ou responde o seu cliente.",
          "Quando a prova vaza no treino, ou quando o modelo foi ajustado para ela, a nota sobe sem que a tarefa nova melhore. HELM, de Stanford, existe em parte para tornar a avaliação mais larga e menos uma nota única de marketing.",
        ],
      },
      {
        heading: "A avaliação que importa",
        paragraphs: [
          "Separe dezenas de casos reais, com a resposta que a operação aceita. Rode o modelo. Conte erro por tipo: fato trocado, campo faltando, tom errado, recusa indevida. Essa tabela, pequena e sua, decide melhor do que o ranking público.",
          "Troque o modelo e rode de novo os mesmos casos. Sem esse conjunto guardado, cada demonstração parece vitória, porque os exemplos foram escolhidos na hora.",
        ],
      },
    ],
    references: [
      ref("HELM", "Stanford CRFM", "https://crfm.stanford.edu/helm/"),
      ref("Hidden Technical Debt in Machine Learning Systems", "Sculley e outros, NeurIPS", "https://papers.nips.cc/paper/5656-hidden-technical-debt-in-machine-learning-systems"),
    ],
  },
  {
    slug: "fila-de-mensagens",
    title: "Fila de mensagens: o que separa sistema frágil de sistema resiliente",
    date: "06 jul 2026",
    category: "Dev & Tech",
    seed: 19,
    excerpt: "Se o passo seguinte está fora do ar, o pedido não precisa morrer junto. A fila segura o recado até o outro lado voltar.",
    caption: "O pedido espera na fila quando o serviço da frente para. Nada se perde no instante da queda.",
    sections: [
      {
        heading: "Chamada direta quebra em cadeia",
        paragraphs: [
          "Quando o site grava o pedido chamando o estoque, o pagamento e o e-mail na mesma hora, qualquer um desses três fora do ar derruba a compra. O cliente vê erro. O pedido fica no limbo, ou pior, fica pela metade.",
          "Uma fila guarda a mensagem e entrega quando o destinatário puder. O site confirma o que já é certo e segue. O resto acontece em seguida, com repetição se a primeira tentativa falhar. O padrão está descrito há anos em Enterprise Integration Patterns.",
        ],
      },
      {
        heading: "Fila não é mágica",
        paragraphs: [
          "Mensagem duplicada acontece. O consumidor precisa saber repetir sem efeito dobrado: o mesmo pedido não pode virar duas cobranças. Esse é o tema da idempotência, irmão desta fila.",
          "Fila sem dono vira cemitério. Alguém olha o que envelheceu, o que falhou três vezes e o que voltou para uma pessoa. RabbitMQ e os serviços parecidos documentam a fila. O processo de olhar o erro continua sendo da equipe.",
        ],
      },
    ],
    references: [
      ref("Message Queue", "Enterprise Integration Patterns", "https://www.enterpriseintegrationpatterns.com/patterns/messaging/MessageQueue.html"),
      ref("Queues", "RabbitMQ", "https://www.rabbitmq.com/docs/queues"),
    ],
  },
  {
    slug: "ajuste-por-instrucao",
    title: "O que é ajuste por instrução e por que ele criou o chat moderno",
    date: "02 jul 2026",
    category: "Inteligência Artificial",
    seed: 20,
    excerpt: "O modelo cru completa texto. O modelo ajustado por instrução trata a frase da pessoa como um pedido. Essa diferença é o chat.",
    caption: "À esquerda, o texto que continua. À direita, o texto que obedece a um pedido.",
    sections: [
      {
        heading: "Completar não é atender",
        paragraphs: [
          "Um modelo de linguagem, logo depois do treino, é bom em continuar um texto no estilo do que veio antes. Se você escreve o começo de uma notícia, ele escreve o meio. Se você escreve uma pergunta, ele pode escrever outra pergunta, porque é isso que muitos textos fazem.",
          "O ajuste por instrução, como em InstructGPT e depois em FLAN, mostra ao modelo exemplos de pedido e de resposta útil. O resultado passa a tratar a entrada como tarefa. O chat que as pessoas reconhecem nasce aí, não no transformador sozinho.",
        ],
      },
      {
        heading: "O que o ajuste não garante",
        paragraphs: [
          "Ele melhora o formato e a disposição de seguir o pedido. Não cria uma fonte para o fato. Um modelo educado ainda inventa uma citação com a mesma fluidez de um modelo bruto, só que com mais jeito de assistente.",
          "Por isso o produto sério junta o modelo ajustado com material de fora: documento da empresa, busca, ferramenta. A instrução diz como responder. A fonte diz o quê.",
        ],
      },
    ],
    references: [
      ref("Training language models to follow instructions", "Ouyang e outros, InstructGPT, arXiv", "https://arxiv.org/abs/2203.02155"),
      ref("Finetuned Language Models Are Zero-Shot Learners", "Wei e outros, FLAN, arXiv", "https://arxiv.org/abs/2109.01652"),
    ],
  },
  {
    slug: "modelo-aberto-e-modelo-livre",
    title: "A diferença entre modelo aberto e modelo livre",
    date: "29 jun 2026",
    category: "Inteligência Artificial",
    seed: 21,
    excerpt: "Peso publicado não é o mesmo que liberdade de usar, estudar, modificar e compartilhar. O nome “aberto” tem sido usado para as duas coisas.",
    caption: "Peso disponível de um lado. Licença que deixa usar e modificar do outro.",
    sections: [
      {
        heading: "O arquivo não é a licença",
        paragraphs: [
          "Há modelos cujos pesos qualquer pessoa pode baixar, e mesmo assim a licença proíbe uso comercial, ou exige que o derivado se comporte de um jeito. Há outros em que o peso nem está disponível: o acesso é uma API. Chamar os dois de “abertos” apaga a diferença que importa no contrato.",
          "A Open Source Initiative publicou uma definição de IA de código aberto para separar marketing de critério: uso, estudo, modificação e compartilhamento, sem truque que prenda o essencial.",
        ],
      },
      {
        heading: "O que a empresa precisa ler",
        paragraphs: [
          "Antes de embutir um modelo no produto, a pergunta é jurídica e prática. Posso atender cliente com isto? Posso ajustar e redistribuir? Os dados de treino são conhecidos o bastante para eu aceitar o risco? “Está no Hugging Face” não responde nenhuma das três.",
          "Modelo via API tem outra conta: o dado sai, o preço é por uso, e o comportamento muda quando o provedor atualiza o modelo. Aberto ou não, produção precisa de uma versão fixada e de um teste seu.",
        ],
      },
    ],
    references: [
      ref("Open Source AI Definition", "Open Source Initiative", "https://opensource.org/ai/open-source-ai-definition"),
      ref("The Open Source Definition", "Open Source Initiative", "https://opensource.org/osd"),
    ],
  },
  {
    slug: "planilhas",
    title: "Por que planilhas ainda dominam — e o que fazer com isso",
    date: "25 jun 2026",
    category: "Negócios",
    seed: 22,
    excerpt: "A planilha ganhou porque qualquer pessoa monta uma conta nela hoje à tarde. O problema começa quando essa conta vira o sistema da empresa.",
    caption: "A planilha serve ao rascunho. O sistema começa quando mais de uma pessoa vive dela.",
    sections: [
      {
        heading: "A ferramenta que não pede permissão",
        paragraphs: [
          "Planilha não espera projeto, fornecedor nem fila de TI. Alguém abre, nomeia colunas e no mesmo dia o comercial está usando. Essa velocidade explica a dominância melhor do que qualquer apego ao passado. Excel e os sucessores cabem na mesa de quem decide.",
          "O limite aparece com a segunda pessoa. Versões por e-mail, fórmula que só o autor entende, linha apagada sem rastro. O arquivo virou base de dados sem os cuidados de base de dados.",
        ],
      },
      {
        heading: "Sair sem humilhar o arquivo",
        paragraphs: [
          "O caminho não é proibir a planilha na segunda-feira. É escolher a conta que já doeu, colocar o registro num sistema com dono e histórico, e deixar a planilha para o que ela faz bem: conta avulsa, exploração, rascunho.",
          "Enquanto a migração não acaba, uma planilha com uma pessoa responsável, intervalo de atualização e proibição de cópia paralela já reduz o estrago. Várias verdades ao mesmo tempo são piores do que uma planilha só.",
        ],
      },
    ],
    references: [
      ref("Excel", "Microsoft", "https://www.microsoft.com/en-us/microsoft-365/excel"),
      ref("Toyota Production System", "Toyota", "https://global.toyota/en/company/vision-and-philosophy/production-system/"),
    ],
  },
  {
    slug: "chatbot-que-frustra",
    title: "Por que o seu chatbot frustra o cliente",
    date: "22 jun 2026",
    category: "Inteligência Artificial",
    seed: 23,
    excerpt: "O cliente não odeia conversar. Odeia repetir o problema para um robô que não resolve e não passa adiante.",
    caption: "A conversa gira. A saída para uma pessoa fica escondida.",
    sections: [
      {
        heading: "O laço sem saída",
        paragraphs: [
          "O desenho que frustra é estável: o bot pergunta de novo o que a pessoa já disse, oferece menu que não contém o caso, e esconde o caminho para um humano. O Nielsen Norman Group descreve chatbots que falham justamente quando prometem conversa e entregam formulário disfarçado.",
          "Modelo de linguagem não conserta esse desenho sozinho. Ele pode entender a frase melhor e ainda assim não ter permissão de resolver, nem de transferir com o histórico. A pessoa recomeça do zero com o atendente. A raiva é lógica.",
        ],
      },
      {
        heading: "O mínimo que a conversa deve",
        paragraphs: [
          "Dizer, no começo, o que o atendimento automático faz e o que não faz. Guardar o que já foi falado. Mostrar, sempre, como falar com uma pessoa, sem pedir três negativas antes. Se o bot não pode resolver, o sucesso dele é a passagem rápida, não a mensagem longa.",
          "Meça abandono e repetição, não só “conversas iniciadas”. Conversa iniciada que volta no telefone no minuto seguinte não foi atendimento. Foi obstáculo.",
        ],
      },
    ],
    references: [
      ref("The User Experience of Chatbots", "Nielsen Norman Group", "https://www.nngroup.com/articles/chatbots/"),
      ref("AI Risk Management Framework", "NIST", "https://www.nist.gov/itl/ai-risk-management-framework"),
    ],
  },
  {
    slug: "nuvem-ou-servidor-proprio",
    title: "Nuvem ou servidor próprio para IA: como decidir",
    date: "18 jun 2026",
    category: "Dev & Tech",
    seed: 24,
    excerpt: "A pergunta não é qual lado é moderno. É onde o dado pode ir, quanto a carga varia e quem vai cuidar da máquina às onze da noite.",
    caption: "Três perguntas no meio: dado, variação da carga e quem opera de noite.",
    sections: [
      {
        heading: "Três perguntas, não um lado",
        paragraphs: [
          "Nuvem, na definição do NIST, é um pool de recurso que se aluga, com elasticidade. Servidor próprio é máquina que a empresa compra e mantém. Nenhum dos dois é, por si, mais seguro ou mais barato. O desenho é que decide.",
          "Se o texto do cliente não pode sair do ambiente, a API pública de um modelo fica fora da mesa até existir um contrato e um caminho que a política aceite. Se a carga aparece em pico e some, manter GPU ociosa o mês inteiro é a conta que a nuvem foi feita para evitar.",
        ],
      },
      {
        heading: "Quem acorda quando cai",
        paragraphs: [
          "Servidor próprio pede gente que troca disco, atualiza sistema e olha temperatura. Sem essa gente, a “soberania” é um armário que ninguém sabe religar. Nuvem pede outra disciplina: conta, permissão, região e um olho na fatura quando um loop dispara chamada.",
          "Muitos casos misturam. Dado sensível fica no ambiente da empresa. O modelo genérico, quando o dado permite, roda fora. A decisão é por fluxo, não por bandeira.",
        ],
      },
    ],
    references: [
      ref("The NIST Definition of Cloud Computing", "NIST SP 800-145", "https://csrc.nist.gov/pubs/sp/800/145/final"),
      ref("Energy and AI", "Agência Internacional de Energia", "https://www.iea.org/reports/energy-and-ai"),
    ],
  },
  {
    slug: "webhooks",
    title: "Webhooks: a espinha dorsal invisível das integrações",
    date: "16 jun 2026",
    category: "Dev & Tech",
    seed: 25,
    excerpt: "Em vez de perguntar o tempo todo se algo mudou, o sistema avisa quando muda. Esse aviso é o webhook.",
    caption: "O evento sai na hora em que acontece. Ninguém fica perguntando de minuto em minuto.",
    sections: [
      {
        heading: "Perguntar o tempo todo cansa os dois lados",
        paragraphs: [
          "A integração ingênua fica consultando: “já pagou?”, “já pagou?”. A maior parte das respostas é não. Os dois sistemas gastam chamada para descobrir o óbvio.",
          "O webhook inverte. Quando o pagamento confirma, o sistema que sabe dispara um pedido HTTP para o endereço combinado. Quem espera recebe o fato, não uma pesquisa.",
        ],
      },
      {
        heading: "Aviso que pode se perder",
        paragraphs: [
          "Rede cai, o receptor está fora, o aviso chega duas vezes. Por isso o receptor confirma rápido, grava o identificador do evento e ignora a repetição. A documentação de webhooks do GitHub descreve esse contrato na prática: evento, entrega, repetição.",
          "Sem assinatura do remetente, qualquer um pode fingir o aviso. Verificar a origem faz parte do webhook, não é um extra de segurança para depois.",
        ],
      },
    ],
    references: [
      ref("Webhooks", "GitHub Docs", "https://docs.github.com/en/webhooks"),
      ref("Message Queue", "Enterprise Integration Patterns", "https://www.enterpriseintegrationpatterns.com/patterns/messaging/MessageQueue.html"),
    ],
  },
  {
    slug: "divida-tecnica",
    title: "Dívida técnica: a conta que sempre chega",
    date: "09 jun 2026",
    category: "Dev & Tech",
    seed: 26,
    excerpt: "Atalho de hoje vira juros de amanhã. A metáfora de Ward Cunningham continua válida: a dívida não é o problema, é não pagar.",
    caption: "O atalho entra como principal. Cada mudança depois paga juros em cima dele.",
    sections: [
      {
        heading: "A metáfora, sem romantizar",
        paragraphs: [
          "Ward Cunningham comparou código feito às pressas a uma dívida: você recebe o recurso agora e paga juros enquanto a solução ruim permanece. A metáfora não manda nunca atrasar. Manda enxergar o custo de carregar o atalho.",
          "Juros, no software, são cada mudança que leva mais tempo porque o caminho está torto. Tela que só uma pessoa mexe. Teste que ninguém roda. Nome que mente sobre o que a função faz.",
        ],
      },
      {
        heading: "Pagar é escolha, não vergonha",
        paragraphs: [
          "Nem todo atalho deve ser pago na mesma semana. Dívida consciente, com dono e com data para revisar, é diferente de entulho que ninguém admite. A conversa útil é: qual atalho está cobrando juros em toda entrega?",
          "IA acrescenta uma dívida específica. Prompt solto, modelo sem versão, avaliação que não existe. O artigo de Sculley sobre dívida em sistemas de aprendizado lista o entorno do modelo, não o modelo, como o peso maior.",
        ],
      },
    ],
    references: [
      ref("Ward Explains Debt Metaphor", "Cunningham & Cunningham", "https://wiki.c2.com/?WardExplainsDebtMetaphor"),
      ref("Hidden Technical Debt in Machine Learning Systems", "Sculley e outros, NeurIPS", "https://papers.nips.cc/paper/5656-hidden-technical-debt-in-machine-learning-systems"),
    ],
  },
  {
    slug: "edge-computing",
    title: "Edge computing: por que processar perto de quem usa",
    date: "02 jun 2026",
    category: "Dev & Tech",
    seed: 27,
    excerpt: "Levar todo dado até um data center distante custa tempo. Parte do trabalho pode acontecer perto de quem pediu.",
    caption: "O pedido para na borda, perto de quem usa, em vez de atravessar o caminho inteiro.",
    sections: [
      {
        heading: "Distância é tempo",
        paragraphs: [
          "Mesmo à velocidade da rede, ir e voltar de outro continente se sente. Para uma página, às vezes tanto faz. Para um controle, uma conferência na porta ou uma resposta que não pode esperar o round-trip, a distância vira o produto.",
          "Edge computing é processar perto da origem do pedido: na cidade, na loja, no aparelho. A Cloudflare resume o termo como levar o cálculo para a borda da rede, em vez de concentrar tudo num único centro.",
        ],
      },
      {
        heading: "O que não deve ir para a borda",
        paragraphs: [
          "Estado difícil de conciliar, segredo e modelo enorme continuam melhor num lugar controlado. A borda serve ao que é repetível, local e intolerante à espera. Empurrar tudo para lá só espalha o problema de atualização.",
          "A decisão é por latência e por dado. Se a resposta precisa do cadastro central, a borda não inventa esse cadastro. Ela pode autenticar, cachear o que é público e deixar o núcleo fazer o que só o núcleo sabe.",
        ],
      },
    ],
    references: [
      ref("What is edge computing?", "Cloudflare", "https://www.cloudflare.com/learning/serverless/glossary/what-is-edge-computing/"),
      ref("The NIST Definition of Cloud Computing", "NIST SP 800-145", "https://csrc.nist.gov/pubs/sp/800/145/final"),
    ],
  },
  {
    slug: "dados-sinteticos",
    title: "Dados sintéticos: quando inventar dado é boa prática",
    date: "26 mai 2026",
    category: "Inteligência Artificial",
    seed: 28,
    excerpt: "Inventar dado parece fraude. Em teste e em privacidade, um dado que imita a forma sem copiar a pessoa é o que permite trabalhar.",
    caption: "A forma estatística fica. A pessoa real não entra no conjunto.",
    sections: [
      {
        heading: "Para que serve um dado que não aconteceu",
        paragraphs: [
          "Teste de software precisa de pedido, pagamento e erro. Usar o pedido real do cliente nesse teste copia dado pessoal para um ambiente frouxo. Um dado sintético, gerado com a forma certa e sem pessoa real, deixa o teste rodar.",
          "Também serve quando o caso raro quase não aparece na história: fraude, falha, pico. O conjunto real é desequilibrado. Exemplos construídos, com critério, deixam o time ver se o sistema aguenta o caso antes de ele chegar.",
        ],
      },
      {
        heading: "O limite da invenção",
        paragraphs: [
          "Dado sintético herda o viés de quem o desenhou. Se a regra de geração esquece um tipo de cliente, o teste passa e a produção quebra nesse tipo. A Royal Society e a literatura de privacidade tratam o tema como técnica com condição, não como atalho gratuito.",
          "Sintético não substitui a avaliação com caso real anonimizado ou autorizado, quando o risco pede. Ele tira o dado pessoal do lugar errado. Não tira a obrigação de medir no lugar certo.",
        ],
      },
    ],
    references: [
      ref("Synthetic data: what, why and how?", "The Royal Society", "https://royalsociety.org/news-resources/projects/privacy-enhancing-technologies/"),
      ref("Lei nº 13.709, LGPD", "Planalto", "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm"),
    ],
  },
  {
    slug: "chain-of-thought",
    title: "Chain-of-thought: por que pensar em voz alta melhora a resposta",
    date: "19 mai 2026",
    category: "Inteligência Artificial",
    seed: 29,
    excerpt: "Pedir o raciocínio antes da resposta final muda o resultado em problema de vários passos. Não torna o passo verdadeiro.",
    caption: "Os passos aparecem antes da resposta. Cada passo ainda pode estar errado.",
    sections: [
      {
        heading: "O que o artigo mostrou",
        paragraphs: [
          "Wei e colegas mostraram que modelos grandes acertam mais contas e problemas de vários passos quando geram uma cadeia de raciocínio antes da resposta. O modelo usa os próprios passos intermediários como contexto para o passo seguinte.",
          "Na prática, “pense passo a passo” virou muleta de prompt. Funciona melhor onde o caminho é decomponível: conta, regra, checklist. Funciona mal como garantia de fato sobre o mundo.",
        ],
      },
      {
        heading: "Passo visível não é passo certo",
        paragraphs: [
          "Uma cadeia eloquente pode errar no segundo passo e seguir convicta até o fim. Quem lê o raciocínio confere a lógica. Quem só lê a frase final não vê onde quebrou. Por isso o produto que decide dinheiro ou saúde não deve tratar a cadeia como prova.",
          "Há também custo: mais tokens, mais tempo, e em alguns modelos o raciocínio nem é mostrado. Se a interface esconde os passos, o usuário não ganha a conferência. Ganha só a demora.",
        ],
      },
    ],
    references: [
      ref("Chain-of-Thought Prompting Elicits Reasoning", "Wei e outros, arXiv", "https://arxiv.org/abs/2201.11903"),
      ref("Attention Is All You Need", "Vaswani e outros, arXiv", "https://arxiv.org/abs/1706.03762"),
    ],
  },
  {
    slug: "idempotencia",
    title: "Idempotência: o detalhe de API que evita cobrar duas vezes",
    date: "12 mai 2026",
    category: "Dev & Tech",
    seed: 30,
    excerpt: "A rede não promete que o pedido chegou uma vez só. A API precisa reconhecer a repetição e não executar o efeito de novo.",
    caption: "O mesmo pedido, três vezes. Um efeito só, se a chave de idempotência for a mesma.",
    sections: [
      {
        heading: "O clique que viajou duas vezes",
        paragraphs: [
          "O cliente pagou, a tela girou, ele clicou de novo. Ou o servidor cobrou e a resposta se perdeu, e o cliente tentou outra vez. Sem um acordo, as duas tentativas viram duas cobranças.",
          "Idempotência, no uso de API, significa: a mesma operação, com a mesma chave, produz o mesmo efeito ainda que chegue de novo. A Stripe documenta o cabeçalho Idempotency-Key exatamente para isso.",
        ],
      },
      {
        heading: "Onde guardar a chave",
        paragraphs: [
          "A chave nasce com a intenção, antes do efeito. O servidor grava “esta chave já virou este resultado” e, na repetição, devolve o resultado guardado em vez de cobrar outra vez. A janela de memória dessa chave tem de cobrir o tempo em que a pessoa ainda pode repetir.",
          "GET já é, por convenção, idempotente: ler não muda o mundo. POST de pagamento não é, a menos que você o faça. O detalhe parece miúdo até a primeira cobrança duplicada.",
        ],
      },
    ],
    references: [
      ref("Idempotent requests", "Stripe", "https://docs.stripe.com/api/idempotent_requests"),
      ref("RFC 9110, HTTP Semantics", "IETF", "https://www.rfc-editor.org/rfc/rfc9110"),
    ],
  },
  {
    slug: "mito-do-funcionario-substituido",
    title: "O mito do funcionário substituído pela IA",
    date: "05 mai 2026",
    category: "Negócios",
    seed: 31,
    excerpt: "A frase “a IA substitui a pessoa” esconde o trabalho que continua: exceção, responsabilidade e o caso que não estava no exemplo.",
    caption: "A tarefa repetida muda de mão. A exceção e a responsabilidade ficam.",
    sections: [
      {
        heading: "Tarefa não é cargo",
        paragraphs: [
          "Um cargo é um maço de tarefas, mais julgamento, mais relação. Automatizar uma tarefa, classificar um e-mail, preencher um campo, muda o maço. Não apaga a pessoa que responde quando o caso sai do padrão.",
          "O mito serve a slide. Na operação, o que se vê é outro desenho: menos digitação, o mesmo volume de exceção, e uma necessidade nova de quem confere o que o sistema fez. Se essa pessoa não existe, o erro segue sozinho.",
        ],
      },
      {
        heading: "O desenho adulto",
        paragraphs: [
          "Liste a tarefa, não o cargo. Marque o que é repetição fiel e o que é julgamento. A repetição pode ir para regra ou modelo. O julgamento fica com quem assina. O NIST trata risco de IA como governança do sistema, o que inclui esse corte.",
          "Prometer redução de equipe antes de medir a exceção é o caminho do retrabalho. Primeiro o fluxo fica estável. Depois se vê qual hora realmente sobrou.",
        ],
      },
    ],
    references: [
      ref("AI Risk Management Framework", "NIST", "https://www.nist.gov/itl/ai-risk-management-framework"),
      ref("Hidden Technical Debt in Machine Learning Systems", "Sculley e outros, NeurIPS", "https://papers.nips.cc/paper/5656-hidden-technical-debt-in-machine-learning-systems"),
    ],
  },
  {
    slug: "quantizacao",
    title: "Quantização: como rodar modelo grande em máquina pequena",
    date: "28 abr 2026",
    category: "Dev & Tech",
    seed: 32,
    excerpt: "Guardar cada número do modelo com menos precisão encolhe a memória. A resposta muda pouco ou muda demais, e isso se mede.",
    caption: "O mesmo modelo, com números mais curtos, cabe numa máquina menor.",
    sections: [
      {
        heading: "Precisão contra memória",
        paragraphs: [
          "Os pesos de um modelo são números. Guardá-los em 16 ou 32 bits come memória e banda. Quantizar é representá-los com menos bits, 8 ou 4, para o modelo caber e responder onde antes não cabia.",
          "GPTQ é um dos métodos publicados para fazer isso em modelo grande depois do treino, com menos dano do que arredondar no escuro. O artigo está no arXiv. O nome virou ferramenta. A ideia continua sendo a troca entre tamanho e fidelidade.",
        ],
      },
      {
        heading: "Medir o dano",
        paragraphs: [
          "Modelo menor de memória não é modelo igual. Em tarefa fácil a diferença some. Em conta, em nome próprio e em formato rígido, ela aparece. O conjunto de casos da empresa, rodado antes e depois, diz se a quantização serviu.",
          "Há também quantização no treino e no uso. Misturar os termos na compra de servidor leva a máquina errada. A pergunta prática é: qual modelo, em qual precisão, aguenta esta tarefa nesta máquina.",
        ],
      },
    ],
    references: [
      ref("GPTQ: Accurate Post-Training Quantization", "Frantar e outros, arXiv", "https://arxiv.org/abs/2210.17323"),
      ref("CUDA Zone", "NVIDIA", "https://developer.nvidia.com/cuda-zone"),
    ],
  },
  {
    slug: "deepfakes",
    title: "Deepfakes: o problema não é a tecnologia, é a verificação",
    date: "21 abr 2026",
    category: "Segurança",
    seed: 33,
    excerpt: "Imagem e voz convincentes já não provam que a pessoa disse aquilo. A prova tem de vir de outro lugar: origem, contexto e registro.",
    caption: "A mídia chega convincente. A verificação olha a origem, não só o rosto.",
    sections: [
      {
        heading: "Ver não é verificar",
        paragraphs: [
          "Uma imagem nítida e uma voz parecida bastavam, no costume, como indício. Ferramentas de síntese tornaram esse costume frágil. O problema operacional não é “existe um gerador”. É que o receptor continua tratando a mídia como prova.",
          "NIST mantém trabalho de forense de mídia justamente porque detectar o falso depois, só olhando o pixel, é corrida. O caminho mais estável é a proveniência: quem capturou, com qual ferramenta, e se o arquivo foi alterado.",
        ],
      },
      {
        heading: "Origem em vez de palpite",
        paragraphs: [
          "A C2PA especifica como um conteúdo carrega a própria história: captura, edição, assinatura. Não impede a mentira. Permite perguntar se a história está assinada e por quem. Sem isso, o julgamento volta ao olho, que já não basta.",
          "Na empresa, o hábito muda em dois pontos. Não autorizar pagamento ou acesso só com um áudio. E não publicar material sensível sem saber a origem do arquivo. A verificação é processo, não um botão de “é falso?”.",
        ],
      },
    ],
    references: [
      ref("Content Credentials", "C2PA", "https://c2pa.org/"),
      ref("Media Forensics", "NIST", "https://www.nist.gov/programs-projects/media-forensics"),
    ],
  },
  {
    slug: "glossario-de-dados",
    title: "Por que toda empresa deveria ter um glossário de dados",
    date: "14 abr 2026",
    category: "Negócios",
    seed: 34,
    excerpt: "“Cliente ativo” significa três coisas em três relatórios. Enquanto a palavra não tem uma definição, a discussão de número é discussão de vocabulário.",
    caption: "A mesma palavra, três definições. O glossário escolhe uma e mostra de onde o número sai.",
    sections: [
      {
        heading: "O número briga porque a palavra briga",
        paragraphs: [
          "Financeiro conta cliente ativo como quem pagou no mês. Comercial conta como quem recebeu proposta. O painel mostra os dois sem dizer. A reunião discute a meta e, no fundo, discute o dicionário.",
          "Um glossário é a frase que acaba com isso: o termo, a definição, a fonte do dado e o dono. Uma página basta para os vinte termos que aparecem em decisão. Não precisa nascer como plataforma.",
        ],
      },
      {
        heading: "IA repete a confusão",
        paragraphs: [
          "Se o modelo resume “clientes ativos” a partir de textos que usam a expressão de jeitos diferentes, o resumo herda a briga. O glossário, colocado no contexto da pergunta, é uma das poucas formas de o sistema saber qual definição vale.",
          "Sem dono, o glossário vira mais um arquivo. Alguém precisa poder dizer “esta definição mudou” e avisar quem usa o número. Termo sem dono é sinônimo à solta.",
        ],
      },
    ],
    references: [
      ref("Toyota Production System", "Toyota", "https://global.toyota/en/company/vision-and-philosophy/production-system/"),
      ref("How to Measure Anything", "Douglas Hubbard", "https://www.howtomeasureanything.com/"),
    ],
  },
  {
    slug: "multimodal",
    title: "Multimodal: quando a IA passa a ver e ouvir",
    date: "07 abr 2026",
    category: "Inteligência Artificial",
    seed: 35,
    excerpt: "O modelo deixa de ler só texto. Foto, tela e áudio entram no mesmo pedido. A capacidade nova pede o mesmo cuidado com fonte e permissão.",
    caption: "Texto, imagem e áudio chegam ao mesmo pedido. A resposta continua sendo uma estimativa.",
    sections: [
      {
        heading: "Mais de um tipo de entrada",
        paragraphs: [
          "Multimodal, aqui, quer dizer que o modelo aceita mais de uma modalidade: texto e imagem, às vezes áudio. O relatório técnico do GPT-4 descreve um modelo que recebe imagem além de texto. A pessoa mostra a tela em vez de descrever a tela.",
          "Isso muda o produto. Um documento fotografado, um defeito no balcão, um gráfico. O modelo comenta o que vê. O comentário continua sendo continuação provável, agora condicionada aos pixels, não uma perícia.",
        ],
      },
      {
        heading: "Ver não dispensa a fonte",
        paragraphs: [
          "Imagem corta, comprime e omite. O modelo pode ler um dígito vizinho ou ignorar um carimbo. Para pagamento e contrato, a leitura visual pede o recorte ao lado do campo, como no reconhecimento de documento.",
          "Áudio e imagem de pessoa são dado sensível. Enviar a foto do cliente a um provedor é uma decisão de privacidade, não um detalhe da interface. O desenho diz o que pode sair e o que fica.",
        ],
      },
    ],
    references: [
      ref("GPT-4 Technical Report", "OpenAI, arXiv", "https://arxiv.org/abs/2303.08774"),
      ref("LayoutLMv3", "Huang e outros, arXiv", "https://arxiv.org/abs/2204.08387"),
    ],
  },
  {
    slug: "observabilidade-de-ia",
    title: 'Observabilidade de IA: o que medir quando nada "quebra"',
    date: "31 mar 2026",
    category: "Dev & Tech",
    seed: 36,
    excerpt: "O serviço responde 200 e mesmo assim a resposta piorou. Observar IA é medir qualidade, não só se o processo está de pé.",
    caption: "O status diz no ar. A qualidade da resposta é outra curva, e ela pode cair com o status verde.",
    sections: [
      {
        heading: "Verde não é certo",
        paragraphs: [
          "Observabilidade clássica olha latência, erro e saturação. Um modelo pode estar rápido, sem erro HTTP, e ter passado a inventar campo. O painel fica verde. O cliente recebe dado ruim.",
          "OpenTelemetry dá o vocabulário para traço, métrica e log atravessarem serviços. No trecho de IA, o traço útil inclui qual modelo, qual versão do prompt, quanto token e se uma ferramenta foi chamada. Sem isso, “piorou ontem” não tem onde olhar.",
        ],
      },
      {
        heading: "Uma amostra, não o texto inteiro",
        paragraphs: [
          "Guardar todo prompt pode violar a privacidade que o desenho prometeu. Amostrar, redigir o que identifica e guardar o julgamento (serviu, não serviu, formato inválido) basta para ver tendência. O texto completo fica só quando há incidente e base para isso.",
          "O alarme bom dispara quando a taxa de recusa, de formato inválido ou de correção humana muda, não quando alguém acha que “a IA anda estranha”. Estanha sem número não entra na fila de quem opera.",
        ],
      },
    ],
    references: [
      ref("OpenTelemetry", "OpenTelemetry", "https://opentelemetry.io/docs/"),
      ref("AI Risk Management Framework", "NIST", "https://www.nist.gov/itl/ai-risk-management-framework"),
    ],
  },
  {
    slug: "automacao-e-inteligencia",
    title: "A diferença entre automação e inteligência",
    date: "24 mar 2026",
    category: "Automação",
    seed: 37,
    excerpt: "Automação repete uma regra que você escreveu. Inteligência estima uma resposta que você não escreveu linha a linha. Os dois se encontram, e não são a mesma compra.",
    caption: "A regra é um trilho. A estimativa é uma faixa. O produto mistura os dois com um limite no meio.",
    sections: [
      {
        heading: "Regra e estimativa",
        paragraphs: [
          "Automatizar é fazer o sistema seguir um caminho fechado: se isto, então aquilo. O resultado é previsível. Quando o caso foge, a regra para ou erra do jeito que foi escrita.",
          "Um modelo estima. Dois pedidos parecidos podem sair diferentes. Isso serve quando o mundo não cabe numa regra, classificar texto livre, por exemplo. Não serve quando o efeito precisa ser o mesmo toda vez, como uma alíquota.",
        ],
      },
      {
        heading: "Onde cada um entra",
        paragraphs: [
          "O desenho estável usa regra no que é norma e modelo no que é leitura. O modelo sugere a categoria. A regra decide se aquela categoria pode seguir sozinha. Chamar os dois de “IA” na proposta esconde qual parte você consegue explicar amanhã.",
          "Se a tarefa cabe numa regra, a regra é mais barata de auditar. O modelo entra quando a regra já ficou uma floresta de exceção que ninguém mantém. Não antes, por moda.",
        ],
      },
    ],
    references: [
      ref("Hidden Technical Debt in Machine Learning Systems", "Sculley e outros, NeurIPS", "https://papers.nips.cc/paper/5656-hidden-technical-debt-in-machine-learning-systems"),
      ref("AI Risk Management Framework", "NIST", "https://www.nist.gov/itl/ai-risk-management-framework"),
    ],
  },
  {
    slug: "destilacao",
    title: "Destilação: como modelos pequenos ficaram tão bons",
    date: "17 mar 2026",
    category: "Inteligência Artificial",
    seed: 38,
    excerpt: "Um modelo grande ensina um menor a imitar as suas respostas. O menor fica mais barato de rodar e não herda, de graça, o mesmo teto.",
    caption: "O modelo grande ensina a distribuição. O menor aprende a imitar, num corpo que cabe em produção.",
    sections: [
      {
        heading: "Ensinar a distribuição, não só o rótulo",
        paragraphs: [
          "Hinton, Vinyals e Dean descreveram a destilação em 2015: o modelo aluno treina com as probabilidades do professor, não só com a classe certa. O “como o professor hesitou” carrega informação que o rótulo seco joga fora.",
          "No uso atual, a ideia reaparece quando um modelo grande gera respostas e um menor é ajustado para imitá-las numa tarefa. O menor responde mais barato. A conta fecha se a tarefa cabe no que o aluno aprendeu.",
        ],
      },
      {
        heading: "O aluno não vira o professor",
        paragraphs: [
          "Fora da tarefa destilada, o menor perde. Quem troca de modelo em produção por causa do preço precisa rodar o conjunto de casos de novo, não confiar no nome da técnica.",
          "Destilar também copia o erro sistemático do professor. Se o grande inventa citação, o pequeno pode aprender a inventar com a mesma cara, só que mais rápido. A avaliação é o freio.",
        ],
      },
    ],
    references: [
      ref("Distilling the Knowledge in a Neural Network", "Hinton, Vinyals e Dean, arXiv", "https://arxiv.org/abs/1503.02531"),
      ref("GPTQ: Accurate Post-Training Quantization", "Frantar e outros, arXiv", "https://arxiv.org/abs/2210.17323"),
    ],
  },
  {
    slug: "prompt-injection",
    title: "Prompt injection: a vulnerabilidade que nasce com a IA",
    date: "10 mar 2026",
    category: "Segurança",
    seed: 39,
    excerpt: "Se o modelo lê texto de fora como se fosse instrução, quem escreveu esse texto manda no sistema. A defesa é separar dado de ordem e limitar a ação.",
    caption: "O texto de fora entra como dado. A instrução do sistema fica noutro trilho. A ação passa por um limite.",
    sections: [
      {
        heading: "O que é, sem receita",
        paragraphs: [
          "O modelo não tem, por natureza, uma cerca entre “isto é ordem do dono do sistema” e “isto é texto que chegou de um e-mail, de uma página ou de um cliente”. Se os dois vão no mesmo pedido, o texto de fora pode ser interpretado como ordem.",
          "O efeito importa mais do que o truque. Se o modelo pode chamar ferramenta, a ordem indevida vira ação: ler dado a mais, enviar mensagem, mudar registro. A OWASP lista esse risco entre os principais de aplicação com modelo de linguagem.",
        ],
      },
      {
        heading: "O que reduz o dano",
        paragraphs: [
          "Tratar conteúdo externo como dado, não como instrução. Não dar ao modelo ferramenta além da tarefa. Exigir confirmação humana para efeito irreversível. Conferir no código, não no prompt, se a ação pedida está na lista permitida.",
          "Filtro de frase no texto é frágil: muda o jeito de escrever e o filtro perde. A trava que segura é a permissão da ferramenta. Prompt educado não é controle de acesso.",
        ],
      },
    ],
    references: [
      ref("OWASP Top 10 for LLM Applications", "OWASP", "https://genai.owasp.org/"),
      ref("AI Risk Management Framework", "NIST", "https://www.nist.gov/itl/ai-risk-management-framework"),
    ],
  },
  {
    slug: "ia-em-producao",
    title: "Quanto custa de verdade colocar IA em produção",
    date: "03 mar 2026",
    category: "Negócios",
    seed: 40,
    excerpt: "A demonstração gasta uma tarde. Produção gasta modelo, gente, dado, avaliação e o plantão de quando a resposta vem errada.",
    caption: "Cinco contas, não uma: modelo, pessoas, dados, avaliação e o plantão do erro.",
    sections: [
      {
        heading: "A fatura que a demo não mostra",
        paragraphs: [
          "Há o custo de chamar o modelo, por token ou por máquina. Há o custo de quem especifica o caso, revisa a saída e mantém o prompt versionado. Há o custo de preparar dado e de não mandar para fora o que não deve sair.",
          "Nenhum desses itens tem um preço único para publicar aqui: depende do volume, do modelo e de quem opera. Tratar “IA” como uma licença mensal esconde a folha e o plantão.",
        ],
      },
      {
        heading: "O plantão é parte do preço",
        paragraphs: [
          "Quando a resposta errada chega ao cliente, alguém corrige, avisa e decide se o fluxo para. Se esse alguém não está no orçamento, o custo aparece como incidente. Sculley e colegas já apontavam que a maior parte do sistema de aprendizado não é o modelo.",
          "Um piloto com volume real, prazo e critério de desligar mostra a conta antes do contrato longo. Sem critério de desligar, o piloto vira produção por inércia.",
        ],
      },
    ],
    references: [
      ref("Hidden Technical Debt in Machine Learning Systems", "Sculley e outros, NeurIPS", "https://papers.nips.cc/paper/5656-hidden-technical-debt-in-machine-learning-systems"),
      ref("Energy and AI", "Agência Internacional de Energia", "https://www.iea.org/reports/energy-and-ai"),
    ],
  },
  {
    slug: "embeddings",
    title: "Embeddings: a tecnologia invisível por trás da busca moderna",
    date: "24 fev 2026",
    category: "Inteligência Artificial",
    seed: 41,
    excerpt: "A busca que entende “carro” quando você escreveu “automóvel” não procura a palavra. Procura um ponto próximo num espaço de significado.",
    caption: "Textos viram pontos. Os que tratam do mesmo assunto ficam perto, mesmo com outras palavras.",
    sections: [
      {
        heading: "Do texto ao ponto",
        paragraphs: [
          "Um embedding é uma lista de números que representa um pedaço de texto, ou uma imagem. Textos de sentido próximo ficam com listas próximas. A busca moderna compara esses pontos em vez de exigir a palavra exata.",
          "A ideia tem história longa. Word2vec mostrou que vizinhança de palavra carrega relação. Sentence-BERT levou a comparação para a frase inteira, do jeito que os buscadores semânticos usam hoje.",
        ],
      },
      {
        heading: "Perto não é verdadeiro",
        paragraphs: [
          "O vizinho mais próximo pode ser um texto parecido e factualmente inútil, ou desatualizado. Embedding acha semelhança. Quem responde pelo fato continua sendo a fonte que você indexou e a data dela.",
          "Trocar o modelo de embedding muda o mapa. O índice antigo não combina com o vetor novo. Reindexar faz parte da troca, senão a busca “inteligente” volta vazia ou torta.",
        ],
      },
    ],
    references: [
      ref("Efficient Estimation of Word Representations in Vector Space", "Mikolov e outros, arXiv", "https://arxiv.org/abs/1301.3781"),
      ref("Sentence-BERT", "Reimers e Gurevych, arXiv", "https://arxiv.org/abs/1908.10084"),
    ],
  },
  {
    slug: "lgpd-e-ia-generativa",
    title: "O que a LGPD exige de quem usa IA generativa",
    date: "17 fev 2026",
    category: "Segurança",
    seed: 42,
    excerpt: "A lei não cita o nome do modelo. Ela cita dado pessoal, finalidade e quem decide. Isso basta para alcançar o prompt, o log e o provedor.",
    caption: "O dado pessoal atravessa prompt, log e provedor. A lei olha o percurso, não a marca do modelo.",
    sections: [
      {
        heading: "O que a lei já cobre",
        paragraphs: [
          "A Lei 13.709 trata de dado pessoal: informação que identifica ou torna identificável uma pessoa. Nome, contato, voz, documento e texto que revele isso entram. Não importa se o tratamento usa planilha ou modelo generativo.",
          "Quem decide a finalidade e os meios é o controlador. Mandar o texto do cliente a um provedor de modelo é tratamento, muitas vezes com um operador no meio. Finalidade, base legal, transparência e segurança não ficam de fora porque a ferramenta é nova. Isto não substitui a leitura da lei nem um parecer.",
        ],
      },
      {
        heading: "Perguntas que o uso de IA não escapa",
        paragraphs: [
          "O dado precisa ir no prompt? Por quanto tempo o log guarda a pergunta? O contrato com o provedor diz o que ele pode fazer com aquilo? A pessoa consegue saber que uma decisão automatizada a afetou, quando a lei exige revisão?",
          "A Autoridade Nacional de Proteção de Dados é o órgão de referência para acompanhar orientação. O texto da lei, no Planalto, é a fonte. Blog nenhum, inclusive este, cumpre a obrigação no lugar da empresa.",
        ],
      },
    ],
    references: [
      ref("Lei nº 13.709, LGPD", "Planalto", "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm"),
      ref("Autoridade Nacional de Proteção de Dados", "Governo Federal", "https://www.gov.br/anpd/pt-br"),
    ],
  },
  {
    slug: "automatizar-antes-de-organizar",
    title: "Automatizar antes de organizar é multiplicar o caos",
    date: "10 fev 2026",
    category: "Automação",
    seed: 43,
    excerpt: "Se cada pessoa faz o pedido de um jeito, o robô aprende todos os jeitos e erra mais rápido. Organizar o caminho vem antes de acelerá-lo.",
    caption: "Três caminhos para o mesmo pedido. Automatizar os três multiplica o desencontro.",
    sections: [
      {
        heading: "Velocidade do erro",
        paragraphs: [
          "Automação repete. Se o caminho tem três versões, conforme quem atendeu, o sistema ou congela perguntando qual vale, ou escolhe uma e espalha. Nos dois casos, o caos que cabia numa mesa passa a caber na base inteira.",
          "As perdas que a produção enxuta nomeia, espera, retrabalho, excesso de processo, ficam mais baratas de ver no papel do que no robô. Um fluxo desenhado, com um jeito só de registrar o pedido, é o pré-requisito.",
        ],
      },
      {
        heading: "A ordem que funciona",
        paragraphs: [
          "Escolha um tipo de pedido. Escreva os passos que toda vez acontecem e os que são exceção. Tire a cópia duplicada. Só então automatize o trecho estável. A exceção continua com uma pessoa, de propósito.",
          "Ferramenta comprada para “organizar sozinha” em cima do caos vira mais uma versão do caminho. Organização é decisão de como o trabalho anda. Software registra essa decisão. Não a inventa.",
        ],
      },
    ],
    references: [
      ref("Toyota Production System", "Toyota", "https://global.toyota/en/company/vision-and-philosophy/production-system/"),
      ref("Strangler Fig Application", "Martin Fowler", "https://martinfowler.com/bliki/StranglerFigApplication.html"),
    ],
  },
  {
    slug: "temperatura-e-top-p",
    title: "Temperatura, top-p e o mito da criatividade da IA",
    date: "03 fev 2026",
    category: "Inteligência Artificial",
    seed: 44,
    excerpt: "Temperatura não liga um modo artista. Ela mexe na chance de sair a continuação menos óbvia. Criatividade, no sentido humano, é outro assunto.",
    caption: "Temperatura baixa concentra a escolha. Temperatura alta abre o leque. Nenhuma das duas confere o fato.",
    sections: [
      {
        heading: "O que o parâmetro faz",
        paragraphs: [
          "Na hora de escolher o próximo token, o modelo tem uma distribuição de chances. Temperatura achata ou afunila essa distribuição. Baixa, a escolha cola no mais provável. Alta, opções menos prováveis entram com mais frequência.",
          "Top-p corta a cauda: só entra na sorteio o conjunto de tokens cuja probabilidade acumulada cabe num limite. Os dois knobs mudam variedade. A referência de API do provedor descreve o parâmetro. Não descreve inspiração.",
        ],
      },
      {
        heading: "Variedade não é ideia",
        paragraphs: [
          "Texto mais variado pode ser mais interessante de ler e mais difícil de testar. Para extrair um campo, temperatura baixa reduz surpresa. Para um rascunho de nome de campanha, um pouco de variedade ajuda, e uma pessoa escolhe.",
          "Chamar isso de criatividade empresta uma palavra humana a um sorteio. O modelo não quer dizer algo novo. Ele amostra uma continuação. O mito atrapalha quando a equipe sobe a temperatura para “ter ideias” e recebe frase imprevisível no lugar de opção utilizável.",
        ],
      },
    ],
    references: [
      ref("Create chat completion", "OpenAI API Reference", "https://platform.openai.com/docs/api-reference/chat/create"),
      ref("Attention Is All You Need", "Vaswani e outros, arXiv", "https://arxiv.org/abs/1706.03762"),
    ],
  },
  {
    slug: "gpu-e-cpu",
    title: "Por que GPU, e não CPU, move a IA",
    date: "27 jan 2026",
    category: "Dev & Tech",
    seed: 45,
    excerpt: "A CPU é rápida numa tarefa complicada de cada vez. A conta do modelo é uma multidão de multiplicações simples, e é isso que a GPU faz em paralelo.",
    caption: "Poucas tarefas longas de um lado. Uma multidão de contas iguais, ao mesmo tempo, do outro.",
    sections: [
      {
        heading: "O formato da conta",
        paragraphs: [
          "Inferência e treino de rede neural são, em grande parte, multiplicação de matrizes. A mesma operação, em muitos números, ao mesmo tempo. A CPU foi desenhada para fluxo complicado, com poucas linhas de execução muito capazes.",
          "A GPU nasceu para desenhar pixel, que também é a mesma conta em muitos pontos. CUDA, da NVIDIA, abriu esse hardware para a conta geral. O modelo de linguagem cabe nesse formato, e por isso a fila de GPU virou o gargalo físico da área.",
        ],
      },
      {
        heading: "GPU não é obrigatória em tudo",
        paragraphs: [
          "Modelo pequeno, quantizado, ou uma regra que nem é rede, roda em CPU sem drama. Comprar GPU para classificar duzentos e-mails por dia é teatro. O critério é o tamanho do modelo e quantas respostas simultâneas você promete.",
          "Na nuvem, a GPU aparece como fila e como preço. No servidor próprio, aparece como placa, energia e quem troca quando queima. A escolha volta ao artigo de nuvem ou máquina própria: dado, volume e quem opera.",
        ],
      },
    ],
    references: [
      ref("CUDA Zone", "NVIDIA", "https://developer.nvidia.com/cuda-zone"),
      ref("Energy and AI", "Agência Internacional de Energia", "https://www.iea.org/reports/energy-and-ai"),
    ],
  },
  {
    slug: "agentes-de-ia",
    title: "Agentes de IA: o que muda quando o modelo executa ações",
    date: "20 jan 2026",
    category: "Inteligência Artificial",
    seed: 46,
    excerpt: "Enquanto o modelo só escreve, o estrago cabe num parágrafo. Quando ele chama ferramenta, o estrago cabe no sistema. Agente é esse segundo caso.",
    caption: "O modelo deixa de só responder e passa a pedir ações. Cada ação tem uma trava.",
    sections: [
      {
        heading: "De texto para efeito",
        paragraphs: [
          "Um chat devolve frase. Um agente, no uso corrente, observa, decide um próximo passo e usa uma ferramenta: buscar, gravar, enviar, calcular. O artigo ReAct descreve esse intercalado de raciocínio e ação.",
          "A mudança que importa para quem opera não é o vocabulário. É que a saída deixa de ser só leitura. Passa a ser efeito. Efeito pede permissão, registro e um jeito de desfazer.",
        ],
      },
      {
        heading: "O que tem de existir antes",
        paragraphs: [
          "Lista curta de ferramentas. Argumento validado por código, não pela prosa do modelo. Confirmação humana quando o efeito custa dinheiro, dado ou reputação. Log do que foi chamado. Sem esses quatro, “agente” é um chat com a chave do sistema na mão.",
          "MCP e guardrail entram aqui como peças, não como enfeite. Um padroniza o plugue. O outro limita o que pode atravessar o plugue. O modelo continua sendo a peça que sugere, não a que autoriza.",
        ],
      },
    ],
    references: [
      ref("ReAct: Synergizing Reasoning and Acting", "Yao e outros, arXiv", "https://arxiv.org/abs/2210.03629"),
      ref("Model Context Protocol", "MCP", "https://modelcontextprotocol.io/"),
      ref("OWASP Top 10 for LLM Applications", "OWASP", "https://genai.owasp.org/"),
    ],
  },
  {
    slug: "janela-de-contexto",
    title: "O que é janela de contexto e por que ela limita seu produto",
    date: "14 jan 2026",
    category: "Inteligência Artificial",
    seed: 47,
    excerpt: "O modelo só vê o que coube na janela desta chamada. O que ficou de fora não é esquecido: nunca entrou.",
    caption: "A janela cabe um trecho. O restante do acervo fica do lado de fora desta chamada.",
    sections: [
      {
        heading: "O que cabe numa chamada",
        paragraphs: [
          "Contexto é o texto, em tokens, que o modelo recebe de uma vez: instrução, histórico, documentos colados e a pergunta. A arquitetura do transformador, no artigo Attention Is All You Need, calcula relações dentro dessa sequência. Fora dela, não há o que relacionar.",
          "Janela maior permite colar mais material. Também custa mais, demora mais e não garante que o modelo use o trecho do meio. “Cabe 200 páginas” não significa “leu as 200 com o mesmo cuidado”.",
        ],
      },
      {
        heading: "O produto em volta da janela",
        paragraphs: [
          "Se o acervo é maior que a janela, alguém escolhe o trecho. Essa escolha é busca, recorte, resumo. RAG é um jeito de fazer a escolha. Colar o banco inteiro não é estratégia: é estourar o limite ou pagar para ignorar metade.",
          "Histórico de chat também come a janela. Conversa longa sem resumo empurra a instrução inicial para fora. O sistema que parece “esquecer a regra” muitas vezes só ficou sem espaço para ela.",
        ],
      },
    ],
    references: [
      ref("Attention Is All You Need", "Vaswani e outros, arXiv", "https://arxiv.org/abs/1706.03762"),
      ref("Retrieval-Augmented Generation", "Lewis e outros, arXiv", "https://arxiv.org/abs/2005.11401"),
    ],
  },
  {
    slug: "rag",
    title: "RAG explicado: quando vale mais do que fine-tuning",
    date: "08 jan 2026",
    category: "Inteligência Artificial",
    seed: 48,
    excerpt: "RAG busca um trecho seu e coloca na pergunta. Fine-tuning muda o modelo. Para fato que muda e precisa de fonte, a busca costuma ser o primeiro caminho.",
    caption: "A pergunta puxa um trecho do acervo. O modelo responde com esse trecho à vista, não com a memória do treino.",
    sections: [
      {
        heading: "Buscar antes de gerar",
        paragraphs: [
          "Retrieval-Augmented Generation, no trabalho de Lewis e colegas, junta um recuperador de documentos a um gerador. A resposta sai condicionada aos trechos achados, não só ao que ficou no peso do modelo.",
          "Na empresa, isso significa: o manual, o contrato, a política, indexados. A pergunta recupera o pedaço relevante. O modelo redige com esse pedaço no contexto. Dá para mostrar a fonte. Dá para atualizar o acervo sem treinar de novo.",
        ],
      },
      {
        heading: "Quando o ajuste do modelo entra",
        paragraphs: [
          "Fine-tuning muda o comportamento: tom, formato, um jargão estável. Ele é pesado de repetir cada vez que o fato muda, e ruim de citar de onde saiu a frase. Se o problema é “o número de ontem”, RAG ou uma ferramenta batem o ajuste.",
          "RAG frágil é busca ruim. Trecho errado, índice velho, embedding trocado sem reindexar. O modelo escreve bem em cima da fonte errada. A avaliação olha se o trecho certo foi achado, não só se a frase ficou bonita.",
        ],
      },
    ],
    references: [
      ref("Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks", "Lewis e outros, arXiv", "https://arxiv.org/abs/2005.11401"),
      ref("Sentence-BERT", "Reimers e Gurevych, arXiv", "https://arxiv.org/abs/1908.10084"),
    ],
  },
  {
    slug: "como-um-llm-funciona",
    title: "Como um LLM realmente funciona por trás do chat",
    date: "02 jan 2026",
    category: "Inteligência Artificial",
    seed: 49,
    excerpt: "Por trás da caixa de mensagem há uma sequência de escolhas: o texto vira token, a rede calcula o próximo, e isso se repete até a resposta acabar.",
    caption: "Texto vira token. A rede aponta o próximo. O ciclo repete até a resposta fechar.",
    sections: [
      {
        heading: "Do texto ao token",
        paragraphs: [
          "O modelo não lê “palavras” como o dicionário. Um tokenizador corta o texto em pedaços, às vezes uma palavra, às vezes uma sílaba, às vezes um sinal. A conta de custo e a janela de contexto contam esses pedaços, não as linhas que você vê.",
          "Cada pedaço vira vetor. A rede, do tipo transformador, mistura esses vetores com atenção: cada posição olha as outras para compor o contexto. O artigo de 2017, Attention Is All You Need, é a origem dessa arquitetura que os chats de hoje ainda usam por baixo.",
        ],
      },
      {
        heading: "Uma escolha, e de novo",
        paragraphs: [
          "Na saída, o modelo produz chances para o próximo token. Uma regra de amostragem escolhe um. Esse token entra na sequência e o ciclo recomeça. A frase que você lê é essa cadeia, não um parágrafo buscado num arquivo.",
          "O ajuste por instrução faz com que a cadeia tenda a responder em vez de só continuar no estilo do treino. Ferramenta e busca, quando existem, acontecem fora desse ciclo: o programa para, executa, e devolve texto novo para a sequência. O modelo não “acessa a internet”. O sistema em volta é que traz o texto de fora.",
        ],
      },
    ],
    references: [
      ref("Attention Is All You Need", "Vaswani e outros, arXiv", "https://arxiv.org/abs/1706.03762"),
      ref("Training language models to follow instructions", "Ouyang e outros, arXiv", "https://arxiv.org/abs/2203.02155"),
      ref("Language models are few-shot learners", "Brown e outros, arXiv", "https://arxiv.org/abs/2005.14165"),
    ],
  },
];

export function readingMinutes(article: BlogArticle) {
  const words = [article.excerpt, ...article.sections.flatMap((section) => section.paragraphs)]
    .join(" ")
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(3, Math.round(words / 180));
}

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}
