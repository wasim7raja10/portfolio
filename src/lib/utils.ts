import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// export function formatDateToMonthYear(date) {
//   return date.toLocaleDateString("en-US", { month: "short", year: "2-digit" });
// }
