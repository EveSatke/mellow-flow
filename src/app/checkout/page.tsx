'use client';

import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useMemo, useState } from 'react';
import { resultMetrics, photoSets } from '@/lib/results';
import ResultBadge from '@/components/ResultBadge';

function CheckoutContent() {
  const [timeLeft, setTimeLeft] = useState<number>(15 * 60);
  const drinkingPatterns = 'Imbalanced';
  const goal = 'Regain control and live alcohol-free';
  const formattedTime = useMemo(() => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }, [timeLeft]);

  const params = useSearchParams();
  const gender = params.get('gender') ?? 'female';
  const photos =
    photoSets[gender as keyof typeof photoSets] ?? photoSets.female;

  useEffect(() => {
    const interval = setInterval(
      () =>
        setTimeLeft((prev) => {
          if (prev <= 0) return 15 * 60;
          return prev - 1;
        }),
      1000
    );

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mb-6 flex min-h-screen flex-col">
      <header className="bg-yellow flex flex-col px-5 py-6">
        <div className="flex items-center justify-between">
          <Image
            src="/mellow-flow-logo.svg"
            alt="Mellow Flow"
            width={62}
            height={36}
          />
          <p className="text-lg font-bold">
            Reserved price for:
            <span className="text-purple inline-block w-18 pl-2 text-2xl font-bold">
              {formattedTime}
            </span>
          </p>
        </div>
      </header>
      <main className="flex flex-1 flex-col gap-6 px-5 pt-10">
        <h1 className="text-2xl font-bold">
          Your personalized Alcohol-Free Plan is ready!
        </h1>
        <section className="flex">
          <div className="border-light-purple flex w-1/2 items-start gap-2 border-r pr-4">
            <Image
              src="/icons/brain.svg"
              alt="Drinking patterns"
              width={32}
              height={32}
            />
            <div className="flex flex-col">
              <p className="text-[10px]">Drinking patterns</p>
              <p className="text-xs font-bold">{drinkingPatterns}</p>
            </div>
          </div>
          <div className="flex w-1/2 items-start gap-2 pl-4">
            <Image
              src="/icons/goal.svg"
              alt="Drinking patterns"
              width={32}
              height={32}
            />
            <div className="flex flex-col">
              <p className="text-[10px]">Goal</p>
              <p className="text-xs font-bold">{goal}</p>
            </div>
          </div>
        </section>
        <section className="relative flex w-full items-stretch justify-center pb-5">
          <div className="relative">
            <Image
              className="relative z-0 h-full w-full rounded-l-lg object-cover"
              src={photos.before}
              alt="Before"
              width={300}
              height={300}
            />
            <span className="absolute bottom-4 left-4 z-10 rounded-sm bg-white/60 px-3 py-1 text-sm font-semibold">
              Before
            </span>
          </div>

          <div className="relative">
            <Image
              className="relative z-0 h-full w-full rounded-r-lg object-cover"
              src={photos.after}
              alt="After"
              width={300}
              height={300}
            />
            <span className="absolute right-4 bottom-4 z-10 rounded-sm bg-white px-3 py-1 text-sm font-semibold">
              After
            </span>
          </div>
          <div className="pointer-events-none absolute top-1/2 left-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 items-center gap-1">
            <span className="inline-flex h-12 w-12 items-center justify-center">
              <Image
                src="/icons/image-arrows.svg"
                alt="Arrow right"
                width={55}
                height={60}
              />
            </span>
          </div>
        </section>
        <section className="flex flex-col gap-2">
          <h1 className="pb-6 text-2xl font-bold">Your Personal Summary</h1>
          {resultMetrics.map((result) => (
            <ResultBadge key={result.id} result={result} />
          ))}
        </section>
      </main>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={null}>
      <CheckoutContent />
    </Suspense>
  );
}
