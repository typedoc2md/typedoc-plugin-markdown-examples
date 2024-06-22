/**
 * This module contains generic utility functions useful for various operations.
 *
 * Utilities include formatting currencies, manipulating strings, generating identifiers, and validating inputs.
 *
 * @module
 */

/**
 * Formats a number as currency with a given currency code.
 * Utilizes the Intl.NumberFormat API to handle locale-specific currency formatting.
 *
 * @param amount - The numeric value to be formatted.
 * @param currencyCode - The ISO currency code (e.g., USD, EUR) to specify the currency.
 * @returns The formatted currency string in the format "$1,234.56".
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
 * Converts a string to title case, making the first character of each word uppercase.
 * Effective for formatting titles or names in a readable format.
 *
 * @returns The string transformed to title case.
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
