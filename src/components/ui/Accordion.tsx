"use client";

import { cn } from "@/lib/utils";
import * as RadixAccordion from "@radix-ui/react-accordion";
import { PiCaretDownBold } from "react-icons/pi";

/**
 * Union of types utilized by `RadixUI` in the `RadixAccordion.Root`.
 */
type AccordionProps =
  | ({ type: "single" } & RadixAccordion.AccordionSingleProps)
  | ({ type: "multiple" } & RadixAccordion.AccordionMultipleProps);

/**
 * Renders a custom styled radix accordion.
 * @param {string} props.type "single" - One item can be opened at a time.
 * @param {string} props.type "multiple" - Many items can be opened at a time.
 * @returns {JSX.Element} Styled `RadixAccordion.Root` element.
 */
function Root({ children, className, ...props }: AccordionProps) {
  return (
    <RadixAccordion.Root
      className={cn("grid items-start gap-4 md:grid-cols-2", className)}
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
      className="group flex w-full items-center justify-between rounded-[inherit] border-t border-zinc-700 bg-zinc-800 p-2 text-start font-semibold outline-none"
      {...props}
    >
      {children}
      <PiCaretDownBold className="mx-2 -rotate-90 transition-transform ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-aria-expanded:rotate-0" />
    </RadixAccordion.Trigger>
  );
}

function Content({ children }: RadixAccordion.AccordionContentProps) {
  return (
    <RadixAccordion.Content className="w-full overflow-hidden data-[state=closed]:animate-slideUp  data-[state=open]:animate-slideDown [&_a]:underline">
      <div className="p-4">{children}</div>
    </RadixAccordion.Content>
  );
}

export { Content, Item, Root, Trigger };
