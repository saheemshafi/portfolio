import { cn } from "@/lib/utils";
import * as RadixPopover from "@radix-ui/react-popover";
import { IoCloseOutline } from "react-icons/io5";
import Button from "./Button";
import Separator from "./Separator";

interface PopoverProps {}

function Content({
  children,
  popoverTitle,
  ...props
}: RadixPopover.PopoverContentProps & { popoverTitle: string }) {
  return (
    <RadixPopover.Content
      {...props}
      className={cn(
        "rounded border border-zinc-700/50 bg-slate-main p-2 shadow data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=top]:animate-slideDownAndFade",
        props.className,
      )}
    >
      <div className="flex items-center justify-between pb-1 text-sm font-semibold">
        <p>{popoverTitle}</p>
        <RadixPopover.Close asChild>
          <Button
            variant="ghost"
            buttonStyle="icon"
            className="h-6 w-6"
            aria-label="Close Theme Popover"
          >
            <IoCloseOutline size={20} />
          </Button>
        </RadixPopover.Close>
      </div>
      <Separator />
      {children}
      <RadixPopover.Arrow className="fill-slate-main" />
    </RadixPopover.Content>
  );
}

const Root = RadixPopover.Root;
const Trigger = RadixPopover.Trigger;
const Close = RadixPopover.Close;
const Portal = RadixPopover.Portal;

export { Close, Content, Portal, Root, Trigger };

