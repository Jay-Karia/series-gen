import { INITIAL_FRACTIONS, INITIAL_NUM } from "./constants"
import { greaterThanOne, updateFractions, printFractions } from "./lib"
import { FractionType, NumType } from "./types/index"

let num: NumType = INITIAL_NUM
let fractions: FractionType[] = INITIAL_FRACTIONS

let numerators = []
let denominators = []

let fractionIndex: 0 | 1 | 2 = 0
let currentFractionIndex = 0

do {
  const currentNumerator = fractions[fractionIndex].numerator
  const currentDenominator = fractions[fractionIndex].denominator

  numerators.push(currentNumerator)
  denominators.push(currentDenominator)

  if (fractionIndex === 2) {
    updateFractions({ num, fractions, currentNumerator, currentDenominator })
    fractionIndex = 1
  } else fractionIndex++
  currentFractionIndex++
} while (!greaterThanOne(fractions, fractionIndex))

printFractions({ numerators, denominators })
