interface PrintFractionProps {
  numerators: number[];
  denominators: number[];
}

export function printFractions({numerators, denominators} : PrintFractionProps) {
  // print in mathematically correct format using loop
  for (let i = 0; i < numerators.length; i++) {
    console.log(`${numerators[i]}/${denominators[i]}`)
  }
  
}