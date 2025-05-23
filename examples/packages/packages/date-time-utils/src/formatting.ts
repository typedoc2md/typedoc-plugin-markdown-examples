// formatting.ts

/**
 * Formats a Date object to 'YYYY-MM-DD' format.
 */
export function formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = padZero(date.getMonth() + 1); // months are 0-based
  const day = padZero(date.getDate());
  return `${year}-${month}-${day}`;
}

/**
 * Formats a Date object to 'HH:mm:ss' format.
 */
export function formatTime(date: Date): string {
  const hours = padZero(date.getHours());
  const minutes = padZero(date.getMinutes());
  const seconds = padZero(date.getSeconds());
  return `${hours}:${minutes}:${seconds}`;
}

/**
 * Formats a date relative to the current time (very basic implementation).
 */
export function formatRelative(date: Date): string {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();

  const diffMinutes = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMinutes / 60);
  const diffDays = Math.floor(diffHours / 24);

  if (diffMinutes < 1) return "just now";
  if (diffMinutes < 60) return `${diffMinutes} minute(s) ago`;
  if (diffHours < 24) return `${diffHours} hour(s) ago`;
  return `${diffDays} day(s) ago`;
}

/**
 * Pads a number with a leading zero if it's less than 10.
 */
function padZero(num: number): string {
  return num < 10 ? `0${num}` : `${num}`;
}
