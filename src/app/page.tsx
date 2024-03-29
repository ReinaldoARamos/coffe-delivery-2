import Image from "next/image";
import { Hero } from "./components/Hero/Hero";
import { Baloo_2 } from "next/font/google";
import { CoffesCard } from "./components/CoffesAvailable/CoffesAvailable";
import cafesData from "./coffees.json";
const inter = Baloo_2({
  subsets: ["latin"],
});
export default function Home() {
  return (
    <div className="px-10 lg:px-40">
      <Hero />
      <h2
        className={`${inter.className} pb-14  text-[32px] font-bold leading-[130%] text-base-subtitle`}
      >
        Nossos cafés
      </h2>

      <div className="grid grid-cols-2  gap-x-8  gap-y-10 lg:w-[1120px] lg:grid-cols-4 ">
      {cafesData.map((tag) => (
 <CoffesCard
 key={tag.id}
 name={tag.name}
 //@ts-ignore
 tags={
   tag.tags
 }
 description={tag.description}
 price={tag.price}
 img={tag.imageSrc}
/>
))}
        
      </div>
    
    </div>
  );
}
