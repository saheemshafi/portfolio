import { cn } from "@/lib/utils";
import { FC } from "react";

interface GradientLineProps {
  className?: string;
  vertical?: boolean;
}

const GradientLine: FC<GradientLineProps> = ({ className, vertical }) => {
  return (
    <hr
      className={cn(
        "mx-auto h-[1px] w-full border-none bg-gradient-to-r from-transparent via-white to-[transparent]",
        className,
        vertical && "h-[600px] w-[1px] bg-gradient-to-t",
      )}
    ></hr>
  );
};

export default GradientLine;
