import { ShoppingCart } from "@phosphor-icons/react/dist/ssr";

export function Cart() {
  return (
    <div className="relative">
      <div className="p-2 rounded-[6px] bg-brandyellow-light relative">
        <ShoppingCart size={24} weight="fill" className="text-brandyellow-dark" />
        {/* Posicionando o ícone adicional no canto superior direito */}
        <div className="absolute -top-2 -right-2">
          <span className="bg-brandyellow-dark rounded-full p-2 w-5 h-5 flex items-center justify-center text-base-white">
            1
          </span>
        </div>
      </div>
    </div>
  );
}