"use client"

import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GoHomeFill } from "react-icons/go";
import { MdSpaceDashboard, MdCall } from "react-icons/md";
import { PiCertificateFill } from "react-icons/pi";

function MobileNavigation({}) {
  const pathname = usePathname();
  return (
    <NavigationMenu.Root className="fixed inset-x-0 bottom-0 z-10 mx-auto border-t border-t-zinc-600 bg-zinc-800 py-1 text-xs font-medium backdrop-blur-sm sm:mb-4 sm:max-w-[400px] sm:rounded-lg sm:bg-zinc-800/90 lg:hidden">
      <NavigationMenu.List className="grid grid-cols-4 gap-2">
        <NavigationMenu.Item>
          <NavigationMenu.Link
            active={pathname == "/"}
            className="group flex flex-col items-center gap-1 rounded-sm p-1 outline-none"
            asChild
          >
            <Link href="/">
              <span className="grid place-items-center rounded-full bg-zinc-700/50 px-3 py-0.5 transition-all group-hover:bg-theme/10 group-focus-visible:bg-theme/10 group-focus-visible:ring-1 group-focus-visible:ring-theme/30 group-data-[active]:text-theme">
                <GoHomeFill size={24} />
              </span>
              <span className="text-zinc-300 transition-colors group-hover:text-theme group-focus-visible:text-theme">
                Home
              </span>
            </Link>
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link
            className="group flex flex-col items-center gap-1 rounded-sm p-1 outline-none"
            active={pathname == "/projects"}
            asChild
          >
            <Link href="projects">
              <span className="grid place-items-center rounded-full bg-zinc-700/50 px-3 py-0.5 transition-all group-hover:bg-theme/10 group-focus-visible:bg-theme/10 group-focus-visible:ring-1 group-focus-visible:ring-theme/30 group-data-[active]:text-theme">
                <MdSpaceDashboard size={24} />
              </span>
              <span className="text-zinc-300 transition-colors group-hover:text-theme group-focus-visible:text-theme">
                Projects
              </span>
            </Link>
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link
            className="group flex flex-col items-center gap-1 rounded-sm p-1 outline-none"
            asChild
            active={pathname == "/certifications"}
          >
            <Link href="certifications">
              <span className="grid place-items-center rounded-full bg-zinc-700/50 px-3 py-0.5 transition-all group-hover:bg-theme/10 group-focus-visible:bg-theme/10 group-focus-visible:ring-1 group-focus-visible:ring-theme/30 group-data-[active]:text-theme">
                <PiCertificateFill size={24} />
              </span>
              <span className="text-zinc-300 transition-colors group-hover:text-theme group-focus-visible:text-theme">
                Certificates
              </span>
            </Link>
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link
            className="group flex flex-col items-center gap-1 rounded-sm p-1 outline-none"
            asChild
          >
            <Link href="#contact">
              <span className="grid place-items-center rounded-full bg-zinc-700/50 px-3 py-0.5 transition-all group-hover:bg-theme/10 group-focus-visible:bg-theme/10 group-focus-visible:ring-1 group-focus-visible:ring-theme/30 group-data-[active]:text-theme">
                <MdCall size={24} />
              </span>
              <span className="text-zinc-300 transition-colors group-hover:text-theme group-focus-visible:text-theme">
                Contact
              </span>
            </Link>
          </NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
}

export default MobileNavigation;
