import { ShoppingCart } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export function Cart() {
  return (
    <Link href={"/cart"} className="relative">
      <div  className="group relative rounded-[6px] bg-brandyellow-light  p-2 transition-colors hover:cursor-pointer hover:bg-brandyellow-regular" >
        <ShoppingCart
          size={24}
          weight="fill"
          className="text-brandyellow-dark transition-colors group-hover:text-brandyellow-light"
        />
        {/* Posicionando o ícone adicional no canto superior direito */}
        <div className="absolute -right-2 -top-2">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brandyellow-dark p-2 text-base-white">
            1
          </span>
        </div>
      </div>
    </Link>
  );
}
