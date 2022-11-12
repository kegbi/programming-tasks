export function permutations(nums: number[]): number[][] {
  const result = new Set<number[]>();
  const alreadyExistingNums = new Set<string>();

  function checkIfNumberIsNotAlreadyUsedInArray(array: number[]) {
    return new Set(array).size === array.length;
  }

  function checkNums(currentNumbersForCheck: number[], index: number) {
    if (index < nums.length) {
      for (let i = 0; i < nums.length; i++) {
        const newNumberArray = [...currentNumbersForCheck, nums[i]];
        if (checkIfNumberIsNotAlreadyUsedInArray(newNumberArray)) {
          checkNums(newNumberArray, index + 1);
        }
      }
    } else {
      const formattedNumbers = currentNumbersForCheck.join("-");
      if (!alreadyExistingNums.has(formattedNumbers)) {
        result.add(currentNumbersForCheck);
        alreadyExistingNums.add(formattedNumbers);
      }
    }
  }

  checkNums([], 0);

  return Array.from(result);
}
