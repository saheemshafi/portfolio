import { cn } from "@/lib/utils";
import { FC, HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {}

function Container({ className, children, ...attrs }: ContainerProps) {
  return (
    <section
      {...attrs}
      className={cn("relative isolate mb-12 px-4 py-4 md:px-8", className)}
    >
      {children}
    </section>
  );
}

export default Container;
