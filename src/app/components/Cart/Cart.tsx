import { ShoppingCart } from "@phosphor-icons/react/dist/ssr";

export function Cart() {
    return (
        <div className="p-2 rounded-[6px] bg-brandyellow-light">
            <ShoppingCart size={24 } weight="fill" className="text-brandyellow-dark" />
        </div>
    )
}