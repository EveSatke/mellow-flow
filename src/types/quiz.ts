export type QuizOption = {
  id: string;
  label: string;
  icon: string;
};

export type QuizQuestion = {
  id: string;
  order: number;
  prompt: string;
  options: QuizOption[];
};
