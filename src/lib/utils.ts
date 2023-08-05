import clsx, { ClassValue } from "clsx";
import { Octokit } from "octokit";
import { twMerge } from "tailwind-merge";


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const octokit = new Octokit({
  auth: process.env.GITHUB_PAT,
});
