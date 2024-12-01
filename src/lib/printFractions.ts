interface PrintFractionProps {
  numerators: number[]
  denominators: number[]
  beautify?: boolean
}

export function printFractions({ numerators, denominators, beautify}: PrintFractionProps) {
  const totalFractions = numerators.length;
  const indexWidth = totalFractions.toString().length;
  const indexPadding = indexWidth + 2; // +2 for ". " after index

  if (beautify) {
    for (let i = 0; i < numerators.length; i++) {
      const maxWidth = Math.max(numerators[i].toString().length, denominators[i].toString().length);
      const line = '─'.repeat(maxWidth);
      const index = (i + 1).toString().padStart(indexWidth);
      const padding = ' '.repeat(indexPadding);
      
      console.log(`${index}. ${numerators[i]}`);
      console.log(`${padding}${line}`);
      console.log(`${padding}${denominators[i]}`);
      console.log('─'.repeat(maxWidth + indexPadding + 2));
    }
    return;
  }

  // Normal output
  for (let i = 0; i < numerators.length; i++) {
    const index = (i + 1).toString().padStart(indexWidth);
    console.log(`${index}. ${numerators[i]} / ${denominators[i]}`);
  }
}