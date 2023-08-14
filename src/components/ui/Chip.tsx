import { cn } from "@/lib/utils";
import { FC, HTMLAttributes } from "react";

interface ChipProps extends HTMLAttributes<HTMLSpanElement> {}

const Chip: FC<ChipProps> = ({ children, className, ...props }) => {
  return (
    <span
      {...props}
      className={cn(
        "rounded-full shrink-0 border border-theme/20 bg-zinc-800 px-1.5 py-0.5 text-xs font-medium uppercase tracking-wide text-theme",
        className,
      )}
    >
      {children}
    </span>
  );
};

export default Chip;
