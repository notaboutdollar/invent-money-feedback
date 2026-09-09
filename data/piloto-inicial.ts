import type { Lang } from "@/components/LangProvider";

export type TagKey = "upload" | "validation" | "rules" | "bugs" | "feedback";

export type PositiveItem = { name: string; quote: string };
export type ImprovementItem = { name: string; tag: TagKey; quote: string };

// ————————————————————————————————————————————————————————————————
// Language-agnostic data
// ————————————————————————————————————————————————————————————————
export const pilotoInicialStats = {
  averageRecommendation: 9.4,
  averagePlatformExperience: 7.3,
  respondents: 17,
  wouldContinuePercent: 100,
};

export const pilotoInicialScores = {
  recommendation: [0, 0, 0, 0, 0, 1, 0, 0, 2, 2, 12],
  platform: [0, 1, 0, 1, 1, 1, 2, 0, 5, 1, 5],
};

export const tagStyles: Record<TagKey, string> = {
  upload: "bg-orange-50 text-orange-700 ring-orange-200",
  validation: "bg-amber-50 text-amber-700 ring-amber-200",
  rules: "bg-blue-50 text-blue-700 ring-blue-200",
  bugs: "bg-rose-50 text-rose-700 ring-rose-200",
  feedback: "bg-violet-50 text-violet-700 ring-violet-200",
};

// ————————————————————————————————————————————————————————————————
// Per-language content
// ————————————————————————————————————————————————————————————————
type Content = {
  docTitle: string;
  docDescription: string;
  brand: string;
  headerVersion: string;
  headerBack: string;
  heroLabelName: string;
  heroLabelMeta: string;
  heroTitleLine1: string;
  heroTitleLine2: string;
  heroSub: string;
  statRecommendation: string;
  statPlatform: string;
  statTrainers: string;
  statContinue: string;
  ratingsLabelName: string;
  ratingsLabelMeta: string;
  ratingsTitle: string;
  ratingsSub: string;
  chartRecommend: { title: string; subtitle: string };
  chartPlatform: { title: string; subtitle: string };
  highlightsLabelName: string;
  highlightsLabelMeta: string;
  highlightsTitle: string;
  highlightsSub: string;
  improvementsLabelName: string;
  improvementsLabelMeta: string;
  improvementsTitle: string;
  improvementsSub: string;
  role: string;
  footerCopy: (year: number) => string;
  tagLabel: Record<TagKey, string>;
  chartAverageOf: (n: number) => string;
  chartTooltip: (n: number, i: number) => string;
  chartAriaBar: (i: number, n: number) => string;
  feedback: PositiveItem[];
  improvements: ImprovementItem[];
};

