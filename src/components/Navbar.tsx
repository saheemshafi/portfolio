"use client";

import { cn } from "@/lib/utils";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { FC } from "react";
import { PiCaretDownBold } from "react-icons/pi";
import Button from "./ui/Button";
import { buttonVariants } from "./ui/Button/_buttonVariants";
import Container from "./ui/Container";
import { textVariants } from "./ui/Heading";
import ThemeSwitcher from "./ui/ThemeSwitcher";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <header>
      <Container className="my-0 flex items-center justify-between py-4 leading-[1.3]">
        <Link href="/" className={cn(textVariants({ level: "h4" }))}>
          Mir Saheem Shafi
        </Link>

        <NavigationMenu.Root className="relative z-[1] hidden flex-1 justify-end sm:flex">
          <NavigationMenu.List className="m-0 flex list-none space-x-2 p-1 text-sm font-semibold text-white">
            <NavigationMenu.Item>
              <NavigationMenu.Trigger
                className={buttonVariants({ size: "sm", variant: "ghost" })}
              >
                Home{" "}
                <PiCaretDownBold
                  className="relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                  aria-hidden
                />
              </NavigationMenu.Trigger>
              <NavigationMenu.Content className="absolute left-0 top-0 w-full data-[motion=from-end]:animate-enterFromRight data-[motion=from-start]:animate-enterFromLeft data-[motion=to-end]:animate-exitToRight data-[motion=to-start]:animate-exitToLeft sm:w-auto">
                <ul className="one m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[500px] sm:grid-cols-[0.75fr_1fr]">
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                  <li>4</li>
                  <li>5</li>
                </ul>
              </NavigationMenu.Content>
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <NavigationMenu.Trigger
                className={buttonVariants({ size: "sm", variant: "ghost" })}
              >
                Overview{" "}
                <PiCaretDownBold
                  className="relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                  aria-hidden
                />
              </NavigationMenu.Trigger>
              <NavigationMenu.Content className="absolute left-0 top-0 w-full sm:w-auto">
                <ul className="m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[600px] sm:grid-flow-col sm:grid-rows-3">
                  <li>a</li>
                  <li>ab</li>
                  <li>ac</li>
                  <li>add</li>
                </ul>
              </NavigationMenu.Content>
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <NavigationMenu.Link
                className={buttonVariants({ size: "sm", variant: "ghost" })}
                href="https://github.com/radix-ui"
              >
                Github
              </NavigationMenu.Link>
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <Button size="sm">Download Resume</Button>
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <ThemeSwitcher />
            </NavigationMenu.Item>

            <NavigationMenu.Indicator className="top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease] data-[state=hidden]:animate-fadeOut data-[state=visible]:animate-fadeIn">
              <div className="relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-zinc-800" />
            </NavigationMenu.Indicator>
          </NavigationMenu.List>

          <div className="perspective-[2000px] absolute left-0 top-full flex w-full justify-end text-white">
            <NavigationMenu.Viewport className="relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded border border-zinc-700/50 bg-zinc-800 shadow transition-[width,_height] duration-300 data-[state=closed]:animate-scaleOut data-[state=open]:animate-scaleIn sm:w-[var(--radix-navigation-menu-viewport-width)]" />
          </div>
        </NavigationMenu.Root>
      </Container>
    </header>
  );
};

export default Navbar;
