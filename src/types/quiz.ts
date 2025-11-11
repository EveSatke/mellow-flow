type AnswerTone = 'primary' | 'positive' | 'neutral' | 'negative';

export type QuizOption = {
  id: string;
  label: string;
  icon: string;
  tone: AnswerTone;
};

export type QuizQuestion = {
  id: string;
  prompt: string;
  options: QuizOption[];
};

export type AnswerOptionProps = {
  option: QuizOption;
  selected: boolean;
  onSelect: (optionId: string) => void;
};
