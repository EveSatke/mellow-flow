import Image from "next/image";

export default function GenderCard({ image, label }: { image: string, label: string }) {
  return (
    <div className="flex flex-col items-center justify-center bg-dark-purple rounded-lg">
      <Image className="rounded-t-lg border-2 border-dark-purple" src={image} alt={label} width={160} height={140} />
      <p className="text-white text-lg font-semibold p-5">{label}</p>
    </div>
  );
}