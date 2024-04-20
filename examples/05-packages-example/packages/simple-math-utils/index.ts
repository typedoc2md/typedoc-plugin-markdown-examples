/**
 * This package provides simple arithmetic operations such as addition, subtraction,
 * multiplication, and division. It is intended for use as a utility module in larger applications that require
 * basic mathematical operations. The functions are type-safe and throw errors for invalid operations like division by zero.
 *
 * @packageDocumentation
 */

/**
 * Adds two numbers.
 * @param a The first number to add.
 * @param b The second number to add.
 * @returns The sum of `a` and `b`.
 */
function add(a: number, b: number): number {
  return a + b;
}

/**
 * Subtracts the second number from the first.
 * @param a The number from which to subtract.
 * @param b The number to subtract.
 * @returns The difference of `a` and `b`.
 */
function subtract(a: number, b: number): number {
  return a - b;
}

/**
 * Multiplies two numbers.
 * @param a The first number to multiply.
 * @param b The second number to multiply.
 * @returns The product of `a` and `b`.
 */
function multiply(a: number, b: number): number {
  return a * b;
}

/**
 * Divides the first number by the second.
 * @param a The numerator.
 * @param b The denominator. Must not be zero.
 * @throws {Error} Division by zero is not allowed.
 * @returns The quotient of `a` and `b`.
 */
function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
}

// Export the functions using named exports
export { add, subtract, multiply, divide };
