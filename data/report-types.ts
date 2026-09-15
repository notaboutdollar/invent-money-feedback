// Shared shape used by every editorial report (v2, v3, ...) so each report's
// data file and the ReportLayout renderer agree on structure without
// duplicating these types per report.

export type BarRow = {
  label: string;
  sublabel?: string;
  pct: number;
  count: string;
  muted?: boolean;
};

export type AnswerCard = {
  id: string;
  device: string;
  quote: string;
  impact?: string;
  frequency?: string;
};

export type ThemeGroup = {
  title: string;
  count: string;
  answers: AnswerCard[];
};

export type BarQuestion = {
  num: string;
  col: string;
  title: string;
  metaType: string;
  metaResponses: string;
  bars: BarRow[];
  reading: string;
  zebra?: boolean;
};

export type RatingQuestion = {
  num: string;
  col: string;
  title: string;
  metaType: string;
  metaResponses: string;
  avg: string;
  avgCap: string;
  counts: number[]; // 5 counts for scores 1..5
  reading: string;
  zebra?: boolean;
};

export type ThemeQuestion = {
  num: string;
  col: string;
  title: string;
  metaType: string;
  metaResponses: string;
  themes: ThemeGroup[];
  reading: string;
  zebra?: boolean;
};

export type SummaryQuestion = {
  num: string;
  col: string;
  title: string;
  metaType: string;
  metaResponses: string;
  summaryKicker: string;
  summaryLine: string;
  answers: AnswerCard[];
  zebra?: boolean;
};

export type HighlightItem = { html: string; tally: string };
