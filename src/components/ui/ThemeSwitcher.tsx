"use client";

import * as Popover from "@/components/ui/Popover";
import * as RadioGroup from "@radix-ui/react-radio-group";

import { FC, useEffect, useState } from "react";
import Button from "./Button";
import GradientLine from "./GradientLine";
import { IoSunny } from "react-icons/io5";

interface ThemeSwitcherProps {}

const ThemeSwitcher: FC<ThemeSwitcherProps> = ({}) => {
  const [theme, setTheme] = useState("yellow-249 204 63");

  useEffect(() => {
    if (typeof localStorage == "undefined") return;
    const _theme = localStorage.getItem("theme");
    setTheme(_theme || theme);
    document.documentElement.style.setProperty(
      "--theme-color",
      (_theme || theme)?.split("-")[1],
    );
  }, [theme]);

  const onChange = (theme: string) => {
    localStorage.setItem("theme", theme);
    setTheme(theme);
  };

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <Button size="sm" variant="secondary">
          <IoSunny className="text-theme"/>
          Theme
        </Button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content popoverTitle="Themes" className="mr-1 w-[150px]">
          <GradientLine className="mb-2" />

          <RadioGroup.Root
            defaultValue={theme}
            className="grid text-sm font-medium"
            onValueChange={onChange}
          >
            <div className="flex items-center rounded-full border border-transparent p-2 transition-all [&:has([data-state=checked])]:border-yellow-main/20 [&:has([data-state=checked])]:bg-yellow-main/5">
              <RadioGroup.Item
                className="h-[20px] w-[20px] cursor-default rounded-full bg-zinc-700 shadow-black outline-none ring-1 ring-zinc-600 focus:shadow-[0_0_0_2px] focus:shadow-yellow-main"
                value="yellow-249 204 63"
                id="yellow"
              >
                <RadioGroup.Indicator className="relative flex h-full w-full items-center justify-center after:block after:h-[11px] after:w-[11px] after:rounded-[50%] after:bg-yellow-main" />
              </RadioGroup.Item>
              <label
                className="pl-3 text-[15px] leading-none text-zinc-300"
                htmlFor="yellow"
              >
                Yellow
              </label>
            </div>
            <div className="flex items-center rounded-full border border-transparent p-2 transition-all [&:has([data-state=checked])]:border-emerald-400/20 [&:has([data-state=checked])]:bg-emerald-400/5">
              <RadioGroup.Item
                className="h-[20px] w-[20px] cursor-default rounded-full bg-zinc-700 shadow-black  outline-none ring-1 ring-zinc-600 focus:shadow-[0_0_0_2px] focus:shadow-emerald-400"
                value="emerald-52 211 153"
                id="emerald"
              >
                <RadioGroup.Indicator className="relative flex h-full w-full items-center justify-center after:block after:h-[11px] after:w-[11px] after:rounded-[50%] after:bg-emerald-400" />
              </RadioGroup.Item>
              <label
                className="pl-3 text-[15px] leading-none text-zinc-300"
                htmlFor="emerald"
              >
                Emerald
              </label>
            </div>
            <div className="flex items-center rounded-full border border-transparent p-2 transition-all [&:has([data-state=checked])]:border-sky-400/20 [&:has([data-state=checked])]:bg-sky-400/5">
              <RadioGroup.Item
                className="h-[20px] w-[20px] cursor-default rounded-full bg-zinc-700 shadow-black  outline-none ring-1 ring-zinc-600 focus:shadow-[0_0_0_2px] focus:shadow-sky-400"
                value="skyblue-56 189 248"
                id="skyblue"
              >
                <RadioGroup.Indicator className="relative flex h-full w-full items-center justify-center after:block after:h-[11px] after:w-[11px] after:rounded-[50%] after:bg-sky-400" />
              </RadioGroup.Item>
              <label
                className="pl-3 text-[15px] leading-none text-zinc-300"
                htmlFor="skyblue"
              >
                Skyblue
              </label>
            </div>
          </RadioGroup.Root>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

export default ThemeSwitcher;
