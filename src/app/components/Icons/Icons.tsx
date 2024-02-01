import { ChartLineUp } from "@phosphor-icons/react/dist/ssr";

interface ItemsProps {
    text: string;
    icon: React.ElementType;
   backgroundColor: string;
  }


export function Icons({ text, icon: IconComponent = ChartLineUp, backgroundColor }: ItemsProps) {
    return (
    <div className="flex gap-3 items-center">
         <div  className={`text-base-background p-2  rounded-full ${backgroundColor}`}>
         <IconComponent size={16} weight="fill" />
         </div>
         <div className="text-md text-base-text">{text}</div>
    </div>
    );
  }

  //`text-base-background p-2  rounded-full`