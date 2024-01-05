// utilities.ts - Utilities Module

/**
 * This module contains generic utility functions.
 * @module utilities
 */

/**
 * Function to format a number as currency.
 * @param amount - The amount to be formatted.
 * @param currencyCode - The currency code (e.g., USD, EUR).
 * @returns The formatted currency string.
 */
export function formatCurrency(amount: number, currencyCode: string): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currencyCode,
  }).format(amount);
}

/**
 * Function to convert a string to title case.
 * @param input - The input string.
 * @returns The input string in title case.
 */
export function toTitleCase(input: string): string {
  return input
    .toLowerCase()
    .replace(/(?:^|\s)\w/g, (match) => match.toUpperCase());
}

/**
 * Function to generate a unique identifier.
 * @returns A unique identifier.
 */
export function generateUniqueId(): string {
  return `id_${Date.now().toString(36)}_${Math.random()
    .toString(36)
    .substr(2)}`;
}

/**
 * Function to truncate a string to a specified length.
 * @param input - The input string.
 * @param maxLength - The maximum length of the truncated string.
 * @returns The truncated string.
 */
export function truncateString(input: string, maxLength: number): string {
  if (input.length <= maxLength) {
    return input;
  }
  return input.slice(0, maxLength) + "...";
}

/**
 * Function to check if a value is a valid email address.
 * @param email - The email address to be validated.
 * @returns True if the email address is valid, false otherwise.
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Function to shuffle an array.
 * @param array - The array to be shuffled.
 * @returns The shuffled array.
 */
export function shuffleArray<T>(array: T[]): T[] {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}
