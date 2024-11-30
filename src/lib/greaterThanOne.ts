import {FractionType} from "../types/index";

export function greaterThanOne(fractions: FractionType): boolean {
  return fractions.one > 1 || fractions.two > 1 || fractions.three > 1
}