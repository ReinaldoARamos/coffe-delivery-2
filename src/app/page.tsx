import Image from "next/image";
import { Hero } from "./components/Hero/Hero";
import { Baloo_2 } from "next/font/google";
import { CoffesCard } from "./components/CoffesAvailable/CoffesAvailable";

const inter = Baloo_2({
  subsets: ["latin"],
});
export default function Home() {
  return (
    <div className="px-10 lg:px-40">
      <Hero />
      <h2
        className={`${inter.className} pb-14 text-[32px] font-bold leading-[130%] text-base-subtitle`}
      >
        Nossos cafés
      </h2>

      <div className="grid grid-cols-2 gap-0  gap-y-10 lg:grid-cols-4 lg:gap-x-8">
        <CoffesCard />
        <CoffesCard />
        <CoffesCard />
        <CoffesCard />
        <CoffesCard />
        <CoffesCard />
        <CoffesCard />
        <CoffesCard />
        <CoffesCard />
        <CoffesCard />
        <CoffesCard />
        <CoffesCard />
        <CoffesCard />
        <CoffesCard />
      </div>
    </div>
  );
}
