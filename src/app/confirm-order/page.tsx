import { Baloo_2 } from "next/font/google";
import { Icons } from "../components/Icons/Icons";
import { Clock, CurrencyDollar, MapPin } from "@phosphor-icons/react/dist/ssr";
import GuyOnBikeLogo from "../components/GuyOnBikeLogo/GuyOnBike";

const inter = Baloo_2({
  subsets: ["latin"],
});
export default function ConfirmOrder() {
  return (
    <div className="pt-20 px-40">
      <div className="pb-10">
        <h1
          className={`${inter.className} text-brandyellow-dark text-3xl font-bold`}
        >
          Uhu, pedido confirmado
        </h1>
        <span className={`${inter.className} text-xl text-base-subtitle`}>
          Agora é só esperar o café chegar até você
        </span>
      </div>

      <div className="grid gap-x-28 grid-cols-2  items-center">
        <div className="py-10 pl-20 flex flex-col space-y-8  border border-black rounded-tl-[6px] rounded-tr-[36px] rounded-bl-[36px] rounded-br-[6px]">
        <div className="flex gap-3 pb-8">
            <div>
              <div
                className={`text-base-background p-2  rounded-full bg-brand-500`}
              >
                <MapPin size={16} className="text-base-white " weight="fill" />
              </div>
            </div>

            <div className="flex flex-col ">
              <span className="text-md leading-[130%] text-base-text">
                Entrega em <b>Rua Zacarias Vieira</b>
              </span>
              <span className="text-md leading-[130%] text-base-text">
                Santa Teresa, São Pedro de Alcântara, SC
              </span>
            </div>
          </div>
          <div className="flex gap-3 pb-8">
            <div>
              <div
                className={`text-base-background p-2  rounded-full bg-brandyellow-regular`}
              >
                <Clock size={16} className="text-base-white " weight="fill" />
              </div>
            </div>
            <div className="flex flex-col ">
              <span className="text-md leading-[130%] text-base-text">
                Previsão de entrega
              </span>
              <span className="text-md leading-[130%] text-base-text font-bold">
                20 min - 30 min
              </span>
            </div>
          </div>
          <div className="flex gap-2 pb-8">
            <div>
              <div
                className={`text-base-background p-2  rounded-full bg-brandyellow-dark`}
              >
                <CurrencyDollar
                  size={16}
                  className="text-base-white "
                  weight="fill"
                />
              </div>
            </div>
            <div className="flex flex-col ">
              <span className="text-md leading-[130%] text-base-text">
                Pagamento na entrega
              </span>
              <span className="text-md leading-[130%] text-base-text font-bold">
                Cartão de crédito
              </span>
            </div>
          </div>
        </div>
        <GuyOnBikeLogo />
      </div>
    </div>
  );
}


/*
  <div className="flex gap-3 pb-8">
            <div>
              <div
                className={`text-base-background p-2  rounded-full bg-brand-500`}
              >
                <MapPin size={16} className="text-base-white " weight="fill" />
              </div>
            </div>

            <div className="flex flex-col ">
              <span className="text-md leading-[130%] text-base-text">
                Entrega em <b>Rua Zacarias Vieira</b>
              </span>
              <span className="text-md leading-[130%] text-base-text">
                Santa Teresa, São Pedro de Alcântara, SC
              </span>
            </div>
          </div>
          <div className="flex gap-3 pb-8">
            <div>
              <div
                className={`text-base-background p-2  rounded-full bg-brandyellow-regular`}
              >
                <Clock size={16} className="text-base-white " weight="fill" />
              </div>
            </div>
            <div className="flex flex-col ">
              <span className="text-md leading-[130%] text-base-text">
                Previsão de entrega
              </span>
              <span className="text-md leading-[130%] text-base-text font-bold">
                20 min - 30 min
              </span>
            </div>
          </div>
          <div className="flex gap-2 pb-8">
            <div>
              <div
                className={`text-base-background p-2  rounded-full bg-brandyellow-dark`}
              >
                <CurrencyDollar
                  size={16}
                  className="text-base-white "
                  weight="fill"
                />
              </div>
            </div>
            <div className="flex flex-col ">
              <span className="text-md leading-[130%] text-base-text">
                Pagamento na entrega
              </span>
              <span className="text-md leading-[130%] text-base-text font-bold">
                Cartão de crédito
              </span>
            </div>
          </div>
* */