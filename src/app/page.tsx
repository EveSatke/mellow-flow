'use client';

import Image from 'next/image';
import GenderCard from '@/components/GenderCard';
import { genderQuestion } from '@/lib/questions';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Home() {
  const router = useRouter();

  function handleSelect(optionId: string) {
    router.push(`/quiz?gender=${optionId}`);
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex items-center justify-center py-6">
        <Image
          src="/mellow-flow-logo.svg"
          alt="Mellow Flow logo"
          width={62}
          height={36}
        />
      </header>
      <main className="flex flex-1 flex-col items-center gap-6">
        <section className="flex flex-col gap-2 text-center">
          <h1 className="text-2xl font-semibold">{genderQuestion.prompt}</h1>
          <p className="text-sm font-normal">{genderQuestion.description}</p>
        </section>
        <section className="flex flex-1 items-center justify-center gap-3">
          {genderQuestion.options.map((option) => (
            <GenderCard
              key={option.id}
              image={option.image}
              label={option.label}
              onSelect={() => handleSelect(option.id)}
            />
          ))}
        </section>
      </main>
    </div>
  );
}
