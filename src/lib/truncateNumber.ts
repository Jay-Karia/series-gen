export function truncateNumber(n: number) {
  let truncated = n

  if (n.toString().includes("e")) {
    truncated = parseFloat(n.toExponential(1))
  }

  return truncated
}
