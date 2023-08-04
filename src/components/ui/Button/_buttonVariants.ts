import { VariantProps, cva } from "class-variance-authority";

export type ButtonVariant = VariantProps<typeof buttonVariants>;
export const buttonVariants = cva(
  "rounded-full font-semibold disabled:opacity-80 flex focus-visible:ring outline-none shadow-sm ring-offset-1 items-center capitalize transition-colors",
  {
    variants: {
      variant: {
        primary:
          "bg-yellow-brand text-slate-main focus-visible:ring-yellow-brand/20",
        secondary:
          "bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-white focus-visible:ring-slate-500/20",
        ghost: "",
        outline:
          "bg-transparent border hover:bg-zinc-800 border-white text-white focus-visible:ring-white/10",
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
  },
);
