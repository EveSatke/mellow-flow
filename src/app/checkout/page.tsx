'use client';

import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';

export default function CheckoutPage() {
  const [timeLeft, setTimeLeft] = useState<number>(15 * 60);
  const formattedTime = useMemo(() => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }, [timeLeft]);

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
    <div className="flex min-h-screen flex-col">
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
      <main className="flex flex-1 flex-col items-center gap-6">
        <section className="flex flex-col px-5 py-2"></section>
        <section className="flex w-full flex-1 flex-col items-stretch justify-end gap-3 p-5"></section>
      </main>
    </div>
  );
}
