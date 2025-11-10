'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { quizQuestions } from '@/lib/quiz';
import AnswerOption from '@/components/AnswerOption';
import Image from 'next/image';
import ProgressBar from '@/components/ProgressBar';

type Answers = Record<string, string>;

export default function QuizPage() {
  const router = useRouter();
  const params = useSearchParams();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<Answers>({});

  const total = quizQuestions.length;
  const question = quizQuestions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / total) * 100;

  const isLast = currentQuestionIndex === total - 1;

  function handleAnswerSelect(optionId: string) {
    setAnswers((prev) => ({ ...prev, [question.id]: optionId }));
  }

  return (
    <>
      <header className="flex flex-col px-5 py-6">
        <div className="flex items-center justify-between pb-3">
          <button>
            <Image
              src="/icons/back-arrow.svg"
              alt="Back"
              width={24}
              height={24}
            />
          </button>
          <Image
            src="/mellow-flow-logo.svg"
            alt="Mellow Flow"
            width={62}
            height={36}
          />
          <span className="text-base">
            <strong>{currentQuestionIndex + 1}</strong>/{total}
          </span>
        </div>
        <ProgressBar progress={progress} />
      </header>
      <main className="flex flex-1 flex-col items-center gap-6">
        <section className="flex flex-col">
          <h1 className="text-center text-2xl font-semibold">
            {question.prompt}
          </h1>
        </section>
        <section className="flex w-full flex-1 flex-col items-stretch justify-center gap-3 px-5">
          {question.options.map((option) => (
            <AnswerOption
              key={option.id}
              option={option}
              selected={answers[question.id] === option.id}
              onSelect={() => handleAnswerSelect(option.id)}
            />
          ))}
        </section>
      </main>
    </>
  );
}
