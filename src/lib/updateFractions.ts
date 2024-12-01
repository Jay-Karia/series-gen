import { FractionType, NumType } from "../types"
import { truncateNumber } from "./truncateNumber"

interface UpdateFractionsProps {
  num: NumType
  fractions: FractionType[]
  currentNumerator: number
  currentDenominator: number
}

/**
 * The function to update the fractions
 * @param param0 The object containing the temporary values, fractions, and the current numerator and denominator
 */
export function updateFractions({ num, fractions, currentNumerator, currentDenominator }: UpdateFractionsProps) {
  // Update the temporary values
  num.a = truncateNumber(currentNumerator)
  num.b = truncateNumber(currentDenominator)
  num.c = truncateNumber(num.a + num.b)
  num.d = truncateNumber(2 * num.a + num.b)

  // a / b
  fractions[0].numerator = num.a
  fractions[0].denominator = num.b

  // b / ( 2 * a )= c / d
  fractions[1].numerator = num.b
  fractions[1].denominator = num.a * 2

  // c + a / d + b = a / b
  fractions[2].numerator = num.c
  fractions[2].denominator = num.d
}
