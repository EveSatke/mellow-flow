'use client';

import Image from 'next/image';
import type { QuizOption } from '@/types/quiz';
import clsx from 'clsx';

type AnswerOptionProps = {
  option: QuizOption;
  selected: boolean;
  onSelect: (optionId: string) => void;
  className?: string;
};

export default function AnswerOption({
  option,
  selected,
  onSelect,
  className,
}: AnswerOptionProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(option.id)}
      className={clsx(
        'border-button-border flex h-14 w-full items-center justify-start gap-2 rounded-lg border px-3',
        selected ? 'bg-light-purple' : 'bg-white',
        className
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
