"use client";

import { cn } from "@/lib/utils";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";
import { LiaDownloadSolid } from "react-icons/lia";
import { buttonVariants } from "./ui/Button/_buttonVariants";
import Container from "./ui/Container";
import { textVariants } from "./ui/Heading";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  const pathname = usePathname();
  return (
    <header>
      <Container className="my-0 flex items-center justify-between py-4 leading-[1.3]">
        <Link href="/" className={cn(textVariants({ level: "h4" }))}>
          Mir Saheem Shafi
        </Link>

        <NavigationMenu.Root className="relative">
          <NavigationMenu.List className="relative hidden items-center gap-2 font-medium text-white sm:flex">
            <NavigationMenu.Item>
              <NavigationMenu.Link active={pathname == "/"} asChild>
                <Link
                  href="/"
                  className="rounded-full px-2.5 py-1 text-sm data-[active]:bg-white data-[active]:font-semibold data-[active]:text-slate-main"
                >
                  Home
                </Link>
              </NavigationMenu.Link>
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <NavigationMenu.Link active={pathname == "/about"} asChild>
                <Link
                  href="/about"
                  className="rounded-full px-2.5 py-1 text-sm data-[active]:bg-white data-[active]:font-semibold data-[active]:text-slate-main"
                >
                  About
                </Link>
              </NavigationMenu.Link>
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <NavigationMenu.Link asChild active={pathname == "/projects"}>
                <Link
                  href="/projects"
                  className="rounded-full px-2.5 py-1 text-sm data-[active]:bg-white data-[active]:font-semibold data-[active]:text-slate-main"
                >
                  Projects
                </Link>
              </NavigationMenu.Link>
            </NavigationMenu.Item>

            <NavigationMenu.Item asChild>
              <button className={buttonVariants({ size: "sm" })}>
                <LiaDownloadSolid size={20} /> Resume
              </button>
            </NavigationMenu.Item>
          </NavigationMenu.List>

          <NavigationMenu.Indicator className="z-[1] mt-1.5 flex justify-center">
            <div className="absolute aspect-square h-full -translate-y-full border-8 border-transparent border-b-slate-main"></div>
          </NavigationMenu.Indicator>
          <div className="absolute top-full w-full">
            <NavigationMenu.Viewport className="rounded border border-gray-800 bg-slate-main p-2" />
          </div>
        </NavigationMenu.Root>
      </Container>
    </header>
  );
};

export default Navbar;
