import { cn } from "@/lib/utils";
import { FC } from "react";

interface SeparatorProps {
  className?: string;
  vertical?: boolean;
}

const Separator: FC<SeparatorProps> = ({ className, vertical }) => {
  return (
    <hr
      className={cn(
        "mx-auto h-[1px] w-full border-none bg-zinc-800",
        className,
        vertical && "h-[600px] w-[1px]",
      )}
    ></hr>
  );
};

export default Separator;
