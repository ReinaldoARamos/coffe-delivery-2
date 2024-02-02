/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */

import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react/dist/ssr";

import { Baloo_2 } from "next/font/google";

const inter = Baloo_2({
  subsets: ["latin"],
});
export function CoffesCard() {
  return (
    <div className="flex w-64 flex-col items-center justify-center rounded-bl-[36px] rounded-br-[6px] rounded-tl-[6px] rounded-tr-[36px] bg-base-card px-5 pb-6 ">
      <img
        src="coffees/expresso.png"
        alt=""
        width={120}
        height={120}
        className="pb-3"
      />
      <div className="item-center flex">
        <span className="mb-5 rounded-full bg-brandyellow-light px-2 py-1 text-justify text-brandyellow-dark">
          TRADICIONAL
        </span>
      </div>
      <div className={`${inter.className} pb-2 text-xl font-bold`}>
        Expresso tradicional
      </div>
      <span className="pb-8 text-center text-sm text-base-label">
        O tradicional café feito com água quente e grãos moídos
      </span>
      <div className="flex items-center gap-6 ">
        <div>
          <span className="text-base-text">R$ </span>
          <span className={`${inter.className} base-text text-2xl font-bold`}>
            9,90
          </span>
        </div>
        <div className="flex gap-2">
          <div className="flex items-center space-x-2">
            <Minus size={14} className="text-brand-300 hover:cursor-pointer" />
            <span>1</span>
            <Plus size={14} className="text-brand-300 hover:cursor-pointer"  />
          </div>
          <div className="rounded-[6px] bg-brand-600 p-2 hover:bg-brand-300 transition-colors hover:cursor-pointer">
            <ShoppingCart weight="fill" className="text-base-background " />
          </div>
        </div>
      </div>
    </div>
  );
}
