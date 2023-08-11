import { cn } from "@/lib/utils";
import * as RadixPopover from "@radix-ui/react-popover";
import { FC } from "react";
import { IoCloseOutline } from "react-icons/io5";
import Button from "./Button";

interface PopoverProps {}

const Root: FC<PopoverProps> = ({
  children,
  ...props
}: RadixPopover.PopoverProps) => {
  return <RadixPopover.Root {...props}>{children}</RadixPopover.Root>;
};

function Content({
  children,
  popoverTitle,
  ...props
}: RadixPopover.PopoverContentProps & { popoverTitle: string }) {
  return (
    <RadixPopover.Content
      {...props}
      className={cn(
        "rounded border border-zinc-700/50 bg-zinc-800 p-2 shadow data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=top]:animate-slideDownAndFade",
        props.className,
      )}
    >
      <div className="flex items-center justify-between pb-1 text-sm font-semibold">
        <p>{popoverTitle}</p>
        <RadixPopover.Close asChild>
          <Button
            variant="secondary"
            buttonStyle="icon"
            aria-label="Close Theme Popover"
          >
            <IoCloseOutline size={20} />
          </Button>
        </RadixPopover.Close>
      </div>
      {children}
      <RadixPopover.Arrow className="fill-zinc-800" />
    </RadixPopover.Content>
  );
}

const Trigger = RadixPopover.Trigger;
const Close = RadixPopover.Close;
const Portal = RadixPopover.Portal;

export { Close, Content, Portal, Root, Trigger };
