export type Tone = 'positive' | 'neutral' | 'negative';

export type ResultMetric = {
  id: string;
  icon: string;
  tag: string;
  title: string;
  value: number;
  tone: Tone;
};
