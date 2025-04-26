/**
 * Utility functions for the application
 */

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges multiple class names together using clsx and tailwind-merge
 * This utility helps combine Tailwind CSS classes conditionally while resolving conflicts
 * 
 * @param inputs - Array of class values, objects, or conditional expressions
 * @returns A merged string of CSS classes with conflicts handled
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
