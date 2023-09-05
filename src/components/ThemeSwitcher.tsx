"use client";

import * as Popover from "@/components/ui/Popover";
import * as RadioGroup from "@radix-ui/react-radio-group";

import { ThemeContext } from "@/contexts/ThemeProvider";
import { FC, useContext } from "react";
import { IoSunny } from "react-icons/io5";
import Button from "./ui/Button";
import GradientLine from "./ui/Separator";

interface ThemeSwitcherProps {}

const ThemeSwitcher: FC<ThemeSwitcherProps> = ({}) => {
  const { theme, onThemeChange } = useContext(ThemeContext);

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <Button size="sm" variant="secondary">
          <IoSunny className="text-theme" />
          Theme
        </Button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content popoverTitle="Themes" className="mr-1 w-[150px]">
          <GradientLine className="mb-2" />

          <RadioGroup.Root
            defaultValue={theme}
            className="grid text-sm font-medium text-white"
            onValueChange={onThemeChange}
          >
            <div className="flex items-center rounded-full border border-transparent p-2 transition-all [&:has([data-state=checked])]:border-yellow-main/20 [&:has([data-state=checked])]:bg-yellow-main/5">
              <RadioGroup.Item
                className="h-[20px] w-[20px] cursor-default rounded-full bg-zinc-700 shadow-black outline-none ring-1 ring-zinc-600 focus:shadow-[0_0_0_2px] focus:shadow-yellow-main"
                value="yellow"
                id="yellow"
              >
                <RadioGroup.Indicator className="relative flex h-full w-full items-center justify-center after:block after:h-[11px] after:w-[11px] after:rounded-[50%] after:bg-yellow-main" />
              </RadioGroup.Item>
              <label className="pl-3 leading-none" htmlFor="yellow">
                Yellow
              </label>
            </div>
            <div className="flex items-center rounded-full border border-transparent p-2 transition-all [&:has([data-state=checked])]:border-emerald-400/20 [&:has([data-state=checked])]:bg-emerald-400/5">
              <RadioGroup.Item
                className="h-[20px] w-[20px] cursor-default rounded-full bg-zinc-700 shadow-black  outline-none ring-1 ring-zinc-600 focus:shadow-[0_0_0_2px] focus:shadow-emerald-400"
                value="emerald"
                id="emerald"
              >
                <RadioGroup.Indicator className="relative flex h-full w-full items-center justify-center after:block after:h-[11px] after:w-[11px] after:rounded-[50%] after:bg-emerald-400" />
              </RadioGroup.Item>
              <label className="pl-3 leading-none" htmlFor="emerald">
                Emerald
              </label>
            </div>
            <div className="flex items-center rounded-full border border-transparent p-2 transition-all [&:has([data-state=checked])]:border-sky-400/20 [&:has([data-state=checked])]:bg-sky-400/5">
              <RadioGroup.Item
                className="h-[20px] w-[20px] cursor-default rounded-full bg-zinc-700 shadow-black  outline-none ring-1 ring-zinc-600 focus:shadow-[0_0_0_2px] focus:shadow-sky-400"
                value="skyblue"
                id="skyblue"
              >
                <RadioGroup.Indicator className="relative flex h-full w-full items-center justify-center after:block after:h-[11px] after:w-[11px] after:rounded-[50%] after:bg-sky-400" />
              </RadioGroup.Item>
              <label className="pl-3 leading-none" htmlFor="skyblue">
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
