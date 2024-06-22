/**
 * This package provides utility functions for string manipulation,
 *
 * including reversing strings, capitalizing the first letter, and checking for palindromes.
 *
 * @packageDocumentation
 */

/**
 * Reverses the provided string.
 * @param str The string to reverse.
 * @returns The reversed string.
 */
function reverse(str: string): string {
  return str.split("").reverse().join("");
}

/**
 * Capitalizes the first letter of the provided string.
 * @param str The string to capitalize.
 * @returns The string with the first letter capitalized.
 */
function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Checks if the provided string is a palindrome.
 * @param str The string to check.
 * @returns True if the string is a palindrome, false otherwise.
 */
function isPalindrome(str: string): boolean {
  const normalizedStr = str.replace(/[\W_]/g, "").toLowerCase();
  return normalizedStr === reverse(normalizedStr);
}

// Export the functions using named exports
export { reverse, capitalize, isPalindrome };
