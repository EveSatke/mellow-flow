import Image from 'next/image';
import type { ResultMetric } from '@/types/results';

export default function ResultBadge({ result }: { result: ResultMetric }) {
  const toneClass =
    result.tone === 'positive'
      ? 'bg-green'
      : result.tone === 'neutral'
        ? 'bg-yellow'
        : 'bg-red';
  return (
    <article className="border-light-purple flex items-center justify-between rounded-lg border px-4 py-3">
      <div className="flex items-center gap-3">
        <span className="inline-flex items-center justify-center">
          <Image src={result.icon} alt={result.title} width={36} height={36} />
        </span>

        <div className="flex flex-col gap-1">
          <span
            className={`inline-flex w-fit items-center rounded-sm px-1 py-0.5 text-[10px] font-bold tracking-wide text-white uppercase ${toneClass}`}
          >
            {result.tag}
          </span>
          <h3 className="text-base font-semibold">{result.title}</h3>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="bg-light-gray relative h-2 w-22 rounded-full">
          <span
            className={`absolute top-0 left-0 h-full rounded-full ${toneClass}`}
            style={{ width: `${result.value}%` }}
          />
        </div>
        <span className="text-sm font-semibold">{result.value}%</span>
      </div>
    </article>
  );
}
