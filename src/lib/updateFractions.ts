import { FractionType, NumType } from "../types"
import {truncateNumber} from "./truncateNumber"

interface UpdateFractionsProps {
  num: NumType
  fractions: FractionType[]
  currentNumerator: number
  currentDenominator: number
}

export function updateFractions({ num, fractions, currentNumerator, currentDenominator }: UpdateFractionsProps) {
  num.a = truncateNumber(currentNumerator)
  num.b = truncateNumber(currentDenominator)
  num.c = truncateNumber((num.a + num.b))
  num.d = truncateNumber((2 * num.a + num.b))

  fractions[0].numerator = num.a
  fractions[0].denominator = num.b

  fractions[1].numerator = num.b
  fractions[1].denominator = num.a * 2

  fractions[2].numerator = num.c
  fractions[2].denominator = num.d
}
