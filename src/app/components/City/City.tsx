'use client'
import { MapPin } from "@phosphor-icons/react/dist/ssr";
import { Cart } from "../Cart/Cart";



export function City() {


  

  return (
    <div className="flex items-center gap-3">
      <div className=" flex items-center gap-1 rounded-[6px] bg-brand-100 px-2 py-[10px]">
        <MapPin size={24} weight="fill" className="text-brand-300" />
        <span className="text-sm font-thin leading-[130%] text-brand-500">
        São José, SC
        </span>
      </div>
      <Cart />
    </div>
  );
}
