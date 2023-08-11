"use client";

import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { FiDownload } from "react-icons/fi";
import { HiDocumentText } from "react-icons/hi";
import Button from "../ui/Button";
import { buttonVariants } from "../ui/Button/_buttonVariants";
import Container from "../ui/Container";
import { headingVariants } from "../ui/Heading";
import ThemeSwitcher from "../ui/ThemeSwitcher";

interface NavbarProps {}

function Navbar({}: NavbarProps) {
  return (
    <header className="border-b border-zinc-800 lg:border-none">
      <Container className="my-0 flex items-center justify-between py-4 leading-[1.3]">
        <Link href="/" className={headingVariants({ level: "h4" })}>
          <span className="hidden sm:inline">Mir Saheem Shafi</span>
          <span className="sm:hidden">MSS</span>
        </Link>

        <NavigationMenu.Root className="relative z-[1] hidden flex-1 justify-center lg:flex">
          <NavigationMenu.List className="m-0 flex list-none space-x-2 p-1 text-sm font-semibold text-white">
            <NavigationMenu.Item>
              <NavigationMenu.Link asChild>
                <Link
                  href="/"
                  className={buttonVariants({ size: "sm", variant: "ghost" })}
                >
                  Home{" "}
                </Link>
              </NavigationMenu.Link>
              {/* <NavigationMenu.Content className="absolute left-0 top-0 w-full data-[motion=from-end]:animate-enterFromRight data-[motion=from-start]:animate-enterFromLeft data-[motion=to-end]:animate-exitToRight data-[motion=to-start]:animate-exitToLeft sm:w-auto">
                <ul className="one m-0 text-sm font-semibold list-none gap-x-[10px] p-2 sm:w-[500px] sm:grid-cols-2">
                  <li>
                    <Link href="/" className="flex items-center gap-3 py-2 px-3 rounded border border-zinc-700">
                      <FaSlackHash size={24} className="text-theme"/>
                    </Link>
                  </li>
                </ul>
              </NavigationMenu.Content> */}
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <NavigationMenu.Link asChild>
                <Link
                  className={buttonVariants({ size: "sm", variant: "ghost" })}
                  href="projects"
                >
                  Projects
                </Link>
              </NavigationMenu.Link>
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <NavigationMenu.Link asChild>
                <Link
                  className={buttonVariants({ size: "sm", variant: "ghost" })}
                  href="certifications"
                >
                  Certifications
                </Link>
              </NavigationMenu.Link>
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <NavigationMenu.Link asChild>
                <Link
                  href="#contact"
                  className={buttonVariants({ size: "sm", variant: "ghost" })}
                >
                  Contact
                </Link>
              </NavigationMenu.Link>
            </NavigationMenu.Item>

            <NavigationMenu.Indicator className="top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease] data-[state=hidden]:animate-fadeOut data-[state=visible]:animate-fadeIn">
              <div className="relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-zinc-800" />
            </NavigationMenu.Indicator>
          </NavigationMenu.List>

          <div className="perspective-[2000px] absolute left-0 top-full flex w-full justify-center text-white">
            <NavigationMenu.Viewport className="relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded border border-zinc-700/50 bg-zinc-800 shadow transition-[width,_height] duration-300 data-[state=closed]:animate-scaleOut data-[state=open]:animate-scaleIn sm:w-[var(--radix-navigation-menu-viewport-width)]" />
          </div>
        </NavigationMenu.Root>
        <div className="flex gap-2">
          <Button
            buttonStyle="icon"
            aria-label="Download Resume"
            title="Download Resume"
            className="sm:hidden"
          >
            <HiDocumentText size={20} />
          </Button>
          <Button size="sm" className="hidden sm:flex">
            <FiDownload size={16} /> Download Resume
          </Button>
          <ThemeSwitcher />
        </div>
      </Container>
    </header>
  );
}

export default Navbar;
