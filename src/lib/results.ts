import type { ResultMetric } from '@/types/results';

export const resultMetrics: ResultMetric[] = [
  {
    id: 'desire',
    icon: '/icons/light-bulb.svg',
    tag: 'Very strong',
    title: 'Desire to change',
    value: 92,
    tone: 'positive',
  },
  {
    id: 'cravings',
    icon: '/icons/cravings.svg',
    tag: 'Too high',
    title: 'Cravings',
    value: 84,
    tone: 'negative',
  },
  {
    id: 'blocks',
    icon: '/icons/block.svg',
    tag: 'Too high',
    title: 'Mental blocks',
    value: 74,
    tone: 'negative',
  },
  {
    id: 'stress',
    icon: '/icons/bolts.svg',
    tag: 'Moderately high',
    title: 'Stress',
    value: 52,
    tone: 'neutral',
  },
];
