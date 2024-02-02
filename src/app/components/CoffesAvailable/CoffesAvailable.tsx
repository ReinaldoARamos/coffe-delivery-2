/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */


import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react/dist/ssr";

import { Baloo_2 } from "next/font/google";

const inter = Baloo_2({
  subsets: ["latin"],
});
export function CoffesCard() {
  return (
    <div className="flex flex-col justify-center w-64 items-center">
      <img
        src="coffees/expresso.png"
        alt=""
        width={120}
        height={120}
        className="pb-3"
      />
      <div className="flex item-center">
        <span className="text-justify py-1 px-2 bg-brandyellow-light text-brandyellow-dark rounded-full mb-5">
          TRADICIONAL
        </span>
      </div>
      <div className={`${inter.className} text-xl font-bold pb-2`}>
        Expresso tradicional
      </div>
      <span className="text-sm text-base-label text-center pb-8">
      O tradicional café feito com água quente e grãos moídos
      </span>
      <div className="flex gap-6 items-center">
        <div>
            <span className="text-base-text">R$            </span>
            <span className={`${inter.className} base-text font-bold text-2xl`}>9,90</span>
        </div>
        <div className="flex gap-2">
          <div className="flex items-center space-x-2">
            <Minus size={14} className="text-brand-300"/>
            <span>1</span>
            <Plus size={14} className="text-brand-300"/>
          </div>
            <div className="p-2 bg-brand-500 rounded-[6px]">
                <ShoppingCart weight="fill" className="text-base-background "/>
            </div>
        </div>
      </div>
    </div>
  );
}
