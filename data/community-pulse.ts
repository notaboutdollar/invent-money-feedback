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
    metaPeriodK: string;
    metaPeriodV: string;
    metaResponsesK: string;
    metaResponsesV: string;
    metaTestersK: string;
    metaTestersV: string;
    metaDaysK: string;
    metaDaysV: string;
    days: { day: string; num: string; unit: string; label: string }[];
  };
  panorama: {
    kicker: string;
    metrics: { num: string; unit: string; label: string }[];
  };
  q1: BarQuestion;
  q2: RatingQuestion;
  q3: BarQuestion;
  q4: RatingQuestion;
  q5: SummaryQuestion;
  q6: SummaryQuestion;
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
  docTitle: "Pulso da Comunidade — Invent Money",
  docDescription:
    "Feedback de 12 testers da comunidade, 13–14 de setembro de 2026.",
  brand: {
    name: "Invent Money",
    role: "Feedback da comunidade",
    period: "Pulso da comunidade\n13-14/09/2026",
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
      { num: "03", label: "Erros enfrentados" },
      { num: "04", label: "Recomendação (1-5)" },
      { num: "05", label: "O que faria recomendar" },
      { num: "06", label: "Sugestões abertas" },
    ],
    closingSection: "Fechamento",
    closingItem: "Leitura geral",
    olderSection: "Reports anteriores",
    olderLinks: [
      { href: "/report/set-2026-beta-trainers", label: "Beta trainers (04-07/09)" },
      { href: "/report/set-2026-piloto-inicial", label: "Piloto inicial" },
    ],
  },
  hero: {
    kickerName: "Invent Money",
    kickerLabel: "Feedback aberto da comunidade",
    titleLine1: "Pulso da comunidade",
    titleAccent: "13 e 14 de setembro",
    titleLine2Suffix: " de 2026.",
    sub: "Resultados do novo formulário de feedback — com perguntas atualizadas — preenchido por 12 testers da comunidade em cerca de 24 horas. A rodada cobre sistema operacional, fluidez do app, erros enfrentados, recomendação e sugestões abertas. Diferente do report anterior, focado nas trainers profissionais contratadas pela NIDO, esta amostra reflete a comunidade mais ampla de usuários do app.",
    metaPeriodK: "Período de coleta",
    metaPeriodV: "13-14/09/2026",
    metaResponsesK: "Respostas",
    metaResponsesV: "12",
    metaTestersK: "Testers",
    metaTestersV: "12",
    metaDaysK: "Dias cobertos",
    metaDaysV: "2",
    days: [
      { day: "Sáb. 13/09", num: "8", unit: "respostas", label: "Dia 1, início da coleta" },
      { day: "Dom. 14/09", num: "4", unit: "respostas", label: "Dia 2, último dia" },
    ],
  },
  panorama: {
    kicker: "Indicadores-chave",
    metrics: [
      { num: "3,3", unit: "/5", label: "Fluidez média da experiência no app." },
      { num: "3,7", unit: "/5", label: "Recomendariam a Invent Money hoje." },
      { num: "42", unit: "%", label: "Relataram o app travando ou fechando sozinho." },
      { num: "12", unit: "testers", label: "Respostas coletadas em ~24h, divididas igualmente entre iOS e Android." },
    ],
  },
  q1: {
    num: "01",
    col: "Coluna E",
    title: "Qual sistema operacional você usou no teste?",
    metaType: "Múltipla escolha",
    metaResponses: "12 de 12 respostas",
    bars: [
      { label: "iOS (iPhone)", pct: 50, count: "50% · 6 de 12" },
      { label: "Android", pct: 50, count: "50% · 6 de 12", muted: true },
    ],
    reading:
      "A base ficou perfeitamente dividida entre as duas plataformas. Do lado iOS apareceram iPhone 12, 13, 13 Pro, X, 11 Pro Max e 12 Pro Max; do lado Android, Redmi 13 Pro 5G, Poco C75, Poco X8 Pro, Realme Note 60X e dois Samsung (S21+ e A55). A diversidade de aparelhos é maior que na rodada anterior, que teve apenas 3 modelos.",
  },
  q2: {
    num: "02",
    col: "Coluna I",
    title: "Numa escala de 1 a 5, quão fluida foi sua experiência geral no app?",
    metaType: "Escala numérica 1-5",
    metaResponses: "12 de 12 respostas",
    avg: "3,3",
    avgCap: "Média das 12 respostas",
    counts: [0, 2, 6, 3, 1],
    reading:
      "A maioria das notas ficou concentrada em 3 (6 de 12), com uma cauda de duas notas baixas e uma única nota máxima. Comparado à rodada anterior — onde a fluidez ficou dividida entre nota 1 (iPhone) e nota 4 (Android) — esta amostra é mais homogênea, sem o mesmo contraste forte entre plataformas.",
  },
  q3: {
    num: "03",
    col: "Coluna J",
    title: "Você enfrentou algum erro durante o uso?",
    metaType: "Múltipla escolha (várias opções)",
    metaResponses: "12 de 12 respostas",
    bars: [
      { label: "Erro na hora de fazer upload do vídeo", pct: 50, count: "50% · 6 de 12" },
      { label: "App travou ou fechou sozinho", pct: 42, count: "42% · 5 de 12" },
      { label: "Erro ao gravar o vídeo", pct: 42, count: "42% · 5 de 12", muted: true },
      { label: "Vídeo enviado, mas horas não contaram no app", pct: 17, count: "17% · 2 de 12", muted: true },
    ],
    reading:
      "Como a pergunta permite marcar mais de uma opção, os percentuais não somam 100%. Metade da base teve problema no upload, e travamentos completos do app apareceram em 5 das 12 respostas — o mesmo tipo de falha relatado pelas trainers profissionais na rodada anterior. Outras 5 pessoas optaram por anexar um print do erro em vez de descrever por texto.",
  },
  q4: {
    num: "04",
    col: "Coluna P",
    title: "Numa escala de 1 a 5, o quanto você recomendaria a Invent Money do jeito que está hoje?",
    metaType: "Escala numérica 1-5",
    metaResponses: "12 de 12 respostas",
    avg: "3,7",
    avgCap: "Média das 12 respostas",
    counts: [0, 0, 5, 6, 1],
    reading:
      "A recomendação ficou concentrada em 3 e 4 (11 das 12 respostas), com uma única nota máxima e nenhuma nota mínima — um quadro bem mais positivo que a rodada com as trainers profissionais, que teve recomendação quase unânime na nota mais baixa. Fora do contexto de teste intensivo e recorrente, a percepção geral do produto parece mais favorável.",
  },
  q5: {
    num: "05",
    col: "Coluna Q",
    title: "O que faria você recomendar a Invent Money com confiança pra sua audiência ou amigos?",
    metaType: "Resposta aberta",
    metaResponses: "8 de 12 respostas",
    summaryKicker: "Resumo em uma linha",
    summaryLine:
      "Rapidez na análise dos vídeos e confiança na plataforma aparecem como os dois fatores mais citados para uma recomendação com confiança.",
    answers: [
      { id: "Kristina", device: "Realme Note 60X", quote: "Postaria nos status das redes sociais e indicaria pra amigos, familiares e vizinhos etc." },
      { id: "Alessandra", device: "iPhone X", quote: "mostraria os meus ganhos" },
      { id: "Rebeca", device: "Poco C75", quote: "Que aceita outros aparelhos" },
      { id: "Larissa", device: "iPhone 11 Pro Max", quote: "Agilidade na análise dos vídeos" },
      { id: "Gabriel", device: "iPhone 13", quote: "Praticidade e confiança na plataforma" },
      { id: "Elienay", device: "Poco X8 Pro", quote: "A possibilidade de gravar de outros modelos de smartphone, o que acaba incluindo o público." },
      { id: "Thais", device: "Samsung A55", quote: "O fato dela aceitar outros celulares." },
      { id: "Lívia", device: "Redmi 13 Pro 5G", quote: "Pagar melhor." },
    ],
  },
  q6: {
    num: "06",
    col: "Coluna R",
    title: "Sugestões, elogios ou críticas para a operação da Invent Money:",
    metaType: "Resposta aberta",
    metaResponses: "10 de 12 respostas · 2 fora do escopo",
    summaryKicker: "Resumo em uma linha",
    summaryLine:
      "Pedidos por mais variedade e agilidade nas tarefas convivem com críticas à demora na análise dos vídeos e ao rigor das aprovações.",
    answers: [
      { id: "Kristina", device: "Realme Note 60X", quote: "As análises mesmo" },
      { id: "Alessandra", device: "iPhone X", quote: "Um dos melhores app que já vir até porque permite outros aparelhos celulares e gostaria que resolvesse o problemas das tarefas que não estão aparecendo pra mim no meu painel do aplicativo." },
      { id: "Rebeca", device: "Poco C75", quote: "Precisa melhorar as tarefas que são muito limitadas, tinha que explorar mais colocando outras tarefas mas descrevendo o que tem fazer" },
      { id: "Larissa", device: "iPhone 11 Pro Max", quote: "Tempo de resposta para aceitar os vídeos, eu ainda estou esperando desde 11.09.2026" },
      { id: "Ana Laura", device: "iPhone 12 Pro Max", quote: "Agilisar a análise dos vídeos, e suporte brasileiro" },
      { id: "Lívia", device: "Redmi 13 Pro 5G", quote: "Mais tarefas pra digital e parar de ficar reprovando tudo" },
      { id: "Gabriel", device: "iPhone 13", quote: "Melhorar a forma de envio." },
      { id: "Elienay", device: "Poco X8 Pro", quote: "Ser menos rígidos em uma avaliação que por segundos não apareça a mão em tarefas manuais" },
      { id: "Vania", device: "Samsung S21+", quote: "Sugestão seria colocar mais tarefas para ser realizadas, principalmente de pets, como brincar e também leitura para treinar a voz da IA. Crítica seria a demora que a Invent Money tem para avaliar os vídeos e aprova-los, devem melhorar urgentemente isso." },
      { id: "Thais", device: "Samsung A55", quote: "tarefas da cozinha" },
    ],
  },
  highlights: {
    num: "→",
    col: "Síntese",
    title: "Pontos fortes e principais melhorias",
    meta: "Extraídos das respostas de todas as 12 pessoas",
    positiveTitle: "Pontos fortes",
    positive: [
      { html: "<strong>Aceitar muitos tipos de aparelhos</strong> aparece como o principal ponto positivo — inclusive fora dos 3 modelos testados pelas trainers profissionais.", tally: "2 relatos" },
      { html: "<strong>Rapidez pra aceitar o vídeo</strong> é citada repetidamente como ponto forte.", tally: "3 relatos" },
      { html: "<strong>Velocidade do pagamento/saque</strong> — desde disponibilizar na carteira até saque instantâneo.", tally: "3 relatos" },
      { html: "<strong>Aceitar outros modelos de celular</strong> reforça a percepção de acessibilidade da plataforma.", tally: "3 relatos" },
    ],
    negativeTitle: "Melhorias mais citadas",
    negative: [
      { html: "<strong>Fricção no upload do vídeo.</strong> Metade da base relatou erro nessa etapa.", tally: "6 relatos" },
      { html: "<strong>App trava ou fecha sozinho.</strong> Mesmo padrão de falha relatado pelas trainers profissionais na rodada anterior.", tally: "5 relatos" },
      { html: "<strong>Análise/aprovação dos vídeos lenta ou rígida demais.</strong> Inclui um caso esperando desde 11/09.", tally: "4 relatos" },
      { html: "<strong>Tarefas não aparecem ou a variedade é limitada.</strong> Pedidos específicos por mais tarefas com pets e no formato digital.", tally: "4 relatos" },
      { html: "<strong>Vídeo enviado, mas as horas não contaram no app.</strong>", tally: "2 relatos" },
    ],
  },
  closing: {
    kickerName: "Fechamento",
    kickerLabel: "Leitura geral das 12 respostas em 2 dias",
    titleLine1: "A comunidade aprova.",
    titleAccent: "Mas quer mais agilidade",
    titleLine2Suffix: ".",
    body:
      "Em pouco mais de 24 horas, 12 testers da comunidade — bem além do grupo de trainers profissionais — responderam ao novo formulário de feedback. A experiência é percebida de forma bem mais positiva que na rodada anterior: fluidez média de 3,3/5 e recomendação de 3,7/5, sem o mesmo contraste duro entre notas altas e baixas. Ainda assim, os mesmos dois problemas técnicos persistem — travamentos do app (42% dos relatos) e fricção no upload (metade da base) — ao lado de um pedido recorrente por mais variedade de tarefas e agilidade na aprovação dos vídeos. É um sinal de que a base do produto está mais estável para o público geral, mas os pontos de atrito técnico identificados com as trainers profissionais seguem sem solução.",
  },
};

