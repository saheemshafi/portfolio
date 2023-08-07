"use client";

import * as RadixAccordion from "@radix-ui/react-accordion";
import { motion } from "framer-motion";
import { PiCaretDownBold } from "react-icons/pi";

type AccordionProps =
  | ({ type: "single" } & RadixAccordion.AccordionSingleProps)
  | ({ type: "multiple" } & RadixAccordion.AccordionMultipleProps);

function Root({ children, ...props }: AccordionProps) {
  return (
    <RadixAccordion.Root
      className="grid items-start gap-4 md:grid-cols-2"
      {...props}
    >
      {children}
    </RadixAccordion.Root>
  );
}

function Item({ children, ...props }: RadixAccordion.AccordionItemProps) {
  return (
    <RadixAccordion.Item
      className="rounded border-x border-b border-zinc-800 bg-zinc-900 outline-none transition-all focus-within:relative focus-within:z-10 focus-within:border focus-within:border-white/60 focus-within:shadow-[0_0_0_3px] focus-within:shadow-zinc-500/30"
      {...props}
    >
      {children}
    </RadixAccordion.Item>
  );
}

function Trigger({ children, ...props }: RadixAccordion.AccordionTriggerProps) {
  return (
    <RadixAccordion.Trigger
      className="group flex w-full items-center justify-between rounded-[inherit] border-t border-zinc-700 bg-zinc-800 p-2 text-start text-lg font-semibold outline-none"
      {...props}
    >
      <span className="bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent group-hover:from-gray-100 group-hover:to-white group-focus-visible:from-gray-100 group-focus-visible:to-white">
        {children}
      </span>
      <PiCaretDownBold className="mx-2 -rotate-90 transition-transform ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-aria-expanded:rotate-0" />
    </RadixAccordion.Trigger>
  );
}

function Content({ children }: RadixAccordion.AccordionContentProps) {
  return (
    <RadixAccordion.Content className="[&_a]:underline w-full overflow-hidden  data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown [&_strong]:font-semibold">
      <div className="p-2 pt-4">{children}</div>
    </RadixAccordion.Content>
  );
}

export { Content, Item, Root, Trigger };
