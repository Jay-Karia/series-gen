/**
 * Truncate a number to 1 decimal place if it is in scientific notation
 * @param n The number to truncate
 * @returns The truncated number
 */
export function truncateNumber(n: number) {
  let truncated = n

  if (n.toString().includes("e")) {
    truncated = parseFloat(n.toExponential(1))
  }

  return truncated
}
