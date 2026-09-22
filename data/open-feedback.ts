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
    "101 respostas da comunidade Invent Money, semana 38 de 2026.",
  brand: {
    name: "Invent Money",
    role: "Feedback aberto",
    period: "Feedback aberto\nSemana 38 · 2026",
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
      { href: "/report/set-2026-pulso-comunidade", label: "Pulso da comunidade" },
      { href: "/report/set-2026-beta-trainers", label: "Beta trainers" },
      { href: "/report/set-2026-piloto-inicial", label: "Piloto inicial" },
    ],
  },
  hero: {
    kickerName: "Invent Money",
    kickerLabel: "Feedback aberto",
    titleLine1: "Feedback aberto",
    titleAccent: "semana 38",
    titleLine2Suffix: " de 2026.",
    sub: "Resultados da rodada aberta de feedback preenchida por 101 pessoas em pouco mais de 24 horas. É a maior amostra até aqui e a primeira coletada sem público específico — qualquer pessoa da base pôde responder. As perguntas cobrem sistema operacional, fluidez do app, erros enfrentados, recomendação, o maior diferencial da plataforma, o que faria recomendar com confiança e sugestões abertas.",
    metaWeekK: "Semana",
    metaWeekV: "38 · 2026",
    metaResponsesK: "Respostas",
    metaResponsesV: "101",
    metaFluidityK: "Fluidez média",
    metaFluidityV: "3,5/5",
    metaRecommendationK: "Recomendação média",
    metaRecommendationV: "3,4/5",
    days: [
      { day: "Dia 1", num: "63", unit: "respostas", label: "Maior volume de respostas" },
      { day: "Dia 2", num: "38", unit: "respostas", label: "Último dia da coleta" },
    ],
  },
  panorama: {
    kicker: "Indicadores-chave",
    metrics: [
      { num: "3,5", unit: "/5", label: "Fluidez média da experiência no app (n=101)." },
      { num: "3,4", unit: "/5", label: "Recomendariam a Invent Money hoje (n=101)." },
      { num: "53", unit: "%", label: "Recomendariam com nota 4 ou 5 — a maioria da base." },
      { num: "101", unit: "respostas", label: "A maior rodada de feedback até aqui, coletada em ~24 horas." },
    ],
  },
  q1: {
    num: "01",
    col: "Coluna E",
    title: "Qual sistema operacional você usa?",
    metaType: "Escolha única",
    metaResponses: "101 de 101 respostas",
    bars: [
      { label: "Android", pct: 50.5, count: "50% · 51 de 101" },
      { label: "iOS (iPhone)", pct: 49.5, count: "50% · 50 de 101", muted: true },
    ],
    reading:
      "A base ficou praticamente empatada entre as duas plataformas — 51 Android e 50 iOS. É um sinal forte: os problemas relatados aqui têm peso simétrico nos dois lados, não é uma questão específica de um sistema.",
  },
  q2: {
    num: "02",
    col: "Coluna G",
    title: "Numa escala de 1 a 5, quão fluida foi sua experiência geral no app?",
    metaType: "Escala numérica 1-5",
    metaResponses: "101 de 101 respostas",
    avg: "3,5",
    avgCap: "Média das 101 respostas",
    counts: [7, 10, 34, 27, 23],
    reading:
      "A distribuição é assimétrica pra cima: nota 3 é a moda (34 respostas), mas há 50 respostas ≥4 e apenas 17 ≤2. A metade da base achou a experiência fluida ou muito fluida, e as reclamações são específicas (aparecem em Q7), não gerais.",
  },
  q3: {
    num: "03",
    col: "Coluna J",
    title: "De 1 a 5, o quanto você recomendaria a Invent Money do jeito que está hoje?",
    metaType: "Escala numérica 1-5",
    metaResponses: "101 de 101 respostas",
    avg: "3,4",
    avgCap: "Média das 101 respostas",
    counts: [9, 16, 22, 29, 25],
    reading:
      "Recomendação e fluidez ficam quase empatadas (3,4 e 3,5), mas a recomendação tem cauda mais espalhada — 25 respostas em 1-2 e 54 em 4-5. Quem recomenda, recomenda com confiança; quem não recomenda, tem motivo específico (quase sempre a demora na aprovação dos vídeos).",
  },
  q4: {
    num: "04",
    col: "Coluna I",
    title: "Você enfrentou algum erro durante o uso?",
    metaType: "Múltipla escolha (várias opções por resposta)",
    metaResponses: "60 de 101 pessoas relataram algum erro · 36 disseram “rodou liso”",
    bars: [
      { label: "Erro na hora de fazer upload do vídeo", pct: 28.7, count: "29 relatos · 29% da base" },
      { label: "Vídeo enviado, mas horas/vídeo não contaram no app", pct: 15.8, count: "16 relatos · 16% da base" },
      { label: "Vídeo em análise há muito tempo (resposta aberta)", pct: 16.8, count: "17 relatos · 17% da base" },
      { label: "Erro ao gravar o vídeo", pct: 8.9, count: "9 relatos · 9% da base", muted: true },
      { label: "App travou/fechou sozinho", pct: 3.0, count: "3 relatos · 3% da base", muted: true },
    ],
    reading:
      "36% da base rodou o app sem nenhum erro. Entre quem teve problema, upload é o gargalo mais frequente (29 relatos). Somando quem marcou opções técnicas com quem escreveu em texto aberto sobre “vídeo em análise”, dá pra ver que os problemas técnicos e o gargalo de aprovação são as duas frentes principais — reforçando o que aparece em Q7.",
  },
  q5: {
    num: "05",
    col: "Coluna L",
    title: "Qual foi o maior diferencial em usar o app da Invent Money?",
    metaType: "Resposta aberta · agrupada por tema",
    metaResponses: "86 de 101 respostas",
    summaryKicker: "Temas mais citados como diferencial",
    summaryLine:
      "Aceitar múltiplos modelos de celular (14×) · Aprovação/critério mais flexível (12×) · Não depender do app Minute (10×) · Variedade de tarefas (10×) · Gravar direto pela câmera do celular (7×) · Praticidade (7×).",
    answers: [
      { id: "Resposta", device: "Fluidez 5 · Rec 4", quote: "Não usar Minute e receber em cripto." },
      { id: "Resposta", device: "Fluidez 5 · Rec 5", quote: "Poder gravar mais de 30 minutos sem parar." },
      { id: "Resposta", device: "Fluidez 4 · Rec 4", quote: "Os 2 maiores diferenciais são usar outros celulares com boas câmeras e poder gravar direto do app." },
      { id: "Resposta", device: "Fluidez 4 · Rec 5", quote: "Eu gravei só para fazer um teste, mas vi que pode gravar em um período máximo de 2 horas e isso é maravilhoso — você não precisa ficar pausando as tarefas uma a uma. Já faz uma coisa só, achei interessante." },
      { id: "Resposta", device: "Fluidez 5 · Rec 5", quote: "Apenas grava pela câmera e coloca o vídeo no app." },
      { id: "Resposta", device: "Fluidez 4 · Rec 4", quote: "Não depende de outro app pra realizar as tarefas." },
      { id: "Resposta", device: "Fluidez 2 · Rec 5", quote: "É ótimo para quem é dona de casa." },
      { id: "Resposta", device: "Fluidez 5 · Rec 5", quote: "Flexibilidade das tarefas." },
    ],
  },
  q6: {
    num: "06",
    col: "Coluna K",
    title: "O que faria você recomendar a Invent Money com confiança?",
    metaType: "Resposta aberta · agrupada por tema",
    metaResponses: "101 de 101 respostas",
    summaryKicker: "Temas mais citados",
    summaryLine:
      "Rapidez na análise/aprovação dos vídeos (25×) · Pagamento rápido e correto (19×) · Mais variedade de tarefas (9×) · Aceita mais modelos de celular (8×) · Praticidade (7×) · Pix como pagamento (6×) · Critério de aprovação mais justo (6×).",
    answers: [
      { id: "Resposta", device: "Fluidez 5 · Rec 4", quote: "Ser pagamento via Pix ou alguma transação mais simples para sacar, e mais rapidez para a aprovação dos vídeos — está demorando muito a análise." },
      { id: "Resposta", device: "Fluidez 4 · Rec 4", quote: "Transparência, segurança, pagamentos em dia e um bom suporte aos usuários. Assim eu me sentiria mais confiante para recomendar." },
      { id: "Resposta", device: "Fluidez 5 · Rec 5", quote: "A honestidade e transparência da empresa." },
      { id: "Resposta", device: "Fluidez 2 · Rec 1", quote: "Atualização rápida dos vídeos que são enviados, disponibilização rápida de saque, e saque Pix." },
      { id: "Resposta", device: "Fluidez 3 · Rec 5", quote: "Colocar mais opções de casa e colocar pagamento já em Pix, pois nem todos entendem de conversão." },
      { id: "Resposta", device: "Fluidez 4 · Rec 4", quote: "Ter um suporte que resolva os problemas." },
      { id: "Resposta", device: "Fluidez 5 · Rec 3", quote: "Pagamento rápido, e o funcionamento em praticamente todos os celulares!" },
      { id: "Resposta", device: "Fluidez 5 · Rec 4", quote: "Um índice mais alto e correto de aprovações dos vídeos corretos." },
      { id: "Resposta", device: "Fluidez 3 · Rec 5", quote: "Pelo fato de estar recebendo por algo que já fazia de graça." },
    ],
  },
  q7: {
    num: "07",
    col: "Coluna M",
    title: "Sugestões, elogios ou críticas para a operação da Invent Money",
    metaType: "Resposta aberta · agrupada por tema",
    metaResponses: "74 de 101 respostas",
    summaryKicker: "Temas mais citados",
    summaryLine:
      "Análise/aprovação dos vídeos mais rápida (30×) · Pagamento mais rápido e correto (14×) · Pix como forma de pagamento (11×) · Mais variedade de tarefas (7×) · Melhorar upload (7×) · Suporte que responde (5×).",
    answers: [
      { id: "Resposta", device: "Fluidez 4 · Rec 5", quote: "Acho que os pagamentos deveriam ser mais práticos — finais de semana deveria contar, não somente dias úteis. O primeiro pagamento também deveria ser mais rápido: além de esperar bater o mínimo de 2h, tem que aguardar o dia que é liberado o saque, e se é numa sexta passa o final de semana todo pra receber. Também deveriam deixar todas as tarefas disponíveis ao invés de fazer um rodízio. No mais, o aplicativo é ótimo, bem prático e ajuda muito quem precisa." },
      { id: "Resposta", device: "Fluidez 4 · Rec 3", quote: "O prazo para análise do vídeo é muito demorado — nas concorrentes é de horas, às vezes minutos, já estão aprovados ou negados. Muito rápido a análise." },
      { id: "Resposta", device: "Fluidez 3 · Rec 3", quote: "Período de análise demora muito, isso acaba nos desanimando! Poderia reduzir de 10 dias de análise para 4 ou 5 dias." },
      { id: "Resposta", device: "Fluidez 4 · Rec 3", quote: "Maior rapidez no processamento e aprovação dos vídeos. Os vídeos demoram horrores para subir na plataforma e ficam dias em análise." },
      { id: "Resposta", device: "Fluidez 5 · Rec 4", quote: "Quero elogiar por aceitar outros celulares — hoje em dia a câmera da maioria dos aparelhos é de ótima resolução, então isso é muito elogiável. Sugestão (já dada, mas reforçando): a forma de pagamento é muito complicada, poderia ser por Pix. Outra: a análise não demorar tanto." },
      { id: "Resposta", device: "Fluidez 4 · Rec 4", quote: "Poderiam liberar mais horas de gravação na opção de trabalho — eu trabalho com crochês, acho 2 horas de gravação pouca." },
      { id: "Resposta", device: "Fluidez 4 · Rec 3", quote: "Ter um suporte que funcione no app. Ninguém responde nada e nem resolve problemas." },
      { id: "Resposta", device: "Fluidez 3 · Rec 1", quote: "Se os vídeos fossem analisados em tempo hábil, teria muito mais envios — o que motiva e faz melhorar é ver o retorno." },
      { id: "Resposta", device: "Fluidez 2 · Rec 5", quote: "Melhorar o upload e o tempo de análise. Gravar e ver o dinheiro sendo contabilizado dá mais ânimo para gravar." },
      { id: "Resposta", device: "Fluidez 4 · Rec 4", quote: "Poderia aprovar os vídeos mais rápidos, e colocar tarefas mais fáceis e com pouco tempo também, seria ótimo." },
    ],
  },
  highlights: {
    num: "→",
    col: "Síntese",
    title: "Pontos fortes e principais melhorias",
    meta: "Contagens vindas das 101 respostas",
    positiveTitle: "Pontos fortes",
    positive: [
      { html: "<strong>Aceitar múltiplos modelos de celular</strong> é o diferencial mais citado — aparece tanto como orgulho do produto quanto como motivo para recomendar.", tally: "22 menções · Q5 + Q6" },
      { html: "<strong>Não depender do app Minute</strong> é um alívio recorrente na base. Muita gente escreve explicitamente “não usar Minute” como diferencial positivo.", tally: "10 menções · Q5" },
      { html: "<strong>Gravar direto pela câmera do celular</strong> é destacado como prático e fluido.", tally: "8 menções · Q5" },
      { html: "<strong>Praticidade da plataforma</strong> — descrita como intuitiva, fácil de usar, sem pausas entre tarefas.", tally: "14 menções · Q5 + Q6" },
      { html: "<strong>Já poder ganhar dinheiro com o que já se fazia de graça</strong> — a proposta em si aparece como valor.", tally: "várias menções · Q6" },
      { html: "<strong>36 pessoas (36% da base) não relataram nenhum erro</strong> técnico ao usar o app.", tally: "36 · Q4" },
    ],
    negativeTitle: "Melhorias mais citadas",
    negative: [
      { html: "<strong>Demora na análise/aprovação dos vídeos.</strong> De longe a maior queixa. Vários relatos citam vídeos há 10+ dias em análise, e comparações com concorrentes (“minutos, no máximo horas”).", tally: "55 menções · Q6 + Q7" },
      { html: "<strong>Pagamento — rapidez e Pix como opção.</strong> A maioria pede fim de semana contando, primeiro saque mais rápido e Pix ao invés de conversão em cripto.", tally: "50 menções · Q6 + Q7" },
      { html: "<strong>Fricção no upload do vídeo.</strong> Foi o erro mais marcado na Q4 (29 relatos) e reaparece nas sugestões abertas.", tally: "29 relatos · Q4" },
      { html: "<strong>Vídeo enviado mas horas não contadas</strong> no app — 2º erro técnico mais frequente.", tally: "16 relatos · Q4" },
      { html: "<strong>Mais variedade de tarefas</strong>, especialmente tarefas domésticas (louça, roupa, cozinha, artesanato) e fim do rodízio limitado.", tally: "17 menções · Q6 + Q7" },
      { html: "<strong>Critério de aprovação percebido como rígido</strong> — vídeos rejeitados mesmo seguindo as especificações.", tally: "8 menções · Q6 + Q7" },
      { html: "<strong>Suporte lento ou ausente</strong> — pedidos por SAC brasileiro e resolução mais rápida.", tally: "8 menções · Q6 + Q7" },
    ],
  },
  closing: {
    kickerName: "Fechamento",
    kickerLabel: "Leitura geral das 101 respostas",
    titleLine1: "A base funciona.",
    titleAccent: "Aprovar vídeos e pagar em Pix",
    titleLine2Suffix: " destravariam a maior parte da insatisfação.",
    body:
      "Em pouco mais de 24 horas, 101 pessoas — metade Android, metade iOS — preencheram o formulário aberto. É a maior amostra até aqui, e mostra um produto mais estável do que os reports anteriores sugeriam: fluidez média 3,5/5, recomendação 3,4/5, e 36% da base rodou o app sem nenhum erro técnico. O diferencial que mais aparece é aceitar múltiplos celulares e não depender do Minute — a comunidade celebra essas duas coisas. Ao mesmo tempo, duas frentes concentram quase todas as reclamações: a demora na análise/aprovação dos vídeos (55 menções somando o que faria recomendar + sugestões abertas) e o modelo de pagamento (50 menções, com destaque pra pedir Pix). Se um único par de correções resolveria a maior parte da insatisfação, seria acelerar a fila de aprovação e disponibilizar Pix como opção de saque.",
  },
};

