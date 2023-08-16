import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import { HTMLAttributes } from "react";
import { buttonVariants } from "./ui/Button/_buttonVariants";

interface LinkTileProps extends LinkProps, HTMLAttributes<HTMLAnchorElement> {
  size?: "sm" | "md";
}

function LinkTile({ className, size = "md", ...props }: LinkTileProps) {
  return (
    <Link
      {...props}
      target="_blank"
      referrerPolicy="no-referrer"
      className={cn(
        "group flex items-center border-zinc-800 p-2 px-3 text-sm max-sm:rounded-md max-sm:border max-sm:p-2",
        size == "sm"
          ? "gap-2 text-xs"
          : "[&_p.title] gap-3 text-sm [&_.icon]:h-10 [&_.icon]:w-10",
        className,
      )}
    />
  );
}

function Icon({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      {...props}
      className={cn(
        buttonVariants({ buttonStyle: "icon", variant: "secondary" }),
        "icon group-hover:bg-zinc-700",
        className,
      )}
    />
  );
}

function Title({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p {...props} className={cn("title mb-[3px] font-semibold", className)} />
  );
}

function Url({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return <p {...props} className={cn("text-zinc-300", className)} />;
}

LinkTile.Icon = Icon;
LinkTile.Title = Title;
LinkTile.Link = Url;

export default LinkTile;
