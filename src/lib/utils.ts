import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString) {
  // Convert the input string to a Date object
  const inputDate = new Date(dateString);

  // Get the current date
  const currentDate = new Date();

  // Check if the input date is in the future
  if (inputDate > currentDate) {
    return "Current";
  } else {
    // Format the date as "Month Year"
    const formattedDate = inputDate.toLocaleDateString("in", {
      year: "numeric",
      month: "short",
    });
    return formattedDate;
  }
}
