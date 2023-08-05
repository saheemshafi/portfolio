"use client";

import { FC } from "react";
import * as RadixAvatar from "@radix-ui/react-avatar";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface AvatarProps extends RadixAvatar.AvatarProps {
  src: string;
  name: string;
}

const Avatar: FC<AvatarProps> = ({ src, name, ...props }) => {
  console.log(name.split(" "));
  return (
    <RadixAvatar.Root
      {...props}
      className={cn(
        "inline-flex aspect-square w-[45px] select-none items-center justify-center overflow-hidden rounded-full bg-black align-middle text-black",
        props.className,
      )}
    >
      <RadixAvatar.Image asChild>
        <Image src={src} className="aspect-[inherit]" alt={name}/>
      </RadixAvatar.Image>
      <RadixAvatar.Fallback className="leading-1 flex aspect-[inherit] h-full w-full items-center justify-center bg-zinc-300 text-[15px] font-medium uppercase text-black">
        {name.split(" ").at(0)?.at(0)}
        {name.split(" ").at(1)?.at(0)}
      </RadixAvatar.Fallback>
    </RadixAvatar.Root>
  );
};

export default Avatar;
