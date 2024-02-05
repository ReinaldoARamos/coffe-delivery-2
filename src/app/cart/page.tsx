import { Baloo_2 } from "next/font/google";
import { AdressForm } from "../components/AdressForm/AdressForm";
import { CoffeeCart } from "../components/CoffeeCart/CoffeesCart";

const inter = Baloo_2({
    subsets: ["latin"],
   
  });
  
export default function Cart() {
    return (
        <div className="pt-10 px-40 grid grid-cols-2 gap-x-8 ">
        <AdressForm />
       <CoffeeCart />
      </div>
    )
}