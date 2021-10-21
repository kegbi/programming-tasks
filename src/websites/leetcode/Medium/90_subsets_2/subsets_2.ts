export function subsetsWithDup(nums: number[]): number[][] {
  nums.sort();
  const result: Set<Array<number>> = new Set();
  const alreadyExistingCombinations: Set<string> = new Set();

  const checkNumbers = (
    currentNumbersForCheck: Array<number>,
    initialNumbersArray: Array<number>,
    index: number
  ) => {
    const formattedNumberForCheck = currentNumbersForCheck.join("-");
    if (!alreadyExistingCombinations.has(formattedNumberForCheck)) {
      result.add(currentNumbersForCheck);
      alreadyExistingCombinations.add(formattedNumberForCheck);
    }

    for (let i = index; i < nums.length; i++) {
      checkNumbers([...currentNumbersForCheck, nums[i]], nums, i + 1);
    }
  };

  checkNumbers([], nums, 0);

  return Array.from(result);
}