const en: Content = {
  docTitle: "Community Feedback — Invent Money",
  docDescription:
    "What the first members of the Invent Money community are saying.",
  brand: "feedback trainers",
  headerVersion: "piloto inicial",
  headerBack: "← Latest report",
  heroLabelName: "Invent Money",
  heroLabelMeta: "AI Trainers Pilot",
  heroTitleLine1: "What the initial community",
  heroTitleLine2: "is saying.",
  heroSub: "Feedback from the first pilot trainers.",
  statRecommendation: "Average recommendation score",
  statPlatform: "Platform score",
  statTrainers: "Trainers in the pilot",
  statContinue: "Want to continue in the next round",
  ratingsLabelName: "Ratings",
  ratingsLabelMeta: "17 Responses",
  ratingsTitle: "How the pilot was rated.",
  ratingsSub:
    "Two readings that tell the same story: the opportunity is compelling, but the platform still has friction worth addressing.",
  chartRecommend: {
    title: "Would recommend to a friend",
    subtitle: "0 = definitely not · 10 = definitely yes",
  },
  chartPlatform: {
    title: "Platform experience",
    subtitle: "0 = terrible · 10 = excellent",
  },
  highlightsLabelName: "Highlights",
  highlightsLabelMeta: "What worked",
  highlightsTitle: "What they liked most.",
  highlightsSub: "What trainers highlighted as strengths of the pilot.",
  improvementsLabelName: "Improvements",
  improvementsLabelMeta: "9 Reports",
  improvementsTitle: "What needs to improve.",
  improvementsSub:
    "Frustrations and bugs reported in the pilot — the raw material for the platform's next round.",
  role: "AI Trainer",
  footerCopy: (year) => `© ${year} Invent Money — Community feedback`,
  tagLabel: {
    upload: "Upload",
    validation: "Validation",
    rules: "Rules",
    bugs: "Bugs",
    feedback: "Feedback",
  },
  chartAverageOf: (n) => `avg of ${n} responses`,
  chartTooltip: (n, i) =>
    `${n} ${n === 1 ? "person rated" : "people rated"} ${i}`,
  chartAriaBar: (i, n) =>
    `Rating ${i}: ${n} ${n === 1 ? "response" : "responses"}`,
  feedback: [
    { name: "Stephany", quote: "The bonuses are really great!" },
    {
      name: "Lucas",
      quote: "The tasks are easy — I just ask that you keep the project going.",
    },
    {
      name: "Luiz",
      quote: "Great pay, good variety of tasks, and lots of bonuses.",
    },
    {
      name: "Fernanda",
      quote:
        "I liked being able to record straight from the camera and then upload.",
    },
    { name: "Italo", quote: "The tasks are easy." },
    {
      name: "Cauã",
      quote:
        "It's a well-structured platform that pays well — even with bugs that are normal for a beta version.",
    },
    {
      name: "Amanda",
      quote:
        "Being able to record straight from the phone and also from the platform, the pay and the bonuses really motivate me to keep going.",
    },
    {
      name: "Ana Maria",
      quote:
        "I loved the freedom to do certain tasks, like cooking, for example. Your support was amazing — nothing to complain about.",
    },
    {
      name: "Emily",
      quote:
        "The practicality of the platform and the flexibility to record videos of everyday activities whenever it was most convenient.",
    },
    {
      name: "Eder",
      quote:
        "The project is really cool and has a good variety of allowed tasks. I get that it's in beta, and betas mean bugs and learning.",
    },
    { name: "Natan", quote: "The platform is very intuitive, easy to use." },
    {
      name: "Fabrício",
      quote: "Great pay and bonuses. Good work — bring on the new tasks!",
    },
    { name: "Marcia", quote: "The hourly pay for videos was a great incentive." },
    {
      name: "Bruno",
      quote:
        "I liked the project's proposal and the opportunity to help train AI models. The platform is simple to use and the recording flow is intuitive.",
    },
    { name: "Allan", quote: "I liked the site." },
    { name: "Pedro", quote: "The practicality." },
    {
      name: "Igor",
      quote: "Payment in crypto — I really enjoyed that part of the pilot.",
    },
  ],
  improvements: [
    {
      name: "Amanda",
      tag: "upload",
      quote:
        "Uploading videos takes way too long — out of the 22 I recorded, only 5 went through. Trying to upload more than 5 made the platform freeze.",
    },
    {
      name: "Fernanda",
      tag: "upload",
      quote:
        "Uploading via iPhone didn't work. I had to export to Drive and download on the computer to get it uploaded. That cost me hours I could have been recording.",
    },
    {
      name: "Natan",
      tag: "bugs",
      quote:
        "Videos longer than 10 minutes wouldn't upload. And when recording straight in the platform, videos over 10 min closed on their own with no warning — I lost work.",
    },
    {
      name: "Eder",
      tag: "upload",
      quote:
        "Almost every time I uploaded, it would stop and bounce back to the start screen, forcing me to begin from scratch. And when it did complete, the video sometimes stayed as “sending” forever.",
    },
    {
      name: "Bruno",
      tag: "validation",
      quote:
        "Most rejections were for “low quality”, but videos recorded the exact same way were approved, while others were rejected for the same reason. It was hard to understand what to fix.",
    },
    {
      name: "Eder",
      tag: "validation",
      quote:
        "I had a video rejected for missing audio, and another approved without audio. The criteria felt inconsistent between videos in the same context.",
    },
    {
      name: "Cauã",
      tag: "feedback",
      quote:
        "Improve the platform by making reviews faster and the feedback on each video more specific.",
    },
    {
      name: "Marcia",
      tag: "rules",
      quote:
        "My rejected videos were all because both hands weren't showing. I recorded everything with the camera at 1x because I didn't know — it should be clearer that it needs to be at 0.5x.",
    },
    {
      name: "Amanda",
      tag: "bugs",
      quote:
        "Sometimes the site would freeze saying I was using a VPN, even though I didn't have a VPN on my device. I had to reload the page several times to get it working again.",
    },
  ],
};

