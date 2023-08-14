import { VariantProps, cva } from "class-variance-authority";

export type ButtonVariant = VariantProps<typeof buttonVariants>;
export const buttonVariants = cva(
  "rounded-md font-semibold w-fit group disabled:opacity-80 flex focus-visible:ring outline-none shadow-sm ring-offset-1 items-center capitalize transition-all active:ring",
  {
    variants: {
      variant: {
        primary:
          "bg-theme text-slate-main focus-visible:ring-theme/20 active:ring-theme/20",
        secondary:
          "bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-white focus-visible:ring-slate-500/20 active:ring-slate-500/20",
        ghost:
          "border underline md:hover:no-underline border-transparent shadow-none focus-visible:border-zinc-700 focus-visible:bg-zinc-800 focus-visible:ring-slate-500/20 active:ring-slate-500/20",
        outline:
          "bg-transparent border hover:bg-zinc-800 border-white text-white focus-visible:ring-white/10 active:ring-white/10",
      },
      buttonStyle: {
        icon: "aspect-square w-8 h-8 p-[0_!important] grid place-items-center",
      },
      size: {
        sm: "text-sm px-2.5 py-1 gap-1",
        md: "px-3 py-1 gap-1",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);
