import type { QuizQuestion } from '@/types/quiz';

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'main-reason-quit',
    order: 1,
    prompt: 'What is your main reason for wanting to quit drinking?',
    options: [
      { id: 'health', label: 'Health', icon: '/icons/health.svg' },
      {
        id: 'relationships',
        label: 'Relationships',
        icon: '/icons/relationships.svg',
      },
      { id: 'control', label: 'Control', icon: '/icons/control.svg' },
      { id: 'money', label: 'Money', icon: '/icons/money.svg' },
      {
        id: 'performance',
        label: 'Performance',
        icon: '/icons/performance.svg',
      },
      { id: 'role-model', label: 'Role model', icon: '/icons/role-model.svg' },
    ],
  },
  {
    id: 'main-reason-drink',
    order: 2,
    prompt: 'What do you think is the main reason you drink?',
    options: [
      {
        id: 'stress-or-anxiety',
        label: 'Stress or anxiety',
        icon: '/icons/stress.svg',
      },
      {
        id: 'socializing',
        label: 'Socializing',
        icon: '/icons/socializing.svg',
      },
      { id: 'relaxation', label: 'Relaxation', icon: '/icons/relaxation.svg' },
      {
        id: 'emotional-escape',
        label: 'Emotional escape',
        icon: '/icons/emotional-escape.svg',
      },
      { id: 'habit', label: 'Habit', icon: '/icons/habit.svg' },
      {
        id: 'confidence-boost',
        label: 'Confidence boost',
        icon: '/icons/confidence-boost.svg',
      },
    ],
  },
  {
    id: 'fit-in',
    order: 3,
    prompt: 'Do you ever drink to feel "normal" or fit in with others?',
    options: [
      { id: 'yes', label: 'Yes', icon: '/icons/yes.svg' },
      { id: 'not-sure', label: 'I’m not sure', icon: '/icons/not-sure.svg' },
      { id: 'no', label: 'No', icon: '/icons/no.svg' },
    ],
  },
  {
    id: 'missing-out',
    order: 4,
    prompt:
      "Do you sometimes feel like you're missing out if you don't participate in group activities or social events?",
    options: [
      { id: 'yes', label: 'Yes', icon: '/icons/yes.svg' },
      { id: 'not-sure', label: 'I’m not sure', icon: '/icons/not-sure.svg' },
      { id: 'no', label: 'No', icon: '/icons/no.svg' },
    ],
  },
  {
    id: 'escape',
    order: 5,
    prompt:
      'Do you often find yourself wanting to escape from your daily responsibilities or pressures?',
    options: [
      { id: 'yes', label: 'Yes', icon: '/icons/yes.svg' },
      { id: 'not-sure', label: 'I’m not sure', icon: '/icons/not-sure.svg' },
      { id: 'no', label: 'No', icon: '/icons/no.svg' },
    ],
  },
  {
    id: 'relax',
    order: 6,
    prompt:
      'Do you often seek ways to relax or unwind after a long, stressful day?',
    options: [
      { id: 'yes', label: 'Yes', icon: '/icons/yes.svg' },
      { id: 'not-sure', label: 'I’m not sure', icon: '/icons/not-sure.svg' },
      { id: 'no', label: 'No', icon: '/icons/no.svg' },
    ],
  },
];
