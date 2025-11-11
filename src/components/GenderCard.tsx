import Image from 'next/image';

export default function GenderCard({
  image,
  label,
  onSelect,
}: {
  image: string;
  label: string;
  onSelect: () => void;
}) {
  return (
    <div
      className="bg-dark-purple flex flex-col items-center justify-center rounded-lg"
      onClick={() => onSelect()}
    >
      <Image
        className="border-dark-purple rounded-t-lg border-2"
        src={image}
        alt={label}
        width={160}
        height={140}
      />
      <p className="p-5 text-lg font-semibold text-white">{label}</p>
    </div>
  );
}
