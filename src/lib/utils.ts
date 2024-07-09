import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDateAsMonthYear(dateString: string) {
  // Convert the input string to a Date object
  const inputDate = new Date(dateString);

  // Get the current date
  const currentDate = new Date();

  // Check if the input date is in the future
  if (inputDate > currentDate) {
    return "Current";
  } else {
    // Format the date as "Month Year"
    const formattedDate = inputDate.toLocaleDateString("us", {
      year: "numeric",
      month: "short",
    });
    return formattedDate;
  }
}

export function formatDateAsDayMonthYear(dateString: string) {
  // Convert the input string to a Date object
  const inputDate = new Date(dateString);

  // Format the date as "Day Month Year"
  const formattedDate = inputDate.toLocaleDateString("us", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return formattedDate;
}
