import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import React, { ButtonHTMLAttributes } from "react";
import { ImSpinner8 } from "react-icons/im";

type ButtonVariant = VariantProps<typeof buttonVariants>;
export const buttonVariants = cva(
  "rounded-full font-semibold flex focus-visible:ring outline-none ring-offset-1 items-center capitalize",
  {
    variants: {
      variant: {
        primary:
          "bg-yellow-brand text-slate-main focus-visible:ring-yellow-brand/20",
        secondary: "",
        ghost: "bg-slate-800 text-white focus-visible:ring-slate-500/20",
        outline:
          "bg-transparent border border-white text-white focus-visible:ring-white/10",
      },
      size: {
        sm: "text-sm px-2.5 py-1 gap-1",
        md: "px-3 py-1 gap-1",
        lg: "text-lg px-4 py-1 gap-2",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);
interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariant {
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, children, loading, ...props }, ref) => {
    return (
      <button
        ref={ref}
        {...props}
        className={cn(buttonVariants({ size, variant }), className)}
        disabled={loading}
      >
        {loading && (
          <span className="animate-spin inline-block">
            <ImSpinner8 />
          </span>
        )}
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export default Button;
