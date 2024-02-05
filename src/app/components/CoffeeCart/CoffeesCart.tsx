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

const inter = Baloo_2({
  subsets: ["latin"],
});
export function CoffeeCart() {
  return (
    <div>
      <div className={`${inter.className} pb-4 text-lg font-bold`}>
        Complete seu pedido
      </div>

      <div className="rounded-tl-[6px] rounded-tr-[44px] rounded-bl-[44px]   rounded-br-[6px]  bg-base-card p-10 max-w-[448px]">
        <div className="flex justify-center">
            <CoffesInCart />
        </div>
      </div>
    </div>
  );
}
