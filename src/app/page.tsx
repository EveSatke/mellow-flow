import Image from "next/image";
import GenderCard from "@/components/GenderCard";
import { genderQuestion } from "@/lib/questions";

export default function Home() {


  return (
    <div className=" flex flex-col min-h-screen">
      <header className="flex items-center justify-center py-6">
          <Image src="/mellow-flow-logo.svg" alt="Mellow Flow logo" width={62} height={36} />
        </header>
      <main className="flex flex-col gap-6 flex-1 items-center">
        <section className="flex flex-col gap-2 text-center">
          <h1 className="text-2xl font-semibold">{genderQuestion.prompt}</h1>
          <p className="text-sm font-normal">{genderQuestion.description}</p>
        </section>
        <section className="flex gap-3 flex-1 items-center justify-center">
          {genderQuestion.options.map((option) => (
            <GenderCard key={option.id} image={option.image} label={option.label} />
          ))}
        </section>
      </main>
    </div>
  );
}
