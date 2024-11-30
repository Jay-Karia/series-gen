import {greaterThanOne} from "./lib/greaterThanOne"
import {FractionType, NumType} from "./types/index"

let num: NumType = {
  a: 1,
  b: 1,
  c: 1,
  d: 1,
}

let fractions: FractionType = {
  one: parseFloat((num.a / num.b).toFixed(3)),
  two: parseFloat((num.b / (num.a * 2)).toFixed(3)),
  three: parseFloat(((num.b + num.a) / (num.b + (num.a) * 2)).toFixed(3))
}

let numerators = []
let denominators = []

do {
  console.log(fractions)
} while (greaterThanOne(fractions))