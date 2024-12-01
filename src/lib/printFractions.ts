interface PrintFractionProps {
  numerators: number[]
  denominators: number[]
  beautify?: boolean
}

/**
 * The function to print the fractions
 * @param param0 The object containing the numerators, denominators, and whether to beautify the output
 */
export function printFractions({ numerators, denominators, beautify}: PrintFractionProps) {
  // Beautify the output
  if (beautify) {
    for (let i = 0; i < numerators.length; i++) {
      const maxWidth = Math.max(numerators[i].toString().length, denominators[i].toString().length); // Maximum width of the line
      const line = '─'.repeat(maxWidth);
      
      console.log(`${numerators[i]}`);
      console.log(`${line}`);
      console.log(`${denominators[i]}`);
      console.log('------------------------------');
    }
    return;
  }

  // Normal output
  for (let i = 0; i < numerators.length; i++) {
    console.log(`${numerators[i]} / ${denominators[i]}`);
  }
}