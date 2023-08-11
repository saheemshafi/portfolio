import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const intl = new Intl.DateTimeFormat("en-us", {
  dateStyle: "medium",
});
export const formatDate = (date: string) => intl.format(new Date(date));
