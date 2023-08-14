import { cn } from "@/lib/utils";
import Image, { ImageProps } from "next/image";
import { HTMLAttributes } from "react";
import { headingVariants } from "./Heading";

interface CardProps extends HTMLAttributes<HTMLDivElement> {}
interface CardContentProps extends HTMLAttributes<HTMLDivElement> {}
interface CardTagsProps extends HTMLAttributes<HTMLDivElement> {}
interface CardInfoProps extends HTMLAttributes<HTMLDivElement> {}
interface CardTitleProps extends HTMLAttributes<HTMLDivElement> {}
interface CardDescriptionProps extends HTMLAttributes<HTMLDivElement> {}
interface CardActionsProps extends HTMLAttributes<HTMLDivElement> {}

function Card({ children, className, ...props }: CardProps) {
  return (
    <div
      {...props}
      className={cn(
        "group relative rounded-xl border border-zinc-800 px-3 pb-12 shadow",
      )}
    >
      {children}
    </div>
  );
}

function CardImage({ src, alt, ...props }: ImageProps) {
  return (
    <figure className="-mx-3">
      <Image
        {...props}
        src={src}
        alt={alt}
        className="aspect-video w-full rounded-t-xl object-cover grayscale transition-[filter] duration-300 group-hover:grayscale-0"
        width={500}
        height={281}
      />
      <figcaption hidden>{alt}</figcaption>
    </figure>
  );
}

function Content({ children, className, ...props }: CardContentProps) {
  return (
    <div {...props} className={cn("mt-3", className)}>
      {children}
    </div>
  );
}

function Tags({ children, className, ...props }: CardTagsProps) {
  return (
    <div {...props} className={cn("mb-4 flex flex-wrap gap-2", className)}>
      {children}
    </div>
  );
}

function Info({ children, className, ...props }: CardInfoProps) {
  return (
    <div {...props} className={cn("mb-4", className)}>
      {children}
    </div>
  );
}

function Title({ children, className, ...props }: CardTitleProps) {
  return (
    <h6 {...props} className={headingVariants({ level: "h6" })}>
      {children}
    </h6>
  );
}

function Description({ children, className, ...props }: CardDescriptionProps) {
  return (
    <p
      {...props}
      className={cn(
        "mt-1 line-clamp-none text-sm text-zinc-300 sm:line-clamp-2",
        className,
      )}
    >
      {children}
    </p>
  );
}

function Actions({ children, className, ...props }: CardActionsProps) {
  return (
    <div {...props} className={cn("absolute bottom-3 flex gap-2", className)}>
      {children}
    </div>
  );
}

Card.Image = CardImage;
Card.Content = Content;
Card.Tags = Tags;
Card.Info = Info;
Card.Title = Title;
Card.Description = Description;
Card.Actions = Actions;

export default Card;
