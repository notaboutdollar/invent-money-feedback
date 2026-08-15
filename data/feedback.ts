export type Feedback = {
  name: string;
  role?: string;
  quote: string;
};

// Dados extraídos do "Feedback do Piloto Invent Money — Trainers de IA".
// Apenas primeiro nome é exibido (sem telefone/email), conforme o escopo
// de consentimento coletado no formulário (uso interno para melhoria de produto).
export const feedback: Feedback[] = [
  {
    name: "Stephany",
    role: "Trainer de IA",
    quote: "Os bônus são muito bons!",
  },
  {
    name: "Lucas",
    role: "Trainer de IA",
    quote: "A facilidade das tarefas — só peço que continuem o projeto.",
  },
  {
    name: "Luiz",
    role: "Trainer de IA",
    quote: "Ótimo valor, boa variedade de tasks e muito bônus.",
  },
  {
    name: "Fernanda",
    role: "Trainer de IA",
    quote: "Gostei de poder gravar direto na câmera e depois fazer o upload.",
  },
  {
    name: "Italo",
    role: "Trainer de IA",
    quote: "Facilidade das tarefas.",
  },
  {
    name: "Cauã",
    role: "Trainer de IA",
    quote:
      "É uma plataforma bem estruturada e paga bem. Mesmo possuindo bugs que são normais para uma versão beta.",
  },
  {
    name: "Amanda",
    role: "Trainer de IA",
    quote:
      "A possibilidade de gravar direto do celular e também da plataforma, os valores pagos e os bônus incentivam bastante a continuar.",
  },
  {
    name: "Ana Maria",
    role: "Trainer de IA",
    quote:
      "Gostei da liberdade de poder executar algumas tarefas, como cozinhar, por exemplo. O suporte de vocês foi incrível, nada a reclamar.",
  },
  {
    name: "Emily",
    role: "Trainer de IA",
    quote:
      "A praticidade da plataforma e a flexibilidade para gravar vídeos de atividades do dia a dia no horário que fosse mais conveniente.",
  },
  {
    name: "Eder",
    role: "Trainer de IA",
    quote:
      "O projeto é muito legal e tem uma variedade de tarefas permitidas. Entendo estar em beta, e betas são sinônimos de erros e aprendizado.",
  },
  {
    name: "Natan",
    role: "Trainer de IA",
    quote: "Plataforma bem intuitiva, fácil de mexer.",
  },
  {
    name: "Fabrício",
    role: "Trainer de IA",
    quote: "Valores e bônus muito bons. Bom trabalho — que venham novas tarefas!",
  },
  {
    name: "Marcia",
    role: "Trainer de IA",
    quote: "O valor pago pela hora de vídeos foi um ótimo incentivo.",
  },
  {
    name: "Bruno",
    role: "Trainer de IA",
    quote:
      "Gostei da proposta do projeto e da oportunidade de contribuir para o treinamento de modelos de IA. A plataforma é simples de usar e o fluxo de gravação é intuitivo.",
  },
  {
    name: "Allan",
    role: "Trainer de IA",
    quote: "Gostei do site.",
  },
  {
    name: "Pedro",
    role: "Trainer de IA",
    quote: "A praticidade.",
  },
  {
    name: "Igor",
    role: "Trainer de IA",
    quote: "Pagamento em crypto — curti bastante essa parte do piloto.",
  },
];

export const stats = {
  averageRecommendation: 9.4,
  respondents: 17,
  wouldContinuePercent: 100,
};
