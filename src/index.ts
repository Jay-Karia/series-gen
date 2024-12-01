import { INITIAL_FRACTIONS, INITIAL_NUM } from "./constants"
import { greaterThanOne, updateFractions, printFractions } from "./lib"
import {truncateNumber} from "./lib/truncateNumber"
import { FractionType, NumType } from "./types/index"
import PromptSync = require("prompt-sync")

const prompt = PromptSync()

let num: NumType = INITIAL_NUM // Object to store temporary values (a, b, c, d)
let fractions: FractionType[] = INITIAL_FRACTIONS // Array to store fractions in three formats

let numerators = []
let denominators = []

let fractionIndex: 0 | 1 | 2 = 0 // Index to keep track of the current fraction
let totalFractions = 0

const limit = prompt("Enter the limit (Skip to see all outcomes): ")
const beautify = prompt("Beautify the output? (Y/N): ")

do {
  const currentNumerator = fractions[fractionIndex].numerator
  const currentDenominator = fractions[fractionIndex].denominator

  // Update the numerator and denominator
  numerators.push(truncateNumber(currentNumerator))
  denominators.push(truncateNumber(currentDenominator))

  // If the current fraction is the third one, update the fractions array
  if (fractionIndex === 2) {
    updateFractions({ num, fractions, currentNumerator, currentDenominator })
    fractionIndex = 1
  } else fractionIndex++
  totalFractions++
} while (limit ? totalFractions < parseInt(limit) : !greaterThanOne(fractions, fractionIndex))

printFractions({ numerators, denominators, beautify: beautify === "Y" })
