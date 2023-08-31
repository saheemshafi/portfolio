"use client";

import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { links } from ".";

function MobileNavigation({}) {
  const pathname = usePathname();
  return (
    <NavigationMenu.Root className="fixed inset-x-0 bottom-0 z-10 mx-auto border-theme/5 bg-slate-main bg-gradient-to-t from-theme/5 py-1 text-xs font-medium backdrop-blur-sm sm:mb-4 sm:max-w-[400px] sm:rounded-lg sm:border sm:shadow-[0_4px_8px] sm:shadow-slate-main/40 md:hidden">
      <NavigationMenu.List className="grid grid-cols-4 gap-2">
        {links.map(({ path, icon: Icon, text }) => (
          <NavigationMenu.Item key={path}>
            <NavigationMenu.Link
              active={pathname == path}
              className="group flex flex-col items-center gap-1 rounded-sm p-1 outline-none"
              asChild
            >
              <Link href={path}>
                <span className="grid place-items-center rounded-full px-3 py-0.5 transition-all group-focus-visible:ring-1 group-focus-visible:ring-theme/30 group-data-[active]:bg-zinc-800 group-data-[active]:text-theme sm:hover:bg-zinc-800">
                  <Icon size={24} />
                </span>
                <span className="text-zinc-300 transition-colors sm:group-hover:text-theme sm:group-focus-visible:text-theme">
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
