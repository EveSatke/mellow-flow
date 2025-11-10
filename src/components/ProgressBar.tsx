export default function ProgressBar({ progress }: { progress: number }) {
  return (
    <div className="bg-light-gray h-0.75 w-full rounded-full">
      <div
        className="bg-dark-purple h-full rounded-full transition-all duration-300 ease-out"
        style={{ width: `${progress}%` }}
        aria-hidden
      />
    </div>
  );
}