// ————————————————————————————————————————————————————————————————
// English
// ————————————————————————————————————————————————————————————————
const en: Content = {
  docTitle: "Open Feedback — Invent Money",
  docDescription:
    "101 responses from the Invent Money community, week 38 of 2026.",
  brand: {
    name: "Invent Money",
    role: "Open feedback",
    period: "Open feedback\nWeek 38 · 2026",
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
      { href: "/report/set-2026-pulso-comunidade", label: "Community pulse" },
      { href: "/report/set-2026-beta-trainers", label: "Beta trainers" },
      { href: "/report/set-2026-piloto-inicial", label: "Initial pilot" },
    ],
  },
  hero: {
    kickerName: "Invent Money",
    kickerLabel: "Open feedback",
    titleLine1: "Open feedback",
    titleAccent: "week 38",
    titleLine2Suffix: " of 2026.",
    sub: "Results from the open feedback round filled out by 101 people in just over 24 hours. This is the largest sample so far and the first collected without a specific audience — anyone in the base could respond. Questions cover operating system, app fluidity, errors faced, recommendation, the app's biggest differential, what would drive a confident recommendation, and open suggestions.",
    metaWeekK: "Week",
    metaWeekV: "38 · 2026",
    metaResponsesK: "Responses",
    metaResponsesV: "101",
    metaFluidityK: "Average fluidity",
    metaFluidityV: "3.5/5",
    metaRecommendationK: "Average recommendation",
    metaRecommendationV: "3.4/5",
    days: [
      { day: "Day 1", num: "63", unit: "responses", label: "Highest volume of responses" },
      { day: "Day 2", num: "38", unit: "responses", label: "Last day of collection" },
    ],
  },
  panorama: {
    kicker: "Key indicators",
    metrics: [
      { num: "3.5", unit: "/5", label: "Average fluidity of the app experience (n=101)." },
      { num: "3.4", unit: "/5", label: "Would recommend Invent Money as it is today (n=101)." },
      { num: "53", unit: "%", label: "Would recommend with a 4 or 5 — the majority of the base." },
      { num: "101", unit: "responses", label: "The largest feedback round so far, collected in ~24 hours." },
    ],
  },
  q1: {
    num: "01",
    col: "Column E",
    title: "Which operating system do you use?",
    metaType: "Single choice",
    metaResponses: "101 of 101 responses",
    bars: [
      { label: "Android", pct: 50.5, count: "50% · 51 of 101" },
      { label: "iOS (iPhone)", pct: 49.5, count: "50% · 50 of 101", muted: true },
    ],
    reading:
      "The base is basically tied between the two platforms — 51 Android and 50 iOS. Strong signal: the problems reported here weigh symmetrically on both sides, not a platform-specific issue.",
  },
  q2: {
    num: "02",
    col: "Column G",
    title: "From 1 to 5, how fluid was your overall experience in the app?",
    metaType: "1–5 numeric scale",
    metaResponses: "101 of 101 responses",
    avg: "3.5",
    avgCap: "Average of 101 responses",
    counts: [7, 10, 34, 27, 23],
    reading:
      "Distribution is skewed upward: score 3 is the mode (34 responses), but there are 50 responses ≥4 and only 17 ≤2. Half the base found the experience fluid or very fluid, and complaints are specific (they show up in Q7), not general.",
  },
  q3: {
    num: "03",
    col: "Column J",
    title: "From 1 to 5, how much would you recommend Invent Money as it is today?",
    metaType: "1–5 numeric scale",
    metaResponses: "101 of 101 responses",
    avg: "3.4",
    avgCap: "Average of 101 responses",
    counts: [9, 16, 22, 29, 25],
    reading:
      "Recommendation and fluidity end up nearly tied (3.4 and 3.5), but recommendation has a wider tail — 25 responses at 1–2 and 54 at 4–5. Those who recommend, recommend confidently; those who don't have a specific reason (almost always slow video approval).",
  },
  q4: {
    num: "04",
    col: "Column I",
    title: "Did you encounter any errors while using the app?",
    metaType: "Multiple choice (select all)",
    metaResponses: "60 of 101 people reported some error · 36 said it \"ran smoothly\"",
    bars: [
      { label: "Error uploading the video", pct: 28.7, count: "29 reports · 29% of the base" },
      { label: "Video sent, but hours/video didn't count in the app", pct: 15.8, count: "16 reports · 16% of the base" },
      { label: "Video stuck in review for a long time (open text)", pct: 16.8, count: "17 reports · 17% of the base" },
      { label: "Error while recording the video", pct: 8.9, count: "9 reports · 9% of the base", muted: true },
      { label: "App crashed / closed by itself", pct: 3.0, count: "3 reports · 3% of the base", muted: true },
    ],
    reading:
      "36% of the base ran the app without any error. Among those who had trouble, upload is the most frequent bottleneck (29 reports). Adding people who checked technical options to those who wrote openly about \"video in review\", the two main fronts stand out clearly: technical bugs and the approval bottleneck — reinforcing what shows up in Q7.",
  },
  q5: {
    num: "05",
    col: "Column L",
    title: "What was the biggest differential in using the Invent Money app?",
    metaType: "Open answer · grouped by theme",
    metaResponses: "86 of 101 responses",
    summaryKicker: "Most cited differential themes",
    summaryLine:
      "Accepting multiple phone models (14×) · More flexible approval criteria (12×) · Not depending on the Minute app (10×) · Task variety (10×) · Recording straight from the phone camera (7×) · Practicality (7×).",
    answers: [
      { id: "Response", device: "Fluidity 5 · Rec 4", quote: "Not using Minute and getting paid in crypto." },
      { id: "Response", device: "Fluidity 5 · Rec 5", quote: "Being able to record for over 30 minutes without stopping." },
      { id: "Response", device: "Fluidity 4 · Rec 4", quote: "The 2 biggest differentials are using other phones with good cameras and being able to record directly from the app." },
      { id: "Response", device: "Fluidity 4 · Rec 5", quote: "I only recorded once as a test, but I saw you can record up to 2 hours at a time — that's wonderful, you don't have to keep pausing tasks one by one. You just do one thing straight, I found it really interesting." },
      { id: "Response", device: "Fluidity 5 · Rec 5", quote: "You just record with the camera and drop the video into the app." },
      { id: "Response", device: "Fluidity 4 · Rec 4", quote: "It doesn't depend on another app to do the tasks." },
      { id: "Response", device: "Fluidity 2 · Rec 5", quote: "It's great for stay-at-home caregivers." },
      { id: "Response", device: "Fluidity 5 · Rec 5", quote: "Task flexibility." },
    ],
  },
  q6: {
    num: "06",
    col: "Column K",
    title: "What would make you confidently recommend Invent Money?",
    metaType: "Open answer · grouped by theme",
    metaResponses: "101 of 101 responses",
    summaryKicker: "Most cited themes",
    summaryLine:
      "Faster video review/approval (25×) · Fast and reliable payment (19×) · More task variety (9×) · Accepting more phone models (8×) · Practicality (7×) · Pix as payment (6×) · Fairer approval criteria (6×).",
    answers: [
      { id: "Response", device: "Fluidity 5 · Rec 4", quote: "Payment via Pix or some simpler transaction to withdraw, and faster video approval — the review is taking way too long." },
      { id: "Response", device: "Fluidity 4 · Rec 4", quote: "Transparency, security, on-time payments and good user support. That would make me confident enough to recommend." },
      { id: "Response", device: "Fluidity 5 · Rec 5", quote: "The company's honesty and transparency." },
      { id: "Response", device: "Fluidity 2 · Rec 1", quote: "Fast updates on submitted videos, quick withdrawal availability, and Pix withdrawal." },
      { id: "Response", device: "Fluidity 3 · Rec 5", quote: "Add more household options and use Pix for payment already, since not everyone gets crypto conversion." },
      { id: "Response", device: "Fluidity 4 · Rec 4", quote: "Support that actually solves problems." },
      { id: "Response", device: "Fluidity 5 · Rec 3", quote: "Fast payment, and it works on almost every phone!" },
      { id: "Response", device: "Fluidity 5 · Rec 4", quote: "A higher and more accurate approval rate for correct videos." },
      { id: "Response", device: "Fluidity 3 · Rec 5", quote: "Because I'm getting paid for something I already did for free." },
    ],
  },
  q7: {
    num: "07",
    col: "Column M",
    title: "Suggestions, praise or criticism for the Invent Money operation",
    metaType: "Open answer · grouped by theme",
    metaResponses: "74 of 101 responses",
    summaryKicker: "Most cited themes",
    summaryLine:
      "Faster video review/approval (30×) · Faster and more reliable payment (14×) · Pix as a payment option (11×) · More task variety (7×) · Improve upload (7×) · Support that answers (5×).",
    answers: [
      { id: "Response", device: "Fluidity 4 · Rec 5", quote: "I think payments should be more practical — weekends should count, not just weekdays. First payment should also be faster: beyond waiting to hit the 2h minimum, you have to wait for the withdrawal day, and if it's a Friday you spend the whole weekend waiting to get paid. Tasks should also all be available instead of rotating. Otherwise, the app is great, very practical and helps a lot of people." },
      { id: "Response", device: "Fluidity 4 · Rec 3", quote: "The video review turnaround is way too long — on competitors it's hours, sometimes minutes to approve or reject. Very fast review there." },
      { id: "Response", device: "Fluidity 3 · Rec 3", quote: "The review period takes way too long, that ends up demotivating us! Could go from 10 days to 4 or 5 days of review." },
      { id: "Response", device: "Fluidity 4 · Rec 3", quote: "Faster processing and video approval. Videos take forever to upload and sit in review for days." },
      { id: "Response", device: "Fluidity 5 · Rec 4", quote: "Kudos for accepting other phones — most devices today have great cameras. Suggestion (again, to reinforce): the payment method is very complicated, could be Pix. Another: video review shouldn't take so long." },
      { id: "Response", device: "Fluidity 4 · Rec 4", quote: "You could allow more recording hours per work option — I do crochet, 2 hours of recording feels short." },
      { id: "Response", device: "Fluidity 4 · Rec 3", quote: "Support that actually works in the app. Nobody replies to anything, nothing gets solved." },
      { id: "Response", device: "Fluidity 3 · Rec 1", quote: "If videos were reviewed in reasonable time, there would be many more submissions — what motivates and drives improvement is seeing the feedback." },
      { id: "Response", device: "Fluidity 2 · Rec 5", quote: "Improve the upload and review time. Recording and seeing the money add up gives more energy to record." },
      { id: "Response", device: "Fluidity 4 · Rec 4", quote: "Could approve videos faster and add easier, shorter tasks — would be great." },
    ],
  },
  highlights: {
    num: "→",
    col: "Synthesis",
    title: "Strong points and main improvements",
    meta: "Counts from all 101 responses",
    positiveTitle: "Strong points",
    positive: [
      { html: "<strong>Accepting multiple phone models</strong> is the most cited differential — appears both as product pride and as a reason to recommend.", tally: "22 mentions · Q5 + Q6" },
      { html: "<strong>Not depending on the Minute app</strong> is a recurring relief in the base. Many explicitly write \"not using Minute\" as a positive differential.", tally: "10 mentions · Q5" },
      { html: "<strong>Recording straight from the phone camera</strong> is highlighted as practical and fluid.", tally: "8 mentions · Q5" },
      { html: "<strong>Platform practicality</strong> — described as intuitive, easy to use, with no pauses between tasks.", tally: "14 mentions · Q5 + Q6" },
      { html: "<strong>Getting paid for something already done for free</strong> — the proposition itself shows up as value.", tally: "several mentions · Q6" },
      { html: "<strong>36 people (36% of the base) reported no errors</strong> using the app.", tally: "36 · Q4" },
    ],
    negativeTitle: "Most cited improvements",
    negative: [
      { html: "<strong>Delay in video review/approval.</strong> By far the biggest complaint. Several reports of videos stuck 10+ days, and comparisons with competitors (\"minutes, hours at most\").", tally: "55 mentions · Q6 + Q7" },
      { html: "<strong>Payment — speed and Pix as an option.</strong> Most people ask for weekends counting, faster first withdrawal, and Pix instead of crypto conversion.", tally: "50 mentions · Q6 + Q7" },
      { html: "<strong>Upload friction.</strong> The most-marked error in Q4 (29 reports) and it reappears in open suggestions.", tally: "29 reports · Q4" },
      { html: "<strong>Video sent but hours didn't count</strong> in the app — 2nd most frequent technical error.", tally: "16 reports · Q4" },
      { html: "<strong>More task variety</strong>, especially household tasks (dishes, laundry, kitchen, crafts) and end of the rotation limits.", tally: "17 mentions · Q6 + Q7" },
      { html: "<strong>Approval criteria perceived as strict</strong> — videos rejected even following specifications.", tally: "8 mentions · Q6 + Q7" },
      { html: "<strong>Slow or absent support</strong> — requests for Brazilian support and faster resolution.", tally: "8 mentions · Q6 + Q7" },
    ],
  },
  closing: {
    kickerName: "Closing",
    kickerLabel: "General reading of the 101 responses",
    titleLine1: "The base works.",
    titleAccent: "Faster video approval and Pix",
    titleLine2Suffix: " would unlock most of the dissatisfaction.",
    body:
      "In just over 24 hours, 101 people — half Android, half iOS — filled out the open form. The largest sample so far, and it shows a more stable product than previous reports suggested: fluidity average 3.5/5, recommendation 3.4/5, and 36% of the base ran the app without any technical error. The most-mentioned differential is accepting multiple phones and not depending on Minute — the community celebrates these two things. At the same time, two fronts hold almost all the complaints: delay in video review/approval (55 mentions across drive-recommendation and open suggestions) and the payment model (50 mentions, with Pix leading the ask). If a single pair of fixes would resolve most of the dissatisfaction, it would be speeding up the approval queue and offering Pix as a withdrawal option.",
  },
};

export const openFeedbackContent: Record<Lang, Content> = { en, pt };
