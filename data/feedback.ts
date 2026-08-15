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

export type Improvement = {
  name: string;
  tag: "Upload" | "Validação" | "Regras" | "Bugs" | "Feedback";
  quote: string;
};

// Feedbacks construtivos sobre a plataforma, agrupados por área de melhoria.
// Extraídos das respostas de "frustração/dificuldade", "bug reportado" e
// "recado direto pra Invent Money".
export const improvements: Improvement[] = [
  {
    name: "Amanda",
    tag: "Upload",
    quote:
      "Subir os vídeos demora muito pra carregar — dos 22 que gravei, apenas 5 subiram. Ao tentar subir mais do que 5, a plataforma travava.",
  },
  {
    name: "Fernanda",
    tag: "Upload",
    quote:
      "O upload via iPhone não funcionava. Tive que exportar pro Drive e baixar no computador pra conseguir subir. Isso tirou horas que eu poderia estar gravando.",
  },
  {
    name: "Natan",
    tag: "Bugs",
    quote:
      "Vídeos com mais de 10 minutos não faziam upload. E quando gravava direto pela plataforma, o vídeo acima de 10 min fechava sozinho, sem alerta — sumiram trabalhos.",
  },
  {
    name: "Eder",
    tag: "Upload",
    quote:
      "Ao subir vídeos, quase sempre o upload parava e voltava pra tela inicial, obrigando a começar do zero. E quando completava, o vídeo às vezes ficava como “enviando” infinito.",
  },
  {
    name: "Bruno",
    tag: "Validação",
    quote:
      "A maioria das rejeições foi por “baixa qualidade”, mas vídeos gravados exatamente do mesmo jeito foram aprovados, enquanto outros foram rejeitados pelo mesmo motivo. Ficou difícil entender o que corrigir.",
  },
  {
    name: "Eder",
    tag: "Validação",
    quote:
      "Tive vídeo reprovado por não ter áudio, e outro aprovado sem áudio. Os critérios pareciam inconsistentes entre vídeos com o mesmo contexto.",
  },
  {
    name: "Cauã",
    tag: "Feedback",
    quote:
      "Melhorem a plataforma deixando as análises mais rápidas e o feedback de cada vídeo mais específico.",
  },
  {
    name: "Marcia",
    tag: "Regras",
    quote:
      "Meus rejeitados foram todos por não aparecerem as duas mãos. Gravei tudo com a câmera em 1x porque não sabia disso — deveria ficar mais claro que precisa estar em 0.5x.",
  },
  {
    name: "Amanda",
    tag: "Bugs",
    quote:
      "Algumas vezes o site travava indicando que eu estava usando VPN, mesmo sem ter VPN no dispositivo. Precisei recarregar a página várias vezes pra normalizar.",
  },
];

export const stats = {
  averageRecommendation: 9.4,
  averagePlatformExperience: 7.3,
  respondents: 17,
  wouldContinuePercent: 100,
};

// Distribuição das notas 0..10 (índice = nota, valor = quantidade de respostas).
export const recommendationScores = [0, 0, 0, 0, 0, 1, 0, 0, 2, 2, 12];
export const platformExperienceScores = [0, 1, 0, 1, 1, 1, 2, 0, 5, 1, 5];
