import { FractionType } from "../types/index"

/**
 * The function to check if the current fraction is greater than or equal to one
 * @param fractions The array of fractions
 * @param fractionIndex The index of the current fraction
 * @returns Whether the current fraction is greater than or equal to one
 */
export function greaterThanOne(fractions: FractionType[], fractionIndex: number): boolean {
  return (
    fractions[fractionIndex].numerator >= fractions[fractionIndex].denominator ||
    fractions[fractionIndex].numerator === Infinity ||
    fractions[fractionIndex].denominator === Infinity
  )
}
