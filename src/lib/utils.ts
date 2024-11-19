import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
// to be removed from utilis.
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
