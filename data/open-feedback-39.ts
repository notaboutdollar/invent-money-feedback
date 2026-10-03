import type { Lang } from "@/components/LangProvider";
import type {
  BarQuestion,
  RatingQuestion,
  SummaryQuestion,
  HighlightItem,
} from "@/data/report-types";

type Content = {
  docTitle: string;
  docDescription: string;
  brand: { name: string; role: string; period: string };
  toc: {
    overviewSection: string;
    overviewItem: string;
    summarySection: string;
    summaryItem: string;
    detailsSection: string;
    questions: { num: string; label: string }[];
    closingSection: string;
    closingItem: string;
    olderSection: string;
    olderLinks: { href: string; label: string }[];
  };
  hero: {
    kickerName: string;
    kickerLabel: string;
    titleLine1: string;
    titleAccent: string;
    titleLine2Suffix: string;
    sub: string;
    metaWeekK: string;
    metaWeekV: string;
    metaResponsesK: string;
    metaResponsesV: string;
    metaFluidityK: string;
    metaFluidityV: string;
    metaRecommendationK: string;
    metaRecommendationV: string;
    days: { day: string; num: string; unit: string; label: string }[];
  };
  panorama: {
    kicker: string;
    metrics: { num: string; unit: string; label: string }[];
  };
  q1: BarQuestion;
  q2: RatingQuestion;
  q3: RatingQuestion;
  q4: BarQuestion;
  q5: SummaryQuestion;
  q6: SummaryQuestion;
  q7: SummaryQuestion;
  highlights: {
    num: string;
    col: string;
    title: string;
    meta: string;
    positiveTitle: string;
    positive: HighlightItem[];
    negativeTitle: string;
    negative: HighlightItem[];
  };
  closing: {
    kickerName: string;
    kickerLabel: string;
    titleLine1: string;
    titleAccent: string;
    titleLine2Suffix: string;
    body: string;
  };
};

// ————————————————————————————————————————————————————————————————
// Portuguese (original)
// ————————————————————————————————————————————————————————————————
const pt: Content = {
  docTitle: "Feedback Aberto — Invent Money",
  docDescription:
    "66 respostas da comunidade Invent Money, semana 39 de 2026.",
  brand: {
    name: "Invent Money",
    role: "Feedback aberto",
    period: "Feedback aberto\nSemana 39 · 2026",
  },
  toc: {
    overviewSection: "Panorama",
    overviewItem: "Indicadores-chave",
    summarySection: "Resumo",
    summaryItem: "Destaques",
    detailsSection: "Detalhes",
    questions: [
      { num: "01", label: "Sistema operacional" },
      { num: "02", label: "Fluidez (1-5)" },
      { num: "03", label: "Recomendação (1-5)" },
      { num: "04", label: "Erros enfrentados" },
      { num: "05", label: "Maior diferencial" },
      { num: "06", label: "O que faria recomendar" },
      { num: "07", label: "Sugestões abertas" },
    ],
    closingSection: "Fechamento",
    closingItem: "Leitura geral",
    olderSection: "Reports anteriores",
    olderLinks: [
      { href: "/report/set-2026-feedback-aberto", label: "Feedback aberto · semana 38" },
      { href: "/report/set-2026-pulso-comunidade", label: "Pulso da comunidade" },
      { href: "/report/set-2026-beta-trainers", label: "Beta trainers" },
      { href: "/report/set-2026-piloto-inicial", label: "Piloto inicial" },
    ],
  },
  hero: {
    kickerName: "Invent Money",
    kickerLabel: "Feedback aberto · semana 39",
    titleLine1: "Feedback aberto",
    titleAccent: "semana 39",
    titleLine2Suffix: " de 2026.",
    sub: "Rodada aberta de feedback preenchida por 66 pessoas ao longo da semana — 31 iOS e 35 Android. Depois de uma atualização recente da plataforma (narração obrigatória em inglês + mudança nos critérios de aparelho elegível), a leitura dessa semana marca uma inflexão: fluidez média cai de 3,5 para 3,2 e recomendação de 3,4 para 3,2 em relação à semana 38. O gargalo histórico de aprovação continua, e dois novos problemas apareceram com força — narração em inglês e tarefas que desaparecem do painel.",
    metaWeekK: "Semana",
    metaWeekV: "39 · 2026",
    metaResponsesK: "Respostas",
    metaResponsesV: "66",
    metaFluidityK: "Fluidez média",
    metaFluidityV: "3,2/5",
    metaRecommendationK: "Recomendação média",
    metaRecommendationV: "3,2/5",
    days: [
      { day: "Sáb-Dom 27-28/09", num: "50", unit: "respostas", label: "Primeiros 2 dias, 76% do volume" },
      { day: "Seg-Qui 29/09-01/10", num: "9", unit: "respostas", label: "Volume residual" },
      { day: "Sex 02/10", num: "7", unit: "respostas", label: "Fechamento da coleta" },
    ],
  },
  panorama: {
    kicker: "Indicadores-chave",
    metrics: [
      { num: "3,2", unit: "/5", label: "Fluidez média — queda de 0,3 pontos vs semana 38." },
      { num: "3,2", unit: "/5", label: "Recomendação média — também caiu 0,2 pontos." },
      { num: "25", unit: "menções", label: "Narração em inglês vira a 1ª crítica nova da semana." },
      { num: "66", unit: "respostas", label: "iOS 31 · Android 35 · base equilibrada." },
    ],
  },
  q1: {
    num: "01",
    col: "Coluna E",
    title: "Qual sistema operacional você usa?",
    metaType: "Escolha única",
    metaResponses: "66 de 66 respostas",
    bars: [
      { label: "Android", pct: 53.0, count: "53% · 35 de 66" },
      { label: "iOS (iPhone)", pct: 47.0, count: "47% · 31 de 66", muted: true },
    ],
    reading:
      "Base continua equilibrada entre os dois sistemas, com leve maioria Android. Igual à semana 38, isso mantém a leitura comparável — os problemas aqui não são específicos de uma plataforma.",
  },
  q2: {
    num: "02",
    col: "Coluna G",
    title: "Numa escala de 1 a 5, quão fluida foi sua experiência geral no app?",
    metaType: "Escala numérica 1-5",
    metaResponses: "66 de 66 respostas",
    avg: "3,2",
    avgCap: "Média das 66 respostas",
    counts: [11, 5, 21, 17, 12],
    reading:
      "A fluidez caiu de 3,5 (semana 38) para 3,2 (semana 39) — queda de 0,3 pontos em 7 dias. A cauda baixa engrossou: as notas 1 passaram de 7 para 11 relatos (de 7% para 17% da base). A moda continua em 3 (21 respostas), mas o pico otimista em 4-5 recuou de 50% para 44% da base.",
  },
  q3: {
    num: "03",
    col: "Coluna J",
    title: "De 1 a 5, o quanto você recomendaria a Invent Money do jeito que está hoje?",
    metaType: "Escala numérica 1-5",
    metaResponses: "66 de 66 respostas",
    avg: "3,2",
    avgCap: "Média das 66 respostas",
    counts: [11, 11, 14, 14, 16],
    reading:
      "A recomendação ficou nivelada com a fluidez (3,2/5), mas a distribuição é mais polarizada: 22 pessoas em 1-2 e 30 em 4-5 — quase um empate. Os relatos abertos ajudam a explicar: quem recomenda cita a oportunidade de ganhar dinheiro em casa; quem não recomenda cita quase sempre a atualização recente (narração em inglês ou tarefas que sumiram).",
  },
  q4: {
    num: "04",
    col: "Coluna I",
    title: "Você enfrentou algum erro durante o uso?",
    metaType: "Múltipla escolha · 31 pessoas escreveram texto aberto",
    metaResponses: "40 de 66 pessoas relataram algum erro · 26 disseram “rodou liso”",
    bars: [
      { label: "Tarefas sumiram / não aparecem no painel", pct: 25.8, count: "17 relatos · 26% da base" },
      { label: "Narração/instruções mudaram para inglês", pct: 19.7, count: "13 relatos · 20% da base" },
      { label: "Vídeo em análise há muitos dias (upload+review)", pct: 18.2, count: "12 relatos · 18% da base" },
      { label: "Verificação de identidade (KYC) trava", pct: 7.6, count: "5 relatos · 8% da base", muted: true },
      { label: "App travou/fechou sozinho", pct: 7.6, count: "5 relatos · 8% da base", muted: true },
      { label: "Vídeo enviado mas horas não contaram", pct: 6.1, count: "4 relatos · 6% da base", muted: true },
    ],
    reading:
      "40% da base rodou o app sem erro — maior que a semana 38 em termos relativos, mas é enganoso: dessa vez, a maior categoria de erro é “tarefas sumiram” (17 relatos). Vários relatos descrevem o mesmo loop: usuário completa KYC, verificação volta a pedir, nenhuma tarefa aparece. Em segundo lugar aparece algo totalmente novo: 13 relatos sobre a narração em inglês que foi introduzida com uma atualização recente.",
  },
  q5: {
    num: "05",
    col: "Coluna L",
    title: "Qual foi o maior diferencial em usar o app da Invent Money?",
    metaType: "Resposta aberta · agrupada por tema",
    metaResponses: "47 de 66 respostas",
    summaryKicker: "Temas mais citados como diferencial",
    summaryLine:
      "Praticidade/fácil de usar (9×) · Aceitar múltiplos modelos de celular (7×) · Variedade de tarefas (5×) · Suporte brasileiro / responsivo (2×). O destaque “aceita vários celulares” caiu de 14× (sem 38) para 7× — alguns relatos citam que a atualização restringiu modelos aceitos.",
    answers: [
      { id: "Resposta", device: "Fluidez 4 · Rec 4", quote: "Parece ser uma empresa séria e diferente pois aceita outros modelos de smartphones, além de ser fácil de usar." },
      { id: "Resposta", device: "Fluidez 5 · Rec 5", quote: "Nunca tinha visto um aplicativo que pagasse pra gravar vídeo fazendo os serviços de casa." },
      { id: "Resposta", device: "Fluidez 3 · Rec 5", quote: "Fácil entendimento. Trazer várias tarefas do cotidiano! Limpeza, organização, skincare, escrita." },
      { id: "Resposta", device: "Fluidez 4 · Rec 4", quote: "Achei fácil e bem explicado." },
      { id: "Resposta", device: "Fluidez 5 · Rec 5", quote: "Oportunidade de um ganho extra, e mostra um pouco de quanto trabalho gera uma casa no dia a dia." },
      { id: "Resposta", device: "Fluidez 3 · Rec 2", quote: "Aceitar vários celulares, suporte de peito." },
      { id: "Resposta", device: "Fluidez 4 · Rec 1", quote: "Antes o diferencial foi ela aceitar outro tipos de smartphones (antes da atualização)." },
      { id: "Resposta", device: "Fluidez 3 · Rec 3", quote: "A ideia de poder utilizar outros aparelhos que não são iPhone 12 ou Samsung S21 pra cima, porém foi atualizado estes termos e não é mais possível." },
    ],
  },
  q6: {
    num: "06",
    col: "Coluna K",
    title: "O que faria você recomendar a Invent Money com confiança?",
    metaType: "Resposta aberta · agrupada por tema",
    metaResponses: "66 de 66 respostas",
    summaryKicker: "Temas mais citados",
    summaryLine:
      "Mais variedade de tarefas (16×) · Análise/aprovação mais rápida (9×) · Voltar narração em português (7×) · Pagamento rápido e correto (7×) · Praticidade (5×) · Suporte brasileiro (4×).",
    answers: [
      { id: "Resposta", device: "Fluidez 3 · Rec 2", quote: "Um suporte com atendentes brasileiros e os vídeos subissem mais rápido para o site." },
      { id: "Resposta", device: "Fluidez 3 · Rec 3", quote: "Melhorar o tempo de conclusão de análise, tempo de liberação do crédito, eliminar a narrativa obrigatória no idioma inglês." },
      { id: "Resposta", device: "Fluidez 5 · Rec 5", quote: "Se as atividades voltassem a fazer sem áudio como era antes." },
      { id: "Resposta", device: "Fluidez 3 · Rec 1", quote: "Que a plataforma tivesse tarefas em português — inclusive de narração — e não fosse tão rígida pra aprovação de vídeos." },
      { id: "Resposta", device: "Fluidez 5 · Rec 5", quote: "Recomendaria por ter tido uma boa experiência com a Invent. E pelo amor de Deus coloquem as tarefas para mim de novo — se voltar, meu foco será apenas no app de vocês." },
      { id: "Resposta", device: "Fluidez 3 · Rec 5", quote: "Pagamento certinho, regras bem explicadas, suporte de excelência." },
      { id: "Resposta", device: "Fluidez 3 · Rec 2", quote: "Ter suporte mais fluido, ter uma comunidade ou grupo, ter prazos estabelecidos, e tarefas que brasileiros não fluentes em inglês possam fazer." },
      { id: "Resposta", device: "Fluidez 4 · Rec 3", quote: "Se vocês analisassem mais rápido os vídeos e pagassem por Pix." },
      { id: "Resposta", device: "Fluidez 4 · Rec 4", quote: "Recomendei a Invent Money para meus amigos sem ter meus vídeos aprovados. Mas só vou indicar novamente se a plataforma agilizar a análise dos vídeos." },
    ],
  },
  q7: {
    num: "07",
    col: "Coluna M",
    title: "Sugestões, elogios ou críticas para a operação da Invent Money",
    metaType: "Resposta aberta · agrupada por tema",
    metaResponses: "50 de 66 respostas",
    summaryKicker: "Temas mais citados",
    summaryLine:
      "Mais tarefas / voltar tarefas sumidas (17×) · Voltar narração em português (13×) · Análise/aprovação dos vídeos mais rápida (11×) · Pix como forma de pagamento (2×).",
    answers: [
      { id: "Resposta", device: "Fluidez 3 · Rec 3", quote: "Flexibilizar essa última atualização, retirando a necessidade do idioma inglês durante a narrativa das tarefas. Voltar atividades do dia a dia, como por exemplo cuidados com os animais." },
      { id: "Resposta", device: "Fluidez 3 · Rec 5", quote: "Retirar o inglês e manter o valor de $60 dólares." },
      { id: "Resposta", device: "Fluidez 2 · Rec 2", quote: "Deveriam analisar melhor os vídeos! Depois que mudaram o valor da narração, negaram todos os vídeos — mesmo fazendo o que estava sendo pedido." },
      { id: "Resposta", device: "Fluidez 1 · Rec 2", quote: "Melhorasse a questão de sempre pedirem a verificação de identidade — já realizei várias vezes e sempre pede novamente." },
      { id: "Resposta", device: "Fluidez 2 · Rec 2", quote: "Deixei alguns acima, mas excesso de demora na análise dos vídeos, trocar tarefas do nada e sem aviso." },
      { id: "Resposta", device: "Fluidez 4 · Rec 2", quote: "Por favor melhorem a quantidade de minutos por vídeo. Pelo menos 30 min." },
      { id: "Resposta", device: "Fluidez 1 · Rec 1", quote: "Tenho vídeos em análise há mais de 3 semanas, antes das tarefas de narração." },
      { id: "Resposta", device: "Fluidez 3 · Rec 3", quote: "Por favor coloquem tarefas para brasileiros novamente e um prazo para as análises." },
      { id: "Resposta", device: "Fluidez 5 · Rec 5", quote: "Tirem o limite de envios por tarefas." },
      { id: "Resposta", device: "Fluidez 3 · Rec 3", quote: "Trazer avisos de por que os vídeos não foram avaliados. Estou desde dia 18/09 sem avaliação de vários vídeos." },
    ],
  },
  highlights: {
    num: "→",
    col: "Síntese",
    title: "Pontos fortes e principais melhorias",
    meta: "Contagens das 66 respostas da semana 39",
    positiveTitle: "Pontos fortes",
    positive: [
      { html: "<strong>Praticidade e facilidade de uso</strong> continua sendo o diferencial mais citado — fluxo intuitivo e rápido de dominar.", tally: "14 menções · Q5 + Q6" },
      { html: "<strong>Oportunidade de ganhar em casa</strong> fazendo tarefas do cotidiano aparece como valor real.", tally: "8 menções · Q6" },
      { html: "<strong>Aceitar vários modelos de celular</strong> ainda é diferencial — mas caiu de 14 (semana 38) para 7 menções.", tally: "7 menções · Q5" },
      { html: "<strong>26 pessoas (40% da base) rodaram o app sem erro técnico.</strong>", tally: "26 · Q4" },
      { html: "<strong>Suporte quando funciona</strong> é elogiado — citação pontual de atendimento \"de peito\" / \"maravilhosa\".", tally: "4 menções · Q6 + Q7" },
    ],
    negativeTitle: "Melhorias mais citadas",
    negative: [
      { html: "<strong>Narração obrigatória em inglês</strong> — crítica nova e dominante da semana. Base é majoritariamente de brasileiras não-fluentes, e a atualização recente derrubou a aprovação de vídeos.", tally: "25 menções · todas as colunas abertas" },
      { html: "<strong>Tarefas desapareceram do painel</strong> — vários relatos de \"não tem tarefa pra mim\", mesmo com KYC completo. Alguns pedem para \"voltar as tarefas de novo\".", tally: "24 menções · Q4 + Q6 + Q7" },
      { html: "<strong>Mais variedade de tarefas</strong>, especialmente de casa (louça, roupa, cozinha, skincare, limpeza, artesanato, pets).", tally: "22 menções · Q6 + Q7" },
      { html: "<strong>Análise/aprovação dos vídeos continua lenta.</strong> Relatos de vídeos parados há 10+ dias, inclusive desde antes da atualização.", tally: "20 menções · Q6 + Q7 + Q4" },
      { html: "<strong>Verificação de identidade (KYC) em loop</strong> — sistema volta a pedir mesmo depois de concluída várias vezes.", tally: "5 menções · Q4 + Q7" },
      { html: "<strong>Rigidez/inconsistência nos critérios de aprovação</strong> — vídeos reprovados sem motivo claro, incluindo após a atualização de narração.", tally: "6 menções · Q7" },
      { html: "<strong>Pedido por Pix</strong> continua, mas com volume menor que a semana 38 (2× vs 17× antes).", tally: "2 menções · Q6 + Q7" },
    ],
  },
  closing: {
    kickerName: "Fechamento",
    kickerLabel: "Leitura geral das 66 respostas · semana 39",
    titleLine1: "A atualização recente",
    titleAccent: "virou o maior gargalo da semana",
    titleLine2Suffix: ".",
    body:
      "66 pessoas responderam esta semana — menos que as 101 da semana passada, e com notas piores (fluidez 3,5 → 3,2; recomendação 3,4 → 3,2). O motivo principal aparece claro nas respostas abertas: uma atualização recente trouxe narração obrigatória em inglês e mudou os critérios de aparelho elegível, e isso derrubou os indicadores. Narração em inglês vira a maior categoria de crítica da semana (25 menções), seguida de tarefas que \"sumiram\" do painel (24 menções, incluindo um loop de verificação de identidade). O gargalo histórico — demora na aprovação dos vídeos — continua presente (20 menções), mas foi ofuscado pelos problemas novos. A boa notícia: a praticidade do app segue sendo elogiada e 40% da base rodou sem erro técnico. Se um conjunto curto de ações destravaria o humor da semana, seria: voltar a opção de narração em português, resolver o loop de KYC/tarefas que não aparecem e manter o pipeline de aprovação acelerado.",
  },
};

// ————————————————————————————————————————————————————————————————
// English
// ————————————————————————————————————————————————————————————————
const en: Content = {
  docTitle: "Open Feedback — Invent Money",
  docDescription:
    "66 responses from the Invent Money community, week 39 of 2026.",
  brand: {
    name: "Invent Money",
    role: "Open feedback",
    period: "Open feedback\nWeek 39 · 2026",
  },
  toc: {
    overviewSection: "Overview",
    overviewItem: "Key indicators",
    summarySection: "Summary",
    summaryItem: "Highlights",
    detailsSection: "Details",
    questions: [
      { num: "01", label: "Operating system" },
      { num: "02", label: "Fluidity (1–5)" },
      { num: "03", label: "Recommendation (1–5)" },
      { num: "04", label: "Errors faced" },
      { num: "05", label: "Biggest differential" },
      { num: "06", label: "What would drive recommendation" },
      { num: "07", label: "Open suggestions" },
    ],
    closingSection: "Closing",
    closingItem: "Overall reading",
    olderSection: "Previous reports",
    olderLinks: [
      { href: "/report/set-2026-feedback-aberto", label: "Open feedback · week 38" },
      { href: "/report/set-2026-pulso-comunidade", label: "Community pulse" },
      { href: "/report/set-2026-beta-trainers", label: "Beta trainers" },
      { href: "/report/set-2026-piloto-inicial", label: "Initial pilot" },
    ],
  },
  hero: {
    kickerName: "Invent Money",
    kickerLabel: "Open feedback · week 39",
    titleLine1: "Open feedback",
    titleAccent: "week 39",
    titleLine2Suffix: " of 2026.",
    sub: "Open feedback round filled out by 66 people across the week — 31 iOS and 35 Android. After a recent platform update (mandatory English narration + change to eligible-device criteria), this week's reading marks an inflection point: average fluidity drops from 3.5 to 3.2 and recommendation from 3.4 to 3.2 vs week 38. The historical approval bottleneck remains, and two new problems appeared strongly — English narration and tasks disappearing from users' panels.",
    metaWeekK: "Week",
    metaWeekV: "39 · 2026",
    metaResponsesK: "Responses",
    metaResponsesV: "66",
    metaFluidityK: "Average fluidity",
    metaFluidityV: "3.2/5",
    metaRecommendationK: "Average recommendation",
    metaRecommendationV: "3.2/5",
    days: [
      { day: "Sat-Sun 09/27-28", num: "50", unit: "responses", label: "First 2 days, 76% of volume" },
      { day: "Mon-Thu 09/29-10/01", num: "9", unit: "responses", label: "Residual volume" },
      { day: "Fri 10/02", num: "7", unit: "responses", label: "Collection close" },
    ],
  },
  panorama: {
    kicker: "Key indicators",
    metrics: [
      { num: "3.2", unit: "/5", label: "Average fluidity — 0.3-point drop vs week 38." },
      { num: "3.2", unit: "/5", label: "Average recommendation — also dropped 0.2 points." },
      { num: "25", unit: "mentions", label: "English narration becomes the week's new #1 criticism." },
      { num: "66", unit: "responses", label: "iOS 31 · Android 35 · balanced base." },
    ],
  },
  q1: {
    num: "01",
    col: "Column E",
    title: "Which operating system do you use?",
    metaType: "Single choice",
    metaResponses: "66 of 66 responses",
    bars: [
      { label: "Android", pct: 53.0, count: "53% · 35 of 66" },
      { label: "iOS (iPhone)", pct: 47.0, count: "47% · 31 of 66", muted: true },
    ],
    reading:
      "The base remains balanced between both systems, with a slight Android majority. Same as week 38, this keeps the reading comparable — the problems here aren't platform-specific.",
  },
  q2: {
    num: "02",
    col: "Column G",
    title: "From 1 to 5, how fluid was your overall experience in the app?",
    metaType: "1–5 numeric scale",
    metaResponses: "66 of 66 responses",
    avg: "3.2",
    avgCap: "Average of 66 responses",
    counts: [11, 5, 21, 17, 12],
    reading:
      "Fluidity dropped from 3.5 (week 38) to 3.2 (week 39) — a 0.3-point drop in 7 days. The low tail got heavier: 1-scores jumped from 7 to 11 reports (from 7% to 17% of the base). The mode is still 3 (21 responses), but the optimistic 4-5 peak retreated from 50% to 44% of the base.",
  },
  q3: {
    num: "03",
    col: "Column J",
    title: "From 1 to 5, how much would you recommend Invent Money as it is today?",
    metaType: "1–5 numeric scale",
    metaResponses: "66 of 66 responses",
    avg: "3.2",
    avgCap: "Average of 66 responses",
    counts: [11, 11, 14, 14, 16],
    reading:
      "Recommendation leveled with fluidity (3.2/5), but the distribution is more polarized: 22 people at 1-2 and 30 at 4-5 — nearly tied. Open answers help explain: those who recommend cite the opportunity to earn money at home; those who don't almost always cite the recent update (English narration or tasks that disappeared).",
  },
  q4: {
    num: "04",
    col: "Column I",
    title: "Did you encounter any errors while using the app?",
    metaType: "Multiple choice · 31 wrote open text",
    metaResponses: "40 of 66 people reported some error · 26 said it \"ran smoothly\"",
    bars: [
      { label: "Tasks disappeared / don't show up in panel", pct: 25.8, count: "17 reports · 26% of the base" },
      { label: "Narration/instructions switched to English", pct: 19.7, count: "13 reports · 20% of the base" },
      { label: "Video stuck in review for many days", pct: 18.2, count: "12 reports · 18% of the base" },
      { label: "Identity verification (KYC) loops", pct: 7.6, count: "5 reports · 8% of the base", muted: true },
      { label: "App crashed/closed by itself", pct: 7.6, count: "5 reports · 8% of the base", muted: true },
      { label: "Video sent but hours didn't count", pct: 6.1, count: "4 reports · 6% of the base", muted: true },
    ],
    reading:
      "40% of the base ran the app without errors — higher than week 38 in relative terms, but misleading: this time, the biggest error category is \"tasks disappeared\" (17 reports). Several reports describe the same loop: user completes KYC, verification keeps asking again, no task shows up. The runner-up is something entirely new: 13 reports about English narration introduced with a recent update.",
  },
  q5: {
    num: "05",
    col: "Column L",
    title: "What was the biggest differential in using the Invent Money app?",
    metaType: "Open answer · grouped by theme",
    metaResponses: "47 of 66 responses",
    summaryKicker: "Most cited differential themes",
    summaryLine:
      "Practicality / ease of use (9×) · Accepting multiple phone models (7×) · Task variety (5×) · Brazilian / responsive support (2×). The \"accepts various phones\" highlight dropped from 14× (week 38) to 7× — some reports cite that the update restricted accepted models.",
    answers: [
      { id: "Response", device: "Fluidity 4 · Rec 4", quote: "Seems like a serious, different company — it accepts other smartphone models and is easy to use." },
      { id: "Response", device: "Fluidity 5 · Rec 5", quote: "I had never seen an app that pays you to record videos doing household chores." },
      { id: "Response", device: "Fluidity 3 · Rec 5", quote: "Easy to understand. Bring more everyday tasks! Cleaning, organizing, skincare, writing." },
      { id: "Response", device: "Fluidity 4 · Rec 4", quote: "Easy and well explained." },
      { id: "Response", device: "Fluidity 5 · Rec 5", quote: "An opportunity for extra income, and shows how much work a household takes every day." },
      { id: "Response", device: "Fluidity 3 · Rec 2", quote: "Accepting various phones, chest-worn support." },
      { id: "Response", device: "Fluidity 4 · Rec 1", quote: "Before, the differential was accepting other smartphone types (before the update)." },
      { id: "Response", device: "Fluidity 3 · Rec 3", quote: "The idea of using phones other than iPhone 12 or Samsung S21+, but those terms were updated and it's no longer possible." },
    ],
  },
  q6: {
    num: "06",
    col: "Column K",
    title: "What would make you confidently recommend Invent Money?",
    metaType: "Open answer · grouped by theme",
    metaResponses: "66 of 66 responses",
    summaryKicker: "Most cited themes",
    summaryLine:
      "More task variety (16×) · Faster video review/approval (9×) · Bring back Portuguese narration (7×) · Fast and reliable payment (7×) · Practicality (5×) · Brazilian support (4×).",
    answers: [
      { id: "Response", device: "Fluidity 3 · Rec 2", quote: "Support with Brazilian attendants and faster video upload to the site." },
      { id: "Response", device: "Fluidity 3 · Rec 3", quote: "Improve review turnaround time, credit release time, and eliminate mandatory English narration." },
      { id: "Response", device: "Fluidity 5 · Rec 5", quote: "If activities went back to being audio-free like before." },
      { id: "Response", device: "Fluidity 3 · Rec 1", quote: "If the platform had tasks in Portuguese — including narration — and wasn't so strict on video approval." },
      { id: "Response", device: "Fluidity 5 · Rec 5", quote: "I'd recommend it for having had a good experience with Invent. And please, bring back the tasks for me — if they return, my focus will be only on your app." },
      { id: "Response", device: "Fluidity 3 · Rec 5", quote: "Reliable payment, clear rules, excellent support." },
      { id: "Response", device: "Fluidity 3 · Rec 2", quote: "More fluid support, a community or group, established deadlines, and tasks that non-fluent-in-English Brazilians can do." },
      { id: "Response", device: "Fluidity 4 · Rec 3", quote: "If you reviewed videos faster and paid via Pix." },
      { id: "Response", device: "Fluidity 4 · Rec 4", quote: "I recommended Invent Money to my friends without my videos being approved. But I'll only recommend again if the platform speeds up video review." },
    ],
  },
  q7: {
    num: "07",
    col: "Column M",
    title: "Suggestions, praise or criticism for the Invent Money operation",
    metaType: "Open answer · grouped by theme",
    metaResponses: "50 of 66 responses",
    summaryKicker: "Most cited themes",
    summaryLine:
      "More tasks / bring back disappeared tasks (17×) · Bring back Portuguese narration (13×) · Faster video review/approval (11×) · Pix as a payment option (2×).",
    answers: [
      { id: "Response", device: "Fluidity 3 · Rec 3", quote: "Make this last update more flexible by removing the English-language requirement for task narration. Bring back everyday activities, like pet care for example." },
      { id: "Response", device: "Fluidity 3 · Rec 5", quote: "Remove English and keep the $60 payment value." },
      { id: "Response", device: "Fluidity 2 · Rec 2", quote: "You should review videos more carefully! After the narration value changed, you rejected every one of mine — even following what was asked." },
      { id: "Response", device: "Fluidity 1 · Rec 2", quote: "Fix the recurring identity verification requests — I've completed it several times and it keeps asking again." },
      { id: "Response", device: "Fluidity 2 · Rec 2", quote: "Mentioned some above, but excessive review delays, tasks being swapped out of nowhere without notice." },
      { id: "Response", device: "Fluidity 4 · Rec 2", quote: "Please improve the minutes-per-video limit. At least 30 min." },
      { id: "Response", device: "Fluidity 1 · Rec 1", quote: "I have videos in review for over 3 weeks, from before the narration tasks." },
      { id: "Response", device: "Fluidity 3 · Rec 3", quote: "Please bring back tasks for Brazilians, and a deadline for reviews." },
      { id: "Response", device: "Fluidity 5 · Rec 5", quote: "Remove the per-task submission limit." },
      { id: "Response", device: "Fluidity 3 · Rec 3", quote: "Bring notices for why videos weren't reviewed. I've been without review for several videos since 09/18." },
    ],
  },
  highlights: {
    num: "→",
    col: "Synthesis",
    title: "Strong points and main improvements",
    meta: "Counts from the 66 week-39 responses",
    positiveTitle: "Strong points",
    positive: [
      { html: "<strong>Practicality and ease of use</strong> remains the most cited differential — intuitive and quick to master.", tally: "14 mentions · Q5 + Q6" },
      { html: "<strong>Opportunity to earn at home</strong> doing everyday tasks shows up as real value.", tally: "8 mentions · Q6" },
      { html: "<strong>Accepting multiple phone models</strong> is still a differential — but dropped from 14 (week 38) to 7 mentions.", tally: "7 mentions · Q5" },
      { html: "<strong>26 people (40% of the base) ran the app without any technical error.</strong>", tally: "26 · Q4" },
      { html: "<strong>Support when it works</strong> is praised — isolated mentions of \"amazing\" / \"chest-worn\" support.", tally: "4 mentions · Q6 + Q7" },
    ],
    negativeTitle: "Most cited improvements",
    negative: [
      { html: "<strong>Mandatory English narration</strong> — new and dominant criticism this week. The base is mostly non-fluent-in-English Brazilians, and the recent update tanked video approval.", tally: "25 mentions · all open columns" },
      { html: "<strong>Tasks disappeared from the panel</strong> — many reports of \"no task for me\", even with KYC completed. Some ask to \"bring the tasks back\".", tally: "24 mentions · Q4 + Q6 + Q7" },
      { html: "<strong>More task variety</strong>, especially household (dishes, laundry, kitchen, skincare, cleaning, crafts, pets).", tally: "22 mentions · Q6 + Q7" },
      { html: "<strong>Video review/approval still slow.</strong> Reports of videos stuck 10+ days, including from before the update.", tally: "20 mentions · Q6 + Q7 + Q4" },
      { html: "<strong>Identity verification (KYC) loops</strong> — system keeps asking even after completing it several times.", tally: "5 mentions · Q4 + Q7" },
      { html: "<strong>Strict / inconsistent approval criteria</strong> — videos rejected without clear reason, including after the narration update.", tally: "6 mentions · Q7" },
      { html: "<strong>Pix requests</strong> continue, but with lower volume than week 38 (2× vs 17× before).", tally: "2 mentions · Q6 + Q7" },
    ],
  },
  closing: {
    kickerName: "Closing",
    kickerLabel: "General reading of the 66 responses · week 39",
    titleLine1: "The recent update",
    titleAccent: "became the week's biggest bottleneck",
    titleLine2Suffix: ".",
    body:
      "66 people responded this week — fewer than last week's 101, and with lower scores (fluidity 3.5 → 3.2; recommendation 3.4 → 3.2). The main reason shows up clearly in the open answers: a recent update brought mandatory English narration and changed the eligible-device criteria, and that dragged the indicators down. English narration becomes the biggest criticism category of the week (25 mentions), followed by tasks that \"disappeared\" from the panel (24 mentions, including an identity-verification loop). The historical bottleneck — slow video approval — remains present (20 mentions), but was overshadowed by the new problems. The good news: the app's practicality is still praised, and 40% of the base ran it without technical errors. If a short set of actions would unlock the week's mood, it would be: bring back the Portuguese narration option, resolve the KYC/tasks-not-showing loop, and keep the approval pipeline moving fast.",
  },
};

export const openFeedbackContent: Record<Lang, Content> = { en, pt };
