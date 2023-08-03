import { cn } from "@/lib/utils";
import { FC, HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {}

function Container({ className, children, ...attrs }: ContainerProps) {
  return (
    <section
      {...attrs}
      className={cn("relative isolate my-12 px-4 py-4 md:px-8", className)}
    >
      {children}
    </section>
  );
}

const GradientContainer: FC<ContainerProps> = ({
  className,
  children,
  ...attrs
}) => {
  return (
    <div
      {...attrs}
      className={cn(
        "bg-slate-main relative after:absolute after:inset-[-1px] after:-z-[1] after:rounded-[inherit] after:bg-gradient-to-t after:from-white",
        className,
      )}
    >
      {children}
    </div>
  );
};

Container.Gradient = GradientContainer;
export default Container;
