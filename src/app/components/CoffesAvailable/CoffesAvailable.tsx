/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
"use client";
import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react/dist/ssr";

import { Baloo_2 } from "next/font/google";
import { useState } from "react";

const inter = Baloo_2({
  subsets: ["latin"],
});

interface COffeeProps {
  name: string;
  tags: [
    {
      name: string;
    }
  ];
  description: string;
  price: number;
  img: string;
}

export function CoffesCard({
  description,
  img,
  name,
  price,
  tags,
}: COffeeProps) {
  const [coffeCount, setCoffeeCount] = useState<number>(0);

  function IncreaseCounter() {
    const coffeeCounter = coffeCount;
    setCoffeeCount(coffeeCounter + 1);
  }

  function decreaseCounter() {
    const coffeeCounter = coffeCount;
    setCoffeeCount(coffeeCounter - 1);

    if (coffeeCounter <= 0) {
      setCoffeeCount(0);
    }
  }

  return (
    <div className="flex w-64  flex-col items-center justify-center rounded-bl-[36px] rounded-br-[6px] rounded-tl-[6px] rounded-tr-[36px] bg-base-card px-5 pb-6 ">
      <img
        src="coffees/expresso.png"
        alt=""
        width={120}
        height={120}
        className="-mt-7  pb-3"
      />
      <div className="item-center flex">
        {tags.map((tag) => (
          <span
            key={tag.name}
            className="mb-5 rounded-full bg-brandyellow-light px-2 py-1 text-justify text-brandyellow-dark"
          >
            {tag.name}
          </span>
        ))}
      </div>
      <div className={`${inter.className} pb-2 text-xl font-bold`}>{name}</div>
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
            <Minus
              size={14}
              className="text-brand-300 hover:cursor-pointer"
              onClick={() => decreaseCounter()}
            />
            <span>{coffeCount}</span>
            <Plus
              size={14}
              className="text-brand-300 hover:cursor-pointer"
              onClick={() => IncreaseCounter()}
            />
          </div>
          <div className="rounded-[6px] bg-brand-600 p-2 transition-colors hover:cursor-pointer hover:bg-brand-300">
            <ShoppingCart weight="fill" className="text-base-background " />
          </div>
        </div>
      </div>
    </div>
  );
}