const pt: Content = {
  docTitle: "Feedback da Comunidade — Invent Money",
  docDescription:
    "O que os primeiros membros da comunidade Invent Money estão dizendo.",
  brand: "feedback trainers",
  headerVersion: "piloto inicial",
  headerBack: "← Report mais recente",
  heroLabelName: "Invent Money",
  heroLabelMeta: "Piloto AI Trainers",
  heroTitleLine1: "O que a comunidade inicial",
  heroTitleLine2: "está dizendo.",
  heroSub: "Feedbacks dos primeiros trainers do piloto.",
  statRecommendation: "Nota média de recomendação",
  statPlatform: "Nota da plataforma",
  statTrainers: "Trainers no piloto",
  statContinue: "Querem continuar na próxima rodada",
  ratingsLabelName: "Avaliação",
  ratingsLabelMeta: "17 Respostas",
  ratingsTitle: "Como o piloto foi avaliado.",
  ratingsSub:
    "Duas leituras que contam a mesma história: a oportunidade convence, mas a plataforma ainda tem fricção que vale endereçar.",
  chartRecommend: {
    title: "Recomendaria a um amigo",
    subtitle: "0 = de jeito nenhum · 10 = com certeza",
  },
  chartPlatform: {
    title: "Experiência na plataforma",
    subtitle: "0 = péssima · 10 = excelente",
  },
  highlightsLabelName: "Elogios",
  highlightsLabelMeta: "O que funcionou",
  highlightsTitle: "O que mais gostaram.",
  highlightsSub: "O que os trainers destacaram como pontos fortes do piloto.",
  improvementsLabelName: "Melhorias",
  improvementsLabelMeta: "9 Relatos",
  improvementsTitle: "O que precisa melhorar.",
  improvementsSub:
    "Frustrações e bugs relatados no piloto — a matéria-prima para a próxima rodada da plataforma.",
  role: "Trainer de IA",
  footerCopy: (year) => `© ${year} Invent Money — Feedback da comunidade`,
  tagLabel: {
    upload: "Upload",
    validation: "Validação",
    rules: "Regras",
    bugs: "Bugs",
    feedback: "Feedback",
  },
  chartAverageOf: (n) => `média de ${n} respostas`,
  chartTooltip: (n, i) =>
    `${n} ${n === 1 ? "pessoa votou" : "pessoas votaram"} nota ${i}`,
  chartAriaBar: (i, n) =>
    `Nota ${i}: ${n} ${n === 1 ? "resposta" : "respostas"}`,
  feedback: [
    { name: "Stephany", quote: "Os bônus são muito bons!" },
    {
      name: "Lucas",
      quote: "A facilidade das tarefas — só peço que continuem o projeto.",
    },
    { name: "Luiz", quote: "Ótimo valor, boa variedade de tasks e muito bônus." },
    {
      name: "Fernanda",
      quote: "Gostei de poder gravar direto na câmera e depois fazer o upload.",
    },
    { name: "Italo", quote: "Facilidade das tarefas." },
    {
      name: "Cauã",
      quote:
        "É uma plataforma bem estruturada e paga bem. Mesmo possuindo bugs que são normais para uma versão beta.",
    },
    {
      name: "Amanda",
      quote:
        "A possibilidade de gravar direto do celular e também da plataforma, os valores pagos e os bônus incentivam bastante a continuar.",
    },
    {
      name: "Ana Maria",
      quote:
        "Gostei da liberdade de poder executar algumas tarefas, como cozinhar, por exemplo. O suporte de vocês foi incrível, nada a reclamar.",
    },
    {
      name: "Emily",
      quote:
        "A praticidade da plataforma e a flexibilidade para gravar vídeos de atividades do dia a dia no horário que fosse mais conveniente.",
    },
    {
      name: "Eder",
      quote:
        "O projeto é muito legal e tem uma variedade de tarefas permitidas. Entendo estar em beta, e betas são sinônimos de erros e aprendizado.",
    },
    { name: "Natan", quote: "Plataforma bem intuitiva, fácil de mexer." },
    {
      name: "Fabrício",
      quote: "Valores e bônus muito bons. Bom trabalho — que venham novas tarefas!",
    },
    { name: "Marcia", quote: "O valor pago pela hora de vídeos foi um ótimo incentivo." },
    {
      name: "Bruno",
      quote:
        "Gostei da proposta do projeto e da oportunidade de contribuir para o treinamento de modelos de IA. A plataforma é simples de usar e o fluxo de gravação é intuitivo.",
    },
    { name: "Allan", quote: "Gostei do site." },
    { name: "Pedro", quote: "A praticidade." },
    {
      name: "Igor",
      quote: "Pagamento em crypto — curti bastante essa parte do piloto.",
    },
  ],
  improvements: [
    {
      name: "Amanda",
      tag: "upload",
      quote:
        "Subir os vídeos demora muito pra carregar — dos 22 que gravei, apenas 5 subiram. Ao tentar subir mais do que 5, a plataforma travava.",
    },
    {
      name: "Fernanda",
      tag: "upload",
      quote:
        "O upload via iPhone não funcionava. Tive que exportar pro Drive e baixar no computador pra conseguir subir. Isso tirou horas que eu poderia estar gravando.",
    },
    {
      name: "Natan",
      tag: "bugs",
      quote:
        "Vídeos com mais de 10 minutos não faziam upload. E quando gravava direto pela plataforma, o vídeo acima de 10 min fechava sozinho, sem alerta — sumiram trabalhos.",
    },
    {
      name: "Eder",
      tag: "upload",
      quote:
        "Ao subir vídeos, quase sempre o upload parava e voltava pra tela inicial, obrigando a começar do zero. E quando completava, o vídeo às vezes ficava como “enviando” infinito.",
    },
    {
      name: "Bruno",
      tag: "validation",
      quote:
        "A maioria das rejeições foi por “baixa qualidade”, mas vídeos gravados exatamente do mesmo jeito foram aprovados, enquanto outros foram rejeitados pelo mesmo motivo. Ficou difícil entender o que corrigir.",
    },
    {
      name: "Eder",
      tag: "validation",
      quote:
        "Tive vídeo reprovado por não ter áudio, e outro aprovado sem áudio. Os critérios pareciam inconsistentes entre vídeos com o mesmo contexto.",
    },
    {
      name: "Cauã",
      tag: "feedback",
      quote:
        "Melhorem a plataforma deixando as análises mais rápidas e o feedback de cada vídeo mais específico.",
    },
    {
      name: "Marcia",
      tag: "rules",
      quote:
        "Meus rejeitados foram todos por não aparecerem as duas mãos. Gravei tudo com a câmera em 1x porque não sabia disso — deveria ficar mais claro que precisa estar em 0.5x.",
    },
    {
      name: "Amanda",
      tag: "bugs",
      quote:
        "Algumas vezes o site travava indicando que eu estava usando VPN, mesmo sem ter VPN no dispositivo. Precisei recarregar a página várias vezes pra normalizar.",
    },
  ],
};

export const pilotoInicialContent: Record<Lang, Content> = { en, pt };
