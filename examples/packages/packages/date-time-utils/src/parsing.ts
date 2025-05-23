// parsing.ts

/**
 * Parses a 'YYYY-MM-DD' formatted string into a Date object.
 * Returns `null` if the input is invalid.
 */
export function parseDate(dateStr: string): Date | null {
  const [year, month, day] = dateStr.split("-").map(Number);
  if (!year || !month || !day) return null;

  const date = new Date(year, month - 1, day); // months are 0-based
  return isNaN(date.getTime()) ? null : date;
}

/**
 * Parses a 'HH:mm:ss' formatted string into a Date object with today's date.
 * Returns `null` if the input is invalid.
 */
export function parseTime(timeStr: string): Date | null {
  const [hours, minutes, seconds] = timeStr.split(":").map(Number);
  if (
    hours == null ||
    minutes == null ||
    seconds == null ||
    hours > 23 ||
    minutes > 59 ||
    seconds > 59
  ) {
    return null;
  }

  const now = new Date();
  now.setHours(hours, minutes, seconds, 0);
  return now;
}
