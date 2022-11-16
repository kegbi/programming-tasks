export function combinationSum2(
  candidates: number[],
  target: number
): number[][] {
  const result: number[][] = [];
  candidates.sort((a, b) => a - b);

  function backtrack(
    currentCandidatesArray: number[],
    sum: number,
    passedIndex: number
  ) {
    if (sum === target) {
      result.push([...currentCandidatesArray]);
    } else if (sum < target) {
      for (let i = passedIndex; i < candidates.length; i++) {
        // Check if we already have recursive call witch will stumble on the same number
        const areWeOnDuplicateNumber =
          i > passedIndex && candidates[i] === candidates[i - 1];
        // Stop execution to prevent duplicate answers in the result and go to the next number in our loop
        // Because array is sorted, we will get to this number anyway in our already called recursive call (with next index)
        if (!areWeOnDuplicateNumber) {
          backtrack(
            [...currentCandidatesArray, candidates[i]],
            sum + candidates[i],
            i + 1
          );
        }
      }
    }
  }

  backtrack([], 0, 0);

  return result;
}
