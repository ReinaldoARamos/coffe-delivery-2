'use client'

import { Minus, Plus, Trash } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";

/* eslint-disable @next/next/no-img-element */
export function CoffesInCart() {
  const [coffeeCount, setCoffeeCount] = useState<number>(0);
  function IncreaseCounter() {
    const coffeeCounter = coffeeCount;
    setCoffeeCount(coffeeCounter + 1);
  }

  function decreaseCounter() {
    const coffeeCounter = coffeeCount;
    setCoffeeCount(coffeeCounter - 1);

    if (coffeeCounter <= 0) {
      setCoffeeCount(0);
    }
  }
  return (
    <div className="flex items-center pt-6 gap-5">
      <img width={64} height={64} alt="cafés" src="coffees/expresso.png" />
      <div className="flex flex-col">
        <div className="flex w-full gap-[72px]  ">
          <span className="text-md text-base-subtitle">Expresso Tradicional</span>
          <span className="text-md font-bold text-base-text">R$: 9,90</span>
        </div>
        <div>
          <div className="flex gap-2">
            <div className="flex items-center space-x-2 bg-base-button py-1.5 px-2.5 rounded-[6px]">
              <Minus
                size={14}
                className="text-brand-500 hover:cursor-pointer hover:text-brand-300 transition-colors"
                onClick={() => decreaseCounter()}
              />
              <span>{coffeeCount}</span>
              <Plus
                size={14}
                className="text-brand-500 hover:cursor-pointer hover:text-brand-300 transition-colors"
                onClick={() => IncreaseCounter()}
              />
            </div>
            <div className="flex items-center space-x-2 hover:bg-base-hover bg-base-button py-1.5 px-2.5 rounded-[6px] group hover:cursor-pointer transition-colors">
             <Trash size={16 } className="text-brand-purple group-hover:text-brand-600"/>
            <span className="text-base-text text-xs  ">REMOVER</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
