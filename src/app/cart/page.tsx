import { Baloo_2 } from "next/font/google";
import { AdressForm } from "../components/AdressForm/AdressForm";

const inter = Baloo_2({
    subsets: ["latin"],
   
  });
  
export default function Cart() {
    return (
        <div className="pt-10 px-40 grid grid-cols-2 gap-x-8 ">
        <AdressForm />
        <div className={`${inter.className} pb-4 text-lg font-bold`}>
        Cafés selecionados
      </div>
      </div>
    )
}