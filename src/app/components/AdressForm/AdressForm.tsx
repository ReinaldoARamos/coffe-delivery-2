import { Bank, CreditCard, CurrencyDollar, MapPin, Money } from "@phosphor-icons/react/dist/ssr";
import { Baloo_2 } from "next/font/google";
import { PaymentButtons } from "../PaymentButtons/PaymentButtons";

const inter = Baloo_2({
  subsets: ["latin"],
});
export function AdressForm() {
  return (
    <form>
      <div className={`${inter.className} pb-4 text-lg font-bold`}>
        Complete seu pedido
      </div>

      <div className="rounded-[6px] bg-base-card p-10">
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
        <div className="flex flex-col space-y-4">
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
              placeholder="Bairro"
              className="w-[200px] flex-none rounded border border-transparent bg-base-button p-3 text-sm leading-[130%] text-base-label transition-colors hover:cursor-pointer focus:border-brandyellow-dark focus:outline-none"
            />
            <input
              placeholder="Cidade"
              className="flex-grow  rounded border border-transparent bg-base-button p-3 text-sm leading-[130%] text-base-label transition-colors hover:cursor-pointer focus:border-brandyellow-dark focus:outline-none"
            />
            <input
              placeholder="UF"
              className="flex-grow  overflow-hidden rounded border border-transparent bg-base-button p-3 text-sm leading-[130%] text-base-label transition-colors hover:cursor-pointer focus:border-brandyellow-dark focus:outline-none"
            />
          </div>
        </div>
      </div>

      <div className="mt-3 rounded-[6px] bg-base-card p-10">
        <div className="flex gap-2 pb-8">
          <CurrencyDollar size={22} className="text-brand-purple" />

          <div className="flex flex-col ">
            <span className="text-md text-base-subtitle">Pagamento</span>
            <span className="text-sm text-base-text">
              O pagamento é feito na entrega, escolha a forma que deseja pagar
            </span>
          </div>
        
        </div>
        <div className="flex  justify-between flex-1 gap-3 mt-8">
            <PaymentButtons text={"CRÉDITO"} icon={CreditCard} />
            <PaymentButtons text={"DÉBITO"} icon={Bank}  />
            <PaymentButtons text={"DINHEIRO"} icon={Money} />
          </div>
      </div>
    </form>
  );
}
