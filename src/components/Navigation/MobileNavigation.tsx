"use client";

import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { links } from ".";
import { motion } from "framer-motion";

function MobileNavigation({}) {
  const pathname = usePathname();
  return (
    <NavigationMenu.Root className="fixed inset-x-0 bottom-0 z-10 mx-auto border-theme/5 bg-slate-main bg-gradient-to-t from-theme/5 py-1 text-xs font-medium backdrop-blur-sm sm:mb-4 sm:max-w-[400px] sm:rounded-lg sm:border sm:shadow-[0_4px_8px] sm:shadow-slate-main/40 md:hidden">
      <NavigationMenu.List className="grid grid-cols-4 gap-2">
        {links.map(({ path, icon: Icon, text }) => (
          <NavigationMenu.Item key={path}>
            <NavigationMenu.Link
              active={pathname == path}
              className="group text-zinc-300 data-[active]:text-theme flex flex-col items-center gap-1 rounded-sm p-1 outline-none"
              asChild
            >
              <Link
                href={path}
              >
                <span className="relative isolate grid place-items-center px-3 py-0.5">
                  <Icon size={24} />
                  <div className="absolute inset-0 -z-[1] translate-y-1/2 scale-50 rounded-full opacity-0 transition-all duration-[250ms] ease-in-out group-focus-visible:ring-1 group-focus-visible:ring-theme/30 group-data-[active]:translate-y-0 group-data-[active]:scale-100 group-data-[active]:bg-theme/5 group-data-[active]:opacity-100"></div>
                </span>
                <span className="transition-colors sm:group-hover:text-theme sm:group-focus-visible:text-theme">
                  {text}
                </span>
              </Link>
            </NavigationMenu.Link>
          </NavigationMenu.Item>
        ))}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
}

export default MobileNavigation;
