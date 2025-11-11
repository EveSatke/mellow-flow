import type { ResultMetric } from '@/types/results';
import { asset } from '@/lib/assets';

export const photoSets = {
  female: {
    before: asset('/images/female-before.png'),
    after: asset('/images/female-after.png'),
  },
  male: {
    before: asset('/images/male-before.png'),
    after: asset('/images/male-after.png'),
  },
} as const;

export const resultMetrics: ResultMetric[] = [
  {
    id: 'desire',
    icon: asset('/icons/light-bulb.svg'),
    tag: 'Very strong',
    title: 'Desire to change',
    value: 92,
    tone: 'positive',
  },
  {
    id: 'cravings',
    icon: asset('/icons/cravings.svg'),
    tag: 'Too high',
    title: 'Cravings',
    value: 84,
    tone: 'negative',
  },
  {
    id: 'blocks',
    icon: asset('/icons/block.svg'),
    tag: 'Too high',
    title: 'Mental blocks',
    value: 74,
    tone: 'negative',
  },
  {
    id: 'stress',
    icon: asset('/icons/bolts.svg'),
    tag: 'Moderately high',
    title: 'Stress',
    value: 52,
    tone: 'neutral',
  },
];
