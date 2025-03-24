import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatPhone = (phone: string) => {
  const formatter = new Intl.NumberFormat("sn-SN")
  return formatter.format(Number(phone));
}

export const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  const formatter = new Intl.DateTimeFormat("fr-FR", {
      dateStyle: "medium",
      timeStyle: "short"
  });
  return formatter.format(date);
}

export function moyenneFixed(x: number, n: number = 2) {
  return x.toFixed(n);
}

export function appreciationNote(note: number) {

  if (note <= 3) {
    return "Médiocre";
  }else if  (note <= 5) {
    return "Insuffisant";
  } else if (note <= 7) {
    return "Assez bien";
  } else if (note <= 8) {
    return "Bien";
  } else {
    return "Excellent";
  }
}

export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const generatePagination = (currentPage: number, totalPages: number) => {
  if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  if (currentPage <= 3) {
      return [
          1, 2, 3, "...", totalPages - 1, totalPages
      ]
  }

  if (currentPage >= totalPages - 2) {
      return [
          1, 2, 3, "...", totalPages - 2, totalPages - 1, totalPages
      ]
  }

  return [
      1,
      "...",
      currentPage - 1,
      currentPage,
      currentPage + 1,
      "...",
      totalPages
  ]
}