"use client";

import { cn } from "@/lib/utils";
import * as RadixAvatar from "@radix-ui/react-avatar";
import { FC } from "react";

interface AvatarProps extends RadixAvatar.AvatarProps {
  src: string;
  name: string;
}

const Avatar: FC<AvatarProps> = ({ src, name, ...props }) => {
  return (
    <RadixAvatar.Root
      {...props}
      className={cn(
        "inline-flex aspect-square w-[45px] min-w-[23px] shrink-0 select-none items-center justify-center overflow-hidden rounded-full bg-black align-middle text-black",
        props.className,
      )}
    >
      <RadixAvatar.Image src={src} alt={name} />
      <RadixAvatar.Fallback className="leading-1 flex aspect-[inherit] h-full w-full items-center justify-center bg-zinc-300 text-xs font-medium uppercase text-black">
        {name.split(" ").at(0)?.at(0)}
        {name.split(" ").at(1)?.at(0)}
      </RadixAvatar.Fallback>
    </RadixAvatar.Root>
  );
};

export default Avatar;
