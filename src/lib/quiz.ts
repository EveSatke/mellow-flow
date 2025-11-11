import type { QuizQuestion } from '@/types/quiz';
import { asset } from '@/lib/assets';

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'main-reason-quit',
    prompt: 'What is your main reason for wanting to quit drinking?',
    options: [
      {
        id: 'health',
        label: 'Health',
        icon: asset('/icons/health.svg'),
        tone: 'primary',
      },
      {
        id: 'relationships',
        label: 'Relationships',
        icon: asset('/icons/relationships.svg'),
        tone: 'primary',
      },
      {
        id: 'control',
        label: 'Control',
        icon: asset('/icons/control.svg'),
        tone: 'primary',
      },
      {
        id: 'money',
        label: 'Money',
        icon: asset('/icons/money.svg'),
        tone: 'primary',
      },
      {
        id: 'performance',
        label: 'Performance',
        icon: asset('/icons/performance.svg'),
        tone: 'primary',
      },
      {
        id: 'role-model',
        label: 'Role model',
        icon: asset('/icons/role-model.svg'),
        tone: 'primary',
      },
    ],
  },
  {
    id: 'main-reason-drink',
    prompt: 'What do you think is the main reason you drink?',
    options: [
      {
        id: 'stress-or-anxiety',
        label: 'Stress or anxiety',
        icon: asset('/icons/stress.svg'),
        tone: 'primary',
      },
      {
        id: 'socializing',
        label: 'Socializing',
        icon: asset('/icons/socializing.svg'),
        tone: 'primary',
      },
      {
        id: 'relaxation',
        label: 'Relaxation',
        icon: asset('/icons/relaxation.svg'),
        tone: 'primary',
      },
      {
        id: 'emotional-escape',
        label: 'Emotional escape',
        icon: asset('/icons/emotional-escape.svg'),
        tone: 'primary',
      },
      {
        id: 'habit',
        label: 'Habit',
        icon: asset('/icons/habit.svg'),
        tone: 'primary',
      },
      {
        id: 'confidence-boost',
        label: 'Confidence boost',
        icon: asset('/icons/confidence-boost.svg'),
        tone: 'primary',
      },
    ],
  },
  {
    id: 'fit-in',
    prompt: 'Do you ever drink to feel "normal" or fit in with others?',
    options: [
      {
        id: 'yes',
        label: 'Yes',
        icon: asset('/icons/yes.svg'),
        tone: 'positive',
      },
      {
        id: 'not-sure',
        label: 'I’m not sure',
        icon: asset('/icons/not-sure.svg'),
        tone: 'neutral',
      },
      { id: 'no', label: 'No', icon: asset('/icons/no.svg'), tone: 'negative' },
    ],
  },
  {
    id: 'missing-out',
    prompt:
      "Do you sometimes feel like you're missing out if you don't participate in group activities or social events?",
    options: [
      {
        id: 'yes',
        label: 'Yes',
        icon: asset('/icons/yes.svg'),
        tone: 'positive',
      },
      {
        id: 'not-sure',
        label: 'I’m not sure',
        icon: asset('/icons/not-sure.svg'),
        tone: 'neutral',
      },
      { id: 'no', label: 'No', icon: asset('/icons/no.svg'), tone: 'negative' },
    ],
  },
  {
    id: 'escape',
    prompt:
      'Do you often find yourself wanting to escape from your daily responsibilities or pressures?',
    options: [
      {
        id: 'yes',
        label: 'Yes',
        icon: asset('/icons/yes.svg'),
        tone: 'positive',
      },
      {
        id: 'not-sure',
        label: 'I’m not sure',
        icon: asset('/icons/not-sure.svg'),
        tone: 'neutral',
      },
      { id: 'no', label: 'No', icon: asset('/icons/no.svg'), tone: 'negative' },
    ],
  },
  {
    id: 'relax',
    prompt:
      'Do you often seek ways to relax or unwind after a long, stressful day?',
    options: [
      {
        id: 'yes',
        label: 'Yes',
        icon: asset('/icons/yes.svg'),
        tone: 'positive',
      },
      {
        id: 'not-sure',
        label: 'I’m not sure',
        icon: asset('/icons/not-sure.svg'),
        tone: 'neutral',
      },
      { id: 'no', label: 'No', icon: asset('/icons/no.svg'), tone: 'negative' },
    ],
  },
];
