import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * @description Helper used in `merging`, `joining` and applying conditional classnames.
 * @param inputs Tailwind classnames to merge
 * @returns `mergedClassnames`
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * @description Instance of `Intl.DateTimeFormat` with `locale:en-us` and `dateStyle:medium`.
 */
const intl = new Intl.DateTimeFormat("en-us", {
  dateStyle: "medium",
});

/**
 * @description Takes date string as an input and formats it according to `en-us medium` style and
 * returns the formatted date.
 * @param date Timestamps, Date and Datetime
 * @returns `formattedDate`
 */
export const formatDate = (date: string) => intl.format(new Date(date));
