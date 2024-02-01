import Image from "next/image";
import { Baloo_2 } from "next/font/google";
import { Icons } from "./components/Icons/Icons";
import {
  Clock,
  Coffee,
  Package,
  ShoppingCart,
} from "@phosphor-icons/react/dist/ssr";

const inter = Baloo_2({
  subsets: ["latin"],
});
export default function Home() {
  return (
    <div className="px-40">
      <h1
        className={`pt-24 text-5xl font-bold text-base-title ${inter.className}`}
      >
        Encontre o café perfeito
        <br />
        para qualquer hora do dia
      </h1>
      <div className="pb-16 pt-4 text-base-subtitle ">
        Com a Coffee Delivery você recebe seu café onde estiver,
        <br />a qualquer hora
      </div>
      <div className="grid w-[610px] grid-cols-2 gap-5
      ">
        <Icons text={"Compra simples e segura"} icon={ShoppingCart} backgroundColor={"bg-brandyellow-dark"} />
        <Icons text={"Embalagem mantém o café intacto"} icon={Package} backgroundColor={"bg-base-text"} />
        <Icons text={"Entrega rápida e rastreada"} icon={Clock} backgroundColor={"bg-brandyellow-regular"} />
        <Icons text={"O café chega fresquinho até você"} icon={Coffee} backgroundColor={"bg-brand-500"} />
      </div>
    </div>
  );
}
