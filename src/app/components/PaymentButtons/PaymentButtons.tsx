import { ChartLineUp } from "@phosphor-icons/react/dist/ssr";

interface ItemsProps {
  text: string;
  icon: React.ElementType;
}
//         <IconComponent size={16} weight="fill" />

export function PaymentButtons({
  text,
  icon: IconComponent = ChartLineUp,
}: ItemsProps) {
  return (
    <button className=" item-center  group flex w-full justify-center gap-3 rounded-[6px] border border-transparent bg-base-button py-4 text-xs text-base-text transition-colors hover:border-brand-500 hover:bg-brand-100">
      <IconComponent size={16} className="text-brand-purple " />
      {text}
    </button>
  );
}
