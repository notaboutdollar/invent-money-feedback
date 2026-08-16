export type Feedback = {
  name: string;
  role?: string;
  quote: string;
};

// Data extracted from "Feedback do Piloto Invent Money — Trainers de IA".
// Only first names are displayed (no phone/email), per the consent scope
// collected in the form (internal use for product improvement).
export const feedback: Feedback[] = [
  {
    name: "Stephany",
    role: "AI Trainer",
    quote: "The bonuses are really great!",
  },
  {
    name: "Lucas",
    role: "AI Trainer",
    quote: "The tasks are easy — I just ask that you keep the project going.",
  },
  {
    name: "Luiz",
    role: "AI Trainer",
    quote: "Great pay, good variety of tasks, and lots of bonuses.",
  },
  {
    name: "Fernanda",
    role: "AI Trainer",
    quote:
      "I liked being able to record straight from the camera and then upload.",
  },
  {
    name: "Italo",
    role: "AI Trainer",
    quote: "The tasks are easy.",
  },
  {
    name: "Cauã",
    role: "AI Trainer",
    quote:
      "It's a well-structured platform that pays well — even with bugs that are normal for a beta version.",
  },
  {
    name: "Amanda",
    role: "AI Trainer",
    quote:
      "Being able to record straight from the phone and also from the platform, the pay and the bonuses really motivate me to keep going.",
  },
  {
    name: "Ana Maria",
    role: "AI Trainer",
    quote:
      "I loved the freedom to do certain tasks, like cooking, for example. Your support was amazing — nothing to complain about.",
  },
  {
    name: "Emily",
    role: "AI Trainer",
    quote:
      "The practicality of the platform and the flexibility to record videos of everyday activities whenever it was most convenient.",
  },
  {
    name: "Eder",
    role: "AI Trainer",
    quote:
      "The project is really cool and has a good variety of allowed tasks. I get that it's in beta, and betas mean bugs and learning.",
  },
  {
    name: "Natan",
    role: "AI Trainer",
    quote: "The platform is very intuitive, easy to use.",
  },
  {
    name: "Fabrício",
    role: "AI Trainer",
    quote: "Great pay and bonuses. Good work — bring on the new tasks!",
  },
  {
    name: "Marcia",
    role: "AI Trainer",
    quote: "The hourly pay for videos was a great incentive.",
  },
  {
    name: "Bruno",
    role: "AI Trainer",
    quote:
      "I liked the project's proposal and the opportunity to help train AI models. The platform is simple to use and the recording flow is intuitive.",
  },
  {
    name: "Allan",
    role: "AI Trainer",
    quote: "I liked the site.",
  },
  {
    name: "Pedro",
    role: "AI Trainer",
    quote: "The practicality.",
  },
  {
    name: "Igor",
    role: "AI Trainer",
    quote: "Payment in crypto — I really enjoyed that part of the pilot.",
  },
];

export type Improvement = {
  name: string;
  tag: "Upload" | "Validation" | "Rules" | "Bugs" | "Feedback";
  quote: string;
};

// Constructive feedback about the platform, grouped by area of improvement.
// Extracted from the "frustration/difficulty", "bug reported", and
// "direct message to Invent Money" fields of the survey.
export const improvements: Improvement[] = [
  {
    name: "Amanda",
    tag: "Upload",
    quote:
      "Uploading videos takes way too long — out of the 22 I recorded, only 5 went through. Trying to upload more than 5 made the platform freeze.",
  },
  {
    name: "Fernanda",
    tag: "Upload",
    quote:
      "Uploading via iPhone didn't work. I had to export to Drive and download on the computer to get it uploaded. That cost me hours I could have been recording.",
  },
  {
    name: "Natan",
    tag: "Bugs",
    quote:
      "Videos longer than 10 minutes wouldn't upload. And when recording straight in the platform, videos over 10 min closed on their own with no warning — I lost work.",
  },
  {
    name: "Eder",
    tag: "Upload",
    quote:
      "Almost every time I uploaded, it would stop and bounce back to the start screen, forcing me to begin from scratch. And when it did complete, the video sometimes stayed as “sending” forever.",
  },
  {
    name: "Bruno",
    tag: "Validation",
    quote:
      "Most rejections were for “low quality”, but videos recorded the exact same way were approved, while others were rejected for the same reason. It was hard to understand what to fix.",
  },
  {
    name: "Eder",
    tag: "Validation",
    quote:
      "I had a video rejected for missing audio, and another approved without audio. The criteria felt inconsistent between videos in the same context.",
  },
  {
    name: "Cauã",
    tag: "Feedback",
    quote:
      "Improve the platform by making reviews faster and the feedback on each video more specific.",
  },
  {
    name: "Marcia",
    tag: "Rules",
    quote:
      "My rejected videos were all because both hands weren't showing. I recorded everything with the camera at 1x because I didn't know — it should be clearer that it needs to be at 0.5x.",
  },
  {
    name: "Amanda",
    tag: "Bugs",
    quote:
      "Sometimes the site would freeze saying I was using a VPN, even though I didn't have a VPN on my device. I had to reload the page several times to get it working again.",
  },
];

export const stats = {
  averageRecommendation: 9.4,
  averagePlatformExperience: 7.3,
  respondents: 17,
  wouldContinuePercent: 100,
};

// Distribution of scores 0..10 (index = score, value = number of responses).
export const recommendationScores = [0, 0, 0, 0, 0, 1, 0, 0, 2, 2, 12];
export const platformExperienceScores = [0, 1, 0, 1, 1, 1, 2, 0, 5, 1, 5];
