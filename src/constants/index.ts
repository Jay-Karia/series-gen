import {FractionType, NumType} from "../types";

const INITIAL_NUM: NumType = {
  a: 1,
  b: 1,
  c: 2,
  d: 3
}

const INITIAL_FRACTIONS: FractionType[] = [
  {
    numerator: INITIAL_NUM.a,
    denominator: INITIAL_NUM.b
  },
  {
    numerator: INITIAL_NUM.b,
    denominator: INITIAL_NUM.a * 2
  },
  {
    numerator: INITIAL_NUM.c,
    denominator: INITIAL_NUM.d
  }
]

export {INITIAL_NUM, INITIAL_FRACTIONS}