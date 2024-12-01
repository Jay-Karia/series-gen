interface PrintFractionProps {
  numerators: number[]
  denominators: number[]
  beautify?: boolean
}

export function printFractions({ numerators, denominators, beautify}: PrintFractionProps) {
  if (beautify) {

    for (let i = 0; i < numerators.length; i++) {
      const maxWidth = Math.max(numerators[i].toString().length, denominators[i].toString().length);

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