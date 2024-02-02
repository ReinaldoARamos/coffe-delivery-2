import { MapPin } from "@phosphor-icons/react/dist/ssr";
import { Baloo_2 } from "next/font/google";

const inter = Baloo_2({
  subsets: ["latin"],
});
export function AdressForm() {
  return (
    <div>
      <div className={`${inter.className} pb-4 text-lg font-bold`}>
        Complete seu pedido
      </div>

      <div className="bg-base-card p-10">
        <div className="flex gap-2 pb-8">
          <MapPin size={22} className="text-brandyellow-dark" />
          <div className="flex flex-col ">
            <span className="text-md leading-[130%] text-base-subtitle">
              Endereço de entrega
            </span>
            <span className="text-sm leading-[130%] text-base-text">
              Informe o endereço onde deseja receber o seu pedido
            </span>
          </div>
        </div>
        <form className="flex flex-col space-y-4">
          <input
            placeholder="CEP"
            className="w-[200px] rounded border border-transparent bg-base-button p-3 text-sm leading-[130%] text-base-label transition-colors hover:cursor-pointer focus:border-brandyellow-dark focus:outline-none"
          />
          <input
            placeholder="Rua"
            className="rounded border border-transparent bg-base-button p-3 text-sm leading-[130%] text-base-label transition-colors hover:cursor-pointer focus:border-brandyellow-dark focus:outline-none"
          />

          <div className="flex gap-3">
            <input
              placeholder="Número"
              className="w-[200px] flex-none rounded border border-transparent bg-base-button p-3 text-sm leading-[130%] text-base-label transition-colors hover:cursor-pointer focus:border-brandyellow-dark focus:outline-none"
            />
            <input
              placeholder="Complementop"
              className="flex-grow rounded border border-transparent bg-base-button p-3 text-sm leading-[130%] text-base-label transition-colors hover:cursor-pointer focus:border-brandyellow-dark focus:outline-none"
            />
          </div>
          <div className="flex gap-3">
            <input
              placeholder="CEP"
              className="w-[200px] flex-none rounded border border-transparent bg-base-button p-3 text-sm leading-[130%] text-base-label transition-colors hover:cursor-pointer focus:border-brandyellow-dark focus:outline-none"
            />
            <input
              placeholder="CEP"
              className="flex-grow  rounded border border-transparent bg-base-button p-3 text-sm leading-[130%] text-base-label transition-colors hover:cursor-pointer focus:border-brandyellow-dark focus:outline-none"
            />
            <input
              placeholder="UF"
              className="flex-grow  overflow-hidden rounded border border-transparent bg-base-button p-3 text-sm leading-[130%] text-base-label transition-colors hover:cursor-pointer focus:border-brandyellow-dark focus:outline-none"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

//<div className={`${inter.className} text-lg font-bold pb-4`}>Complete seu pedido</div><div className="bg-base-card p-10">
