'use client';

import Image from 'next/image';
import type { AnswerOptionProps } from '@/types/quiz';
import clsx from 'clsx';

export default function AnswerOption({
  option,
  selected,
  onSelect,
}: AnswerOptionProps) {
  const toneStyles = {
    primary: 'bg-light-purple text-white',
    positive: 'bg-green text-white',
    neutral: 'bg-yellow text-slate-900',
    negative: 'bg-red text-white',
  } as const;

  return (
    <button
      type="button"
      onClick={() => onSelect(option.id)}
      className={clsx(
        'border-button-border flex h-14 w-full items-center justify-start gap-2 rounded-lg border px-3',
        selected ? toneStyles[option.tone] : 'bg-white'
      )}
    >
      {option.icon ? (
        <Image
          className={clsx(selected ? 'brightness-0 invert filter' : '')}
          src={option.icon}
          alt={option.label}
          width={24}
          height={24}
        />
      ) : null}
      <span
        className={clsx(
          'text-base font-semibold',
          selected ? 'text-white' : 'text-foreground'
        )}
      >
        {option.label}
      </span>
    </button>
  );
}