// ————————————————————————————————————————————————————————————————
// English
// ————————————————————————————————————————————————————————————————
const en: Content = {
  docTitle: "Community Pulse — Invent Money",
  docDescription:
    "Feedback from 12 community testers, September 13–14, 2026.",
  brand: {
    name: "Invent Money",
    role: "Community feedback",
    period: "Community pulse\n09/13-14/2026",
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
      { num: "03", label: "Errors faced" },
      { num: "04", label: "Recommendation (1–5)" },
      { num: "05", label: "What would drive recommendation" },
      { num: "06", label: "Open suggestions" },
    ],
    closingSection: "Closing",
    closingItem: "Overall reading",
    olderSection: "Previous reports",
    olderLinks: [
      { href: "/report/set-2026-beta-trainers", label: "Beta trainers (09/04–07)" },
      { href: "/report/set-2026-piloto-inicial", label: "Initial pilot" },
    ],
  },
  hero: {
    kickerName: "Invent Money",
    kickerLabel: "Open community feedback",
    titleLine1: "Community pulse",
    titleAccent: "September 13 and 14",
    titleLine2Suffix: ", 2026.",
    sub: "Results from the new feedback form — with updated questions — filled out by 12 community testers over about 24 hours. This round covers operating system, app fluidity, errors faced, recommendation, and open suggestions. Unlike the previous report, focused on the professional trainers hired by NIDO, this sample reflects the broader community of app users.",
    metaPeriodK: "Collection period",
    metaPeriodV: "09/13-14/2026",
    metaResponsesK: "Responses",
    metaResponsesV: "12",
    metaTestersK: "Testers",
    metaTestersV: "12",
    metaDaysK: "Days covered",
    metaDaysV: "2",
    days: [
      { day: "Sat. 09/13", num: "8", unit: "responses", label: "Day 1, collection start" },
      { day: "Sun. 09/14", num: "4", unit: "responses", label: "Day 2, last day" },
    ],
  },
  panorama: {
    kicker: "Key indicators",
    metrics: [
      { num: "3.3", unit: "/5", label: "Average fluidity of the app experience." },
      { num: "3.7", unit: "/5", label: "Would recommend Invent Money as it is today." },
      { num: "42", unit: "%", label: "Reported the app crashing or freezing during use." },
      { num: "12", unit: "testers", label: "Responses collected over ~24h, evenly split between iOS and Android." },
    ],
  },
  q1: {
    num: "01",
    col: "Column E",
    title: "Which operating system did you use in the test?",
    metaType: "Multiple choice",
    metaResponses: "12 of 12 responses",
    bars: [
      { label: "iOS (iPhone)", pct: 50, count: "50% · 6 of 12" },
      { label: "Android", pct: 50, count: "50% · 6 of 12", muted: true },
    ],
    reading:
      "The base was perfectly split between the two platforms. On iOS: iPhone 12, 13, 13 Pro, X, 11 Pro Max, and 12 Pro Max; on Android: Redmi 13 Pro 5G, Poco C75, Poco X8 Pro, Realme Note 60X, and two Samsungs (S21+ and A55). Device diversity is wider than the previous round, which only saw 3 models.",
  },
  q2: {
    num: "02",
    col: "Column I",
    title: "From 1 to 5, how fluid was your overall experience in the app?",
    metaType: "1–5 numeric scale",
    metaResponses: "12 of 12 responses",
    avg: "3.3",
    avgCap: "Average of 12 responses",
    counts: [0, 2, 6, 3, 1],
    reading:
      "Most scores clustered at 3 (6 of 12), with a tail of two low scores and a single top score. Compared to the previous round — where fluidity split between 1 (iPhone) and 4 (Android) — this sample is more homogeneous, without the same sharp contrast between platforms.",
  },
  q3: {
    num: "03",
    col: "Column J",
    title: "Did you encounter any errors while using the app?",
    metaType: "Multiple choice (select all)",
    metaResponses: "12 of 12 responses",
    bars: [
      { label: "Error while uploading the video", pct: 50, count: "50% · 6 of 12" },
      { label: "App crashed or closed by itself", pct: 42, count: "42% · 5 of 12" },
      { label: "Error while recording the video", pct: 42, count: "42% · 5 of 12", muted: true },
      { label: "Video sent, but hours didn't count in the app", pct: 17, count: "17% · 2 of 12", muted: true },
    ],
    reading:
      "Since this question allows more than one option, percentages don't add up to 100%. Half the base had an upload problem, and complete app crashes showed up in 5 of 12 responses — the same type of failure reported by the professional trainers in the previous round. 5 other people chose to attach a screenshot of the error instead of describing it in text.",
  },
  q4: {
    num: "04",
    col: "Column P",
    title: "From 1 to 5, how much would you recommend Invent Money as it is today?",
    metaType: "1–5 numeric scale",
    metaResponses: "12 of 12 responses",
    avg: "3.7",
    avgCap: "Average of 12 responses",
    counts: [0, 0, 5, 6, 1],
    reading:
      "Recommendation clustered at 3 and 4 (11 of 12 responses), with a single top score and no bottom score — a much more positive picture than the professional trainers' round, which had almost unanimous recommendation at the lowest score. Outside the context of intensive, recurring testing, the overall perception of the product seems more favorable.",
  },
  q5: {
    num: "05",
    col: "Column Q",
    title: "What would make you confidently recommend Invent Money to your audience or friends?",
    metaType: "Open answer",
    metaResponses: "8 of 12 responses",
    summaryKicker: "One-line summary",
    summaryLine:
      "Faster video review and trust in the platform show up as the two most cited factors for a confident recommendation.",
    answers: [
      { id: "Kristina", device: "Realme Note 60X", quote: "I'd post it on my social media status and recommend it to friends, family, and neighbors, etc." },
      { id: "Alessandra", device: "iPhone X", quote: "I'd show my earnings." },
      { id: "Rebeca", device: "Poco C75", quote: "That it accepts other devices." },
      { id: "Larissa", device: "iPhone 11 Pro Max", quote: "Speed in reviewing the videos." },
      { id: "Gabriel", device: "iPhone 13", quote: "Practicality and trust in the platform." },
      { id: "Elienay", device: "Poco X8 Pro", quote: "The possibility of recording from other smartphone models, which ends up including more people." },
      { id: "Thais", device: "Samsung A55", quote: "The fact that it accepts other phones." },
      { id: "Lívia", device: "Redmi 13 Pro 5G", quote: "Pay better." },
    ],
  },
  q6: {
    num: "06",
    col: "Column R",
    title: "Suggestions, praise or criticism for the Invent Money operation:",
    metaType: "Open answer",
    metaResponses: "10 of 12 responses · 2 out of scope",
    summaryKicker: "One-line summary",
    summaryLine:
      "Requests for more task variety and speed sit alongside criticism of slow video review and strict approvals.",
    answers: [
      { id: "Kristina", device: "Realme Note 60X", quote: "The reviews themselves." },
      { id: "Alessandra", device: "iPhone X", quote: "One of the best apps I've seen, since it accepts other devices — I'd like it to fix the issue of tasks not showing up on my dashboard." },
      { id: "Rebeca", device: "Poco C75", quote: "The tasks need improvement, they're very limited — they should explore more, adding other tasks while describing what needs to be done." },
      { id: "Larissa", device: "iPhone 11 Pro Max", quote: "Response time to approve videos — I'm still waiting since 09/11/2026." },
      { id: "Ana Laura", device: "iPhone 12 Pro Max", quote: "Speed up video review, and Brazilian support." },
      { id: "Lívia", device: "Redmi 13 Pro 5G", quote: "More digital tasks, and stop rejecting everything." },
      { id: "Gabriel", device: "iPhone 13", quote: "Improve the way videos are sent." },
      { id: "Elienay", device: "Poco X8 Pro", quote: "Be less strict in an evaluation where, for a few seconds, the hand doesn't appear during manual tasks." },
      { id: "Vania", device: "Samsung S21+", quote: "My suggestion would be to add more tasks to do, especially with pets — like playing — and also reading aloud to train the AI's voice. My criticism is the time Invent Money takes to review and approve videos — that needs urgent improvement." },
      { id: "Thais", device: "Samsung A55", quote: "Kitchen tasks." },
    ],
  },
  highlights: {
    num: "→",
    col: "Synthesis",
    title: "Strong points and main improvements",
    meta: "Extracted from all 12 responses",
    positiveTitle: "Strong points",
    positive: [
      { html: "<strong>Accepting many types of devices</strong> stands out as the top strength — reaching beyond the 3 models tested by the professional trainers.", tally: "2 reports" },
      { html: "<strong>Speed accepting the video</strong> is repeatedly cited as a strength.", tally: "3 reports" },
      { html: "<strong>Payment/withdrawal speed</strong> — from crediting the wallet fast to instant withdrawal.", tally: "3 reports" },
      { html: "<strong>Accepting other phone models</strong> reinforces the platform's perceived accessibility.", tally: "3 reports" },
    ],
    negativeTitle: "Most cited improvements",
    negative: [
      { html: "<strong>Friction during video upload.</strong> Half the base reported an error at this step.", tally: "6 reports" },
      { html: "<strong>App crashes or closes by itself.</strong> Same failure pattern reported by the professional trainers in the previous round.", tally: "5 reports" },
      { html: "<strong>Video review/approval too slow or too strict.</strong> Includes one case still waiting since 09/11.", tally: "4 reports" },
      { html: "<strong>Tasks don't show up, or variety is limited.</strong> Specific requests for more pet-related and digital-format tasks.", tally: "4 reports" },
      { html: "<strong>Video sent, but hours didn't count in the app.</strong>", tally: "2 reports" },
    ],
  },
  closing: {
    kickerName: "Closing",
    kickerLabel: "General reading of the 12 responses across 2 days",
    titleLine1: "The community approves.",
    titleAccent: "But wants more speed",
    titleLine2Suffix: ".",
    body:
      "In just over 24 hours, 12 community testers — well beyond the professional trainers group — answered the new feedback form. The experience is perceived far more positively than in the previous round: average fluidity of 3.3/5 and recommendation of 3.7/5, without the same harsh contrast between high and low scores. Still, the same two technical problems persist — app crashes (42% of reports) and upload friction (half the base) — alongside a recurring request for more task variety and faster video approval. It's a sign the product's foundation is more stable for the general public, but the technical friction points identified with the professional trainers remain unresolved.",
  },
};

export const communityPulseContent: Record<Lang, Content> = { en, pt };
