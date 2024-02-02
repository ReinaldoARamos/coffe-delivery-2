import Image from "next/image";
import { Hero } from "./components/Hero/Hero";
import { Baloo_2 } from "next/font/google";
import { CoffesCard } from "./components/CoffesAvailable/CoffesAvailable";

const inter = Baloo_2({
  subsets: ["latin"],
});
export default function Home() {
  return (
    <div className="px-40">
      <Hero />
      <h2
        className={`${inter.className} text-[32px] font-bold leading-[130%] text-base-subtitle pb-14`}
      >
        Nossos cafés
      </h2>
     
      <div className="">
        <CoffesCard />
      </div>

     
    </div>
  );
}
