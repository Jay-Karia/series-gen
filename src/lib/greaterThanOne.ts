import { FractionType } from "../types/index"

export function greaterThanOne(fractions: FractionType[], fractionIndex: number): boolean {
  return (
    fractions[fractionIndex].numerator >= fractions[fractionIndex].denominator ||
    fractions[fractionIndex].numerator === Infinity ||
    fractions[fractionIndex].denominator === Infinity
  )
}
