/**
 * @module
 * @mergeModuleWith <project>
 */

/**
 * Calculates the number of days between two dates.
 * @param startDate The start date.
 * @param endDate The end date.
 * @returns The number of days between the two dates.
 */
function daysBetweenDates(startDate: Date, endDate: Date): number {
  const msPerDay = 24 * 60 * 60 * 1000;
  return Math.round((endDate.getTime() - startDate.getTime()) / msPerDay);
}

/**
 * Checks if a given date is a weekend.
 * @param date The date to check.
 * @returns True if the date is a weekend (Saturday or Sunday), false otherwise.
 */
function isDateWeekend(date: Date): boolean {
  return date.getDay() === 0 || date.getDay() === 6;
}

// Export the functions using named exports
export { daysBetweenDates, isDateWeekend };
