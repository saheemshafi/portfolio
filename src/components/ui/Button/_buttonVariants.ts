import { VariantProps, cva } from "class-variance-authority";

export type ButtonVariant = VariantProps<typeof buttonVariants>;
export const buttonVariants = cva(
  "rounded-full font-semibold group disabled:opacity-80 flex focus-visible:ring outline-none shadow-sm ring-offset-1 items-center capitalize transition-all active:ring",
  {
    variants: {
      variant: {
        primary:
          "bg-brand text-slate-main focus-visible:ring-brand/20 active:ring-brand/20",
        secondary:
          "bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-white focus-visible:ring-slate-500/20 active:ring-slate-500/20",
        ghost: "border border-transparent hover:border-zinc-700 hover:bg-zinc-800 focus-visible:border-zinc-700 focus-visible:bg-zinc-800 focus-visible:ring-slate-500/20 active:ring-slate-500/20",
        outline:
          "bg-transparent border hover:bg-zinc-800 border-white text-white focus-visible:ring-white/10 active:ring-white/10",
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
