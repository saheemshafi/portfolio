"use client";

import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { FiDownload } from "react-icons/fi";
import Button from "../ui/Button";
import { buttonVariants } from "../ui/Button/_buttonVariants";
import Container from "../ui/Container";
import { headingVariants } from "../ui/Heading";
import ThemeSwitcher from "../ThemeSwitcher";
import { GoHomeFill } from "react-icons/go";
import { MdSpaceDashboard, MdCall } from "react-icons/md";
import { PiCertificateFill } from "react-icons/pi";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export const links = [
  { path: "/", icon: GoHomeFill, text: "Home" },
  { path: "/projects", icon: MdSpaceDashboard, text: "Projects" },
  { path: "/certifications", icon: PiCertificateFill, text: "Certificates" },
  { path: "/#contact", icon: MdCall, text: "Contact" },
];

interface NavbarProps {}

function Navbar({}: NavbarProps) {
  const pathname = usePathname();
  return (
    <header className="border-b border-zinc-800 lg:border-none">
      <Container className="my-0 flex items-center justify-between py-4 leading-[1.3]">
        <Link href="/" className={headingVariants({ level: "h4" })}>
          <span className="hidden sm:inline">Mir Saheem Shafi</span>
          <span className="sm:hidden">MSS</span>
        </Link>

        <NavigationMenu.Root className="relative z-[1] hidden flex-1 justify-center lg:flex">
          <NavigationMenu.List className="m-0 flex list-none space-x-2 p-1 text-sm font-semibold text-white">
            {links.map(({ path, text }) => (
              <NavigationMenu.Item key={path}>
                <NavigationMenu.Link active={pathname == path} asChild>
                  <Link
                    href={path}
                    className={cn(
                      buttonVariants({ size: "sm", variant: "secondary" }),
                      "border-transparent bg-transparent hover:border-zinc-700 hover:bg-zinc-800 data-[active]:border-theme/20 data-[active]:bg-theme/5 data-[active]:text-theme",
                    )}
                  >
                    {text}
                  </Link>
                </NavigationMenu.Link>
              </NavigationMenu.Item>
            ))}

            <NavigationMenu.Indicator className="top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease] data-[state=hidden]:animate-fadeOut data-[state=visible]:animate-fadeIn">
              <div className="relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-zinc-800" />
            </NavigationMenu.Indicator>
          </NavigationMenu.List>

          <div className="perspective-[2000px] absolute left-0 top-full flex w-full justify-center text-white">
            <NavigationMenu.Viewport className="relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded border border-zinc-700/50 bg-zinc-800 shadow transition-[width,_height] duration-300 data-[state=closed]:animate-scaleOut data-[state=open]:animate-scaleIn sm:w-[var(--radix-navigation-menu-viewport-width)]" />
          </div>
        </NavigationMenu.Root>
        <div className="flex items-center gap-2">
          <ThemeSwitcher />
          <Button size="sm" variant="outline">
            <FiDownload size={16} /> Resume
          </Button>
        </div>
      </Container>
    </header>
  );
}

export default Navbar;
