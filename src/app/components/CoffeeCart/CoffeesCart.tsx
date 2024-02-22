import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPin,
  Money,
} from "@phosphor-icons/react/dist/ssr";
import { Baloo_2 } from "next/font/google";
import { PaymentButtons } from "../PaymentButtons/PaymentButtons";
import { CoffesInCart } from "../CoffesInCart/CoffesInCart";
import Link from "next/link";

const inter = Baloo_2({
  subsets: ["latin"],
});
export function CoffeeCart() {
  return (
    <div>
      <div className={`${inter.className} pb-4 text-lg font-bold`}>
        Complete seu pedido
      </div>

      <div className="rounded-tl-[6px]  rounded-tr-[44px] rounded-bl-[44px]   rounded-br-[6px]  bg-base-card p-10 max-w-[448px]">
        <div className="flex justify-center flex-col space-y-12 ">
          <CoffesInCart />
          <CoffesInCart />
          <CoffesInCart />
        </div>

        <div className="flex flex-col space-y-3 pt-12">
          <div className="flex justify-between">
            <h3 className=" text-base-text text-xs">Total de itens</h3>
            <span className=" text-base-text text-md">R$: 9,90</span>
          </div>
          <div className="flex justify-between">
            <h3 className=" text-base-text text-xs">Entrega</h3>
            <span className=" text-base-text text-md">R$: 3,50</span>
          </div>
          <div className="flex justify-between">
            <h3 className=" text-base-subtitle text-xl font-bold">Total </h3>
            <span className=" text-base-subtitle text-xl font-bold">
              R$: 9,90
            </span>
          </div>
        </div>

      <Link href={'/confirm-order'}>
      <button className="mt-6 py-3 bg-brandyellow-regular hover:bg-brandyellow-dark transition-colors rounded-[6px] w-full text-base-white text-md">
          CONFIRMAR PERIDO
        </button>
      </Link>
      </div>
    </div>
  );
}
