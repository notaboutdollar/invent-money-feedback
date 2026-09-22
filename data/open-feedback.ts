import type { Lang } from "@/components/LangProvider";
import type {
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
  q1: RatingQuestion;
  q2: RatingQuestion;
  q3: SummaryQuestion;
  q4: SummaryQuestion;
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
    "84 respostas da comunidade Invent Money, semana 38 de 2026.",
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
      { num: "01", label: "Fluidez (1-5)" },
      { num: "02", label: "Recomendação (1-5)" },
      { num: "03", label: "O que faria recomendar" },
      { num: "04", label: "Sugestões abertas" },
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
    sub: "Resultados da rodada aberta de feedback preenchida por 84 pessoas em pouco mais de 24 horas. É a maior amostra até aqui e a primeira coletada sem público específico — qualquer pessoa da base pôde responder. As perguntas cobrem fluidez do app, recomendação, o que faria recomendar com confiança e sugestões abertas.",
    metaWeekK: "Semana",
    metaWeekV: "38 · 2026",
    metaResponsesK: "Respostas",
    metaResponsesV: "84",
    metaFluidityK: "Fluidez média",
    metaFluidityV: "3,4/5",
    metaRecommendationK: "Recomendação média",
    metaRecommendationV: "3,4/5",
    days: [
      { day: "Dia 1", num: "57", unit: "respostas", label: "Maior volume de respostas" },
      { day: "Dia 2", num: "27", unit: "respostas", label: "Último dia da coleta" },
    ],
  },
  panorama: {
    kicker: "Indicadores-chave",
    metrics: [
      { num: "3,4", unit: "/5", label: "Fluidez média da experiência no app (n=84)." },
      { num: "3,4", unit: "/5", label: "Recomendariam a Invent Money hoje (n=84)." },
      { num: "54", unit: "%", label: "Recomendariam com nota 4 ou 5 — a maioria da base." },
      { num: "84", unit: "respostas", label: "A maior rodada de feedback até aqui, coletada em ~24 horas." },
    ],
  },
  q1: {
    num: "01",
    col: "Coluna G",
    title: "Numa escala de 1 a 5, quão fluida foi sua experiência geral no app?",
    metaType: "Escala numérica 1-5",
    metaResponses: "84 de 84 respostas",
    avg: "3,4",
    avgCap: "Média das 84 respostas",
    counts: [7, 8, 29, 23, 17],
    reading:
      "A distribuição é assimétrica pra cima: nota 3 é a moda (29 respostas), mas há 40 respostas ≥4 e apenas 15 ≤2. O produto convence a maioria, e as reclamações são específicas (aparecem em Q4), não gerais.",
  },
  q2: {
    num: "02",
    col: "Coluna J",
    title: "De 1 a 5, o quanto você recomendaria a Invent Money do jeito que está hoje?",
    metaType: "Escala numérica 1-5",
    metaResponses: "84 de 84 respostas",
    avg: "3,4",
    avgCap: "Média das 84 respostas",
    counts: [8, 13, 18, 27, 18],
    reading:
      "Recomendação e fluidez ficaram na mesma média (3,4), mas a recomendação tem cauda mais espalhada — 21 respostas em 1-2 e 45 em 4-5. Quem recomenda, recomenda com confiança; quem não recomenda, tem motivo específico (quase sempre a demora na aprovação dos vídeos).",
  },
  q3: {
    num: "03",
    col: "Coluna L",
    title: "O que faria você recomendar a Invent Money com confiança?",
    metaType: "Resposta aberta",
    metaResponses: "70 de 84 respostas",
    summaryKicker: "Resumo em uma linha",
    summaryLine:
      "Rapidez na análise dos vídeos e Pix como forma de pagamento são os dois pedidos mais repetidos para uma recomendação confiante.",
    answers: [
      {
        id: "Resposta",
        device: "Fluidez 5 · Rec 4",
        quote:
          "Ser pagamento via Pix ou alguma transação mais simples para sacar e mais rapidez para a aprovação dos vídeos, está demorando muito a análise.",
      },
      {
        id: "Resposta",
        device: "Fluidez 3 · Rec 3",
        quote:
          "Ainda não testei o app, mas várias pessoas relataram a demora para aprovar, vídeo que não sobe e etc.",
      },
      {
        id: "Resposta",
        device: "Fluidez 1 · Rec 2",
        quote:
          "Que acertem o erro de upload do vídeo para a plataforma.",
      },
      {
        id: "Resposta",
        device: "Fluidez 5 · Rec 3",
        quote:
          "Pagamento rápido, e o funcionamento em praticamente todos os celulares!",
      },
      {
        id: "Resposta",
        device: "Fluidez 3 · Rec 2",
        quote:
          "Se a análise dos vídeos fosse mais rápida.",
      },
      {
        id: "Resposta",
        device: "Fluidez 4 · Rec 5",
        quote:
          "Transparência, segurança, pagamentos em dia e um bom suporte aos usuários. Assim eu me sentiria mais confiante para recomendar.",
      },
      {
        id: "Resposta",
        device: "Fluidez 4 · Rec 3",
        quote:
          "Mais facilidade de enviar.",
      },
      {
        id: "Resposta",
        device: "Fluidez 3 · Rec 4",
        quote:
          "Em si poder gravar pela plataforma de vocês é realmente um diferencial muito bom. A crítica fica só para analisarem os vídeos mais rápido e verificar se está tudo ok ou não e já liberarem o valor — aí motiva a pessoa a gravar mais e recomendar mais a Invent Money.",
      },
    ],
  },
  q4: {
    num: "04",
    col: "Coluna B",
    title: "Sugestões, elogios ou críticas para a operação da Invent Money",
    metaType: "Resposta aberta",
    metaResponses: "79 de 84 respostas",
    summaryKicker: "Resumo em uma linha",
    summaryLine:
      "Elogios ao suporte a múltiplos aparelhos convivem com pedido urgente por análise mais rápida dos vídeos e Pix como opção de saque.",
    answers: [
      {
        id: "Resposta",
        device: "Fluidez 5 · Rec 4",
        quote:
          "Agilizar as análises dos vídeos.",
      },
      {
        id: "Resposta",
        device: "Fluidez 4 · Rec 4",
        quote:
          "Estou há 2 dias tentando upar um vídeo de uma tarefa e não consigo. Eu seleciono o vídeo, o site reconhece, mostra um quadro da preview, mas o botão de enviar não fica clicável. Além disso, já faz dias que tenho dois vídeos em análise.",
      },
      {
        id: "Resposta",
        device: "Fluidez 5 · Rec 4",
        quote:
          "Acho que os pagamentos deveriam ser mais práticos, finais de semana deveria contar, não somente dias úteis. O primeiro pagamento também deveria ser mais rápido — além de esperar bater o mínimo de 2h, tem que aguardar o dia que é liberado o saque, e se é numa sexta passa o final de semana todo pra receber.",
      },
      {
        id: "Resposta",
        device: "Fluidez 3 · Rec 3",
        quote:
          "O prazo para análise do vídeo é muito demorado e nas concorrentes são de horas, às vezes minutos, e já estão aprovados ou negados. Muito rápido a análise.",
      },
      {
        id: "Resposta",
        device: "Fluidez 5 · Rec 4",
        quote:
          "Sugestão é que poderia não demorar tanto para aprovar os vídeos e os pagamentos poderiam ser feitos via Pix. Parabéns pela plataforma dar a oportunidade para quem tem outros tipos de aparelhos.",
      },
      {
        id: "Resposta",
        device: "Fluidez 1 · Rec 1",
        quote:
          "Muito demorado ter vídeo aprovado.",
      },
      {
        id: "Resposta",
        device: "Fluidez 3 · Rec 2",
        quote:
          "Melhorem a questão do upload para a plataforma.",
      },
      {
        id: "Resposta",
        device: "Fluidez 3 · Rec 2",
        quote:
          "Quero elogiar por aceitar outros celulares — hoje em dia a câmera da maioria dos aparelhos é de ótima resolução, então isso é muito elogiável. Uma sugestão (já dada, pra reforçar): a forma de pagamento é muito complicada, poderia ser por Pix ou alguma forma mais simples de sacar. Outra: a análise não demorar tanto.",
      },
    ],
  },
  highlights: {
    num: "→",
    col: "Síntese",
    title: "Pontos fortes e principais melhorias",
    meta: "Temas extraídos das 84 respostas",
    positiveTitle: "Pontos fortes",
    positive: [
      { html: "<strong>Aceitar múltiplos modelos de celular</strong> é de longe o ponto positivo mais mencionado.", tally: "~20 menções" },
      { html: "<strong>Poder gravar direto pela câmera do celular</strong>, sem apps intermediários.", tally: "~10 menções" },
      { html: "<strong>Pagamento rápido / carteira / saque</strong> quando funciona é elogiado como diferencial.", tally: "~8 menções" },
      { html: "<strong>Praticidade da plataforma</strong> — descrita como intuitiva e fácil de usar.", tally: "~6 menções" },
    ],
    negativeTitle: "Melhorias mais citadas",
    negative: [
      { html: "<strong>Demora excessiva na análise/aprovação dos vídeos.</strong> Vários relatos de vídeos há 10+ dias em análise. É a crítica mais comum, longe.", tally: "~35 menções" },
      { html: "<strong>Falta de Pix como opção de pagamento.</strong> Pedido recorrente.", tally: "~15 menções" },
      { html: "<strong>Fricção no upload</strong> — vídeos que travam, botão de envio inativo, upload que reinicia. Mesmo padrão dos reports anteriores.", tally: "~12 menções" },
      { html: "<strong>Vídeos rejeitados por critérios que parecem inconsistentes.</strong>", tally: "~10 menções" },
      { html: "<strong>Poucas tarefas disponíveis / rodízio limitante.</strong> Pedido por variedade maior, especialmente tarefas manuais e artesanato.", tally: "~10 menções" },
      { html: "<strong>Suporte lento ou ausente</strong> — pedidos por SAC brasileiro e resolução mais rápida.", tally: "~6 menções" },
      { html: "<strong>Dependência do app Minute</strong> é criticada — a base quer app próprio da Invent Money.", tally: "~4 menções" },
    ],
  },
  closing: {
    kickerName: "Fechamento",
    kickerLabel: "Leitura geral das 84 respostas",
    titleLine1: "A base funciona.",
    titleAccent: "A análise dos vídeos é o gargalo",
    titleLine2Suffix: ".",
    body:
      "Em pouco mais de 24 horas, 84 pessoas preencheram o formulário aberto — a maior amostra até aqui. As médias ficam empatadas em 3,4/5 tanto na fluidez quanto na recomendação. O produto convence a maioria (40 pessoas deram fluidez ≥4, 45 recomendariam com nota 4-5), mas há um gargalo claro e único que aparece em ~35 das respostas abertas: a demora na análise/aprovação dos vídeos. Vários relatos citam vídeos parados há 10+ dias. O outro pedido mais forte é Pix como opção de saque (~15 menções). Fricções no upload e critérios de aprovação inconsistentes continuam aparecendo — os mesmos problemas relatados nos reports anteriores, agora numa base muito maior. Se um único ponto resolveria a maior parte da insatisfação, é a velocidade de aprovação dos vídeos.",
  },
};

// ————————————————————————————————————————————————————————————————
// English
// ————————————————————————————————————————————————————————————————
const en: Content = {
  docTitle: "Open Feedback — Invent Money",
  docDescription:
    "84 responses from the Invent Money community, week 38 of 2026.",
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
      { num: "01", label: "Fluidity (1–5)" },
      { num: "02", label: "Recommendation (1–5)" },
      { num: "03", label: "What would drive recommendation" },
      { num: "04", label: "Open suggestions" },
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
    sub: "Results from the open feedback round filled out by 84 people in just over 24 hours. This is the largest sample so far and the first collected without a specific audience — anyone in the base could respond. Questions cover app fluidity, recommendation, what would drive a confident recommendation, and open suggestions.",
    metaWeekK: "Week",
    metaWeekV: "38 · 2026",
    metaResponsesK: "Responses",
    metaResponsesV: "84",
    metaFluidityK: "Average fluidity",
    metaFluidityV: "3.4/5",
    metaRecommendationK: "Average recommendation",
    metaRecommendationV: "3.4/5",
    days: [
      { day: "Day 1", num: "57", unit: "responses", label: "Highest volume of responses" },
      { day: "Day 2", num: "27", unit: "responses", label: "Last day of collection" },
    ],
  },
  panorama: {
    kicker: "Key indicators",
    metrics: [
      { num: "3.4", unit: "/5", label: "Average fluidity of the app experience (n=84)." },
      { num: "3.4", unit: "/5", label: "Would recommend Invent Money as it is today (n=84)." },
      { num: "54", unit: "%", label: "Would recommend with a 4 or 5 — the majority of the base." },
      { num: "84", unit: "responses", label: "The largest feedback round so far, collected in ~24 hours." },
    ],
  },
  q1: {
    num: "01",
    col: "Column G",
    title: "From 1 to 5, how fluid was your overall experience in the app?",
    metaType: "1–5 numeric scale",
    metaResponses: "84 of 84 responses",
    avg: "3.4",
    avgCap: "Average of 84 responses",
    counts: [7, 8, 29, 23, 17],
    reading:
      "Distribution is skewed upward: score 3 is the mode (29 responses), but there are 40 responses ≥4 and only 15 ≤2. The product works for most people, and the complaints are specific (they show up in Q4), not general.",
  },
  q2: {
    num: "02",
    col: "Column J",
    title: "From 1 to 5, how much would you recommend Invent Money as it is today?",
    metaType: "1–5 numeric scale",
    metaResponses: "84 of 84 responses",
    avg: "3.4",
    avgCap: "Average of 84 responses",
    counts: [8, 13, 18, 27, 18],
    reading:
      "Recommendation and fluidity ended up at the same average (3.4), but recommendation has a wider tail — 21 responses at 1–2 and 45 at 4–5. Those who recommend, recommend confidently; those who don't have a specific reason (almost always slow video approval).",
  },
  q3: {
    num: "03",
    col: "Column L",
    title: "What would make you confidently recommend Invent Money?",
    metaType: "Open answer",
    metaResponses: "70 of 84 responses",
    summaryKicker: "One-line summary",
    summaryLine:
      "Faster video review and Pix as a payment option are the two most repeated requests for a confident recommendation.",
    answers: [
      { id: "Response", device: "Fluidity 5 · Rec 4", quote: "Payment via Pix or some simpler transaction to withdraw, and faster video approval — the review is taking way too long." },
      { id: "Response", device: "Fluidity 3 · Rec 3", quote: "I haven't tested the app yet, but several people reported slow approval, videos that don't upload, etc." },
      { id: "Response", device: "Fluidity 1 · Rec 2", quote: "Fix the video upload error on the platform." },
      { id: "Response", device: "Fluidity 5 · Rec 3", quote: "Fast payment, and it works on almost every phone!" },
      { id: "Response", device: "Fluidity 3 · Rec 2", quote: "If video review were faster." },
      { id: "Response", device: "Fluidity 4 · Rec 5", quote: "Transparency, security, on-time payments and good user support. That would make me feel confident enough to recommend." },
      { id: "Response", device: "Fluidity 4 · Rec 3", quote: "Easier way to submit videos." },
      { id: "Response", device: "Fluidity 3 · Rec 4", quote: "Being able to record right in your platform is a really solid differentiator. The only criticism is: review videos faster, check if everything's OK, and release the payment — that motivates people to record more and recommend Invent Money more." },
    ],
  },
  q4: {
    num: "04",
    col: "Column B",
    title: "Suggestions, praise or criticism for the Invent Money operation",
    metaType: "Open answer",
    metaResponses: "79 of 84 responses",
    summaryKicker: "One-line summary",
    summaryLine:
      "Praise for multi-device support coexists with an urgent request for faster video review and Pix as a withdrawal option.",
    answers: [
      { id: "Response", device: "Fluidity 5 · Rec 4", quote: "Speed up video review." },
      { id: "Response", device: "Fluidity 4 · Rec 4", quote: "I've been trying to upload a task video for 2 days and can't. I select the video, the site recognizes it, shows a preview, but the send button stays inactive. Plus, I've had two videos in review for days." },
      { id: "Response", device: "Fluidity 5 · Rec 4", quote: "I think payments should be more practical — weekends should count, not just weekdays. First payment should also be faster — beyond waiting to hit the 2h minimum, you have to wait for the withdrawal day, and if it's a Friday you spend the whole weekend waiting to get paid." },
      { id: "Response", device: "Fluidity 3 · Rec 3", quote: "The video review turnaround is way too long, while on competitors it's hours or even minutes to approve or reject. Review is very fast there." },
      { id: "Response", device: "Fluidity 5 · Rec 4", quote: "Suggestion: don't take so long to approve videos, and payments could be made via Pix. Kudos to the platform for giving the opportunity to people with other kinds of phones." },
      { id: "Response", device: "Fluidity 1 · Rec 1", quote: "Getting a video approved takes way too long." },
      { id: "Response", device: "Fluidity 3 · Rec 2", quote: "Improve the platform upload." },
      { id: "Response", device: "Fluidity 3 · Rec 2", quote: "Kudos for accepting other phones — most devices today have great cameras, so this is really praiseworthy. One suggestion (again, to reinforce): the payment method is very complicated, could be Pix or some simpler way to withdraw. And: video review shouldn't take so long." },
    ],
  },
  highlights: {
    num: "→",
    col: "Synthesis",
    title: "Strong points and main improvements",
    meta: "Themes extracted from all 84 responses",
    positiveTitle: "Strong points",
    positive: [
      { html: "<strong>Accepting multiple phone models</strong> is by far the most cited strength.", tally: "~20 mentions" },
      { html: "<strong>Recording straight from the phone camera</strong>, without middleman apps.", tally: "~10 mentions" },
      { html: "<strong>Fast payment / wallet / withdrawal</strong> when it works is praised as a differentiator.", tally: "~8 mentions" },
      { html: "<strong>Platform practicality</strong> — described as intuitive and easy to use.", tally: "~6 mentions" },
    ],
    negativeTitle: "Most cited improvements",
    negative: [
      { html: "<strong>Excessive delay in video review/approval.</strong> Several reports of videos stuck in review for 10+ days. By far the most common criticism.", tally: "~35 mentions" },
      { html: "<strong>Lack of Pix as a payment option.</strong> Recurring request.", tally: "~15 mentions" },
      { html: "<strong>Upload friction</strong> — videos that hang, send button inactive, uploads that restart. Same pattern as previous reports.", tally: "~12 mentions" },
      { html: "<strong>Videos rejected on seemingly inconsistent criteria.</strong>", tally: "~10 mentions" },
      { html: "<strong>Few tasks available / limiting rotation.</strong> Requests for more variety, especially manual and crafting tasks.", tally: "~10 mentions" },
      { html: "<strong>Slow or absent support</strong> — requests for Brazilian support and faster resolution.", tally: "~6 mentions" },
      { html: "<strong>Dependency on the Minute app</strong> is criticized — the base wants Invent Money's own app.", tally: "~4 mentions" },
    ],
  },
  closing: {
    kickerName: "Closing",
    kickerLabel: "General reading of the 84 responses",
    titleLine1: "The base works.",
    titleAccent: "Video review is the bottleneck",
    titleLine2Suffix: ".",
    body:
      "In just over 24 hours, 84 people filled out the open feedback form — the largest sample so far. Averages tied at 3.4/5 for both fluidity and recommendation. The product works for most people (40 rated fluidity ≥4, 45 would recommend at 4–5), but there's a clear, single bottleneck showing up in ~35 open answers: delay in video review/approval. Several reports mention videos stuck for 10+ days. The other strongest request is Pix as a withdrawal option (~15 mentions). Upload friction and inconsistent approval criteria still show up — the same problems reported in previous reports, now on a much larger base. If a single fix would resolve most of the dissatisfaction, it's the speed of video approval.",
  },
};

export const openFeedbackContent: Record<Lang, Content> = { en, pt };
