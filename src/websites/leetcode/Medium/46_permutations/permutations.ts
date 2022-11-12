export function permutations(nums: number[]): number[][] {
  const result: number[][] = [];

  function checkNums(currentNumbers: number[], restNumbers: number[]): void {
    if (restNumbers.length === 0) {
      result.push(currentNumbers);
      return;
    }

    for (let i = 0; i < restNumbers.length; i++) {
      const newCurrentNumbersArray = [...currentNumbers, restNumbers[i]];
      const newRestNumbersArray = [
        ...restNumbers.slice(0, i),
        ...restNumbers.slice(i + 1),
      ];

      checkNums(newCurrentNumbersArray, newRestNumbersArray);
    }
  }

  checkNums([], nums);

  return result;
}
