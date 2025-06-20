
import { clsx, type ClassValue } from "clsx"; // You'll need to install clsx and tailwind-merge
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}