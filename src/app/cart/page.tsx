import { Baloo_2 } from "next/font/google";
import { AdressForm } from "../components/AdressForm/AdressForm";
import { CoffeeCart } from "../components/CoffeeCart/CoffeesCart";

const inter = Baloo_2({
    subsets: ["latin"],
   
  });
  
export default function Cart() {
    return (
        <div className="pt-10 lg:px-40 px-10 lg:grid lg:grid-cols-2 gap-x-8 flex flex-col ">
        <AdressForm />
       <CoffeeCart />
      </div>
    )
}