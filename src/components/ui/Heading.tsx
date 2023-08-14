import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import React, { HTMLAttributes, ReactNode } from "react";

interface HeadingProps
  extends HTMLAttributes<HTMLHeadingElement>,
    HeadingVariants {}
type HeadingVariants = VariantProps<typeof headingVariants>;

export const headingVariants = cva("font-bold leading-tight capitalize", {
  variants: {
    level: {
      h1: "text-5xl sm:text-7xl leading-12 pb-[4px] sm:pb-[6px]",
      h2: "text-[2rem] leading-[1.3] sm:leading-normal sm:text-[2.2rem] max-w-md",
      h3: "text-[1.7rem]",
      h4: "leading-[1.3] text-[1.5rem]",
      h5: "text-[1.3rem]",
      h6: "text-[1.2rem]",
    },
    variant: {
      gradient:
        "text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400",
    },
  },
  defaultVariants: {
    level: "h1",
    variant: "gradient",
  },
});

function Element({
  level = "h1",
  children,
  className,
  variant,
  ...props
}: HeadingProps) {
  return React.createElement(
    level || "h1",
    {
      ...props,
      className: cn(headingVariants({ level, variant }), className),
    },
    children,
  );
}

function SubHeading({ children, className, ...props }: HeadingProps) {
  return (
    <p
      {...props}
      className={cn(
        "text-sm font-medium uppercase tracking-[0.17188rem] text-theme sm:text-base",
        className,
      )}
    >
      {children}
    </p>
  );
}

function Description({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      {...props}
      className={cn("mt-2 max-w-lg capitalize text-zinc-300", className)}
    >
      {children}
    </p>
  );
}

function Heading({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props} className={cn("mb-12", className)}>
      {children}
    </div>
  );
}

Heading.Element = Element;
Heading.SubHeading = SubHeading;
Heading.Description = Description;

export default Heading;
