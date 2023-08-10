import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import React, { HTMLAttributes, ReactNode } from "react";

interface HeadingProps
  extends HTMLAttributes<HTMLHeadingElement>,
    TextVariants {
  subHeading?: string | JSX.Element;
  description?: string | JSX.Element;
}
type TextVariants = VariantProps<typeof textVariants>;

export const textVariants = cva(
  "font-bold text-white leading-tight capitalize",
  {
    variants: {
      level: {
        h1: "text-5xl sm:text-7xl leading-12",
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
  },
);

function Heading({
  level = "h1",
  children,
  className,
  subHeading,
  description,
  variant,
  ...props
}: HeadingProps) {
  return (
    <div className={cn(level == "h1" ? "mb-4" : "mb-12")}>
      {subHeading && (
        <p className="font-medium uppercase tracking-[0.17188rem] text-yellow-brand">
          {subHeading}
        </p>
      )}
      {React.createElement(
        level || "h1",
        {
          ...props,
          className: cn(textVariants({ level, variant }),className),
        },
        children,
      )}
      {description && (
        <p className="max-w-lg font-medium capitalize text-zinc-300">
          {description}
        </p>
      )}
    </div>
  );
}

export default Heading;
