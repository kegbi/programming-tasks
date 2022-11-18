export function combinationSum3(k: number, n: number): number[][] {
  const possibleNumbers = [...Array(9)].map((_, i) => i + 1);
  const result: number[][] = [];

  function backtrack(
    currentCandidatesArray: number[],
    sum: number,
    passedIndex: number
  ) {
    if (sum === n && currentCandidatesArray.length === k) {
      result.push([...currentCandidatesArray]);
    } else if (sum < n && currentCandidatesArray.length <= k) {
      for (let i = passedIndex; i < possibleNumbers.length; i++) {
        backtrack(
          [...currentCandidatesArray, possibleNumbers[i]],
          sum + possibleNumbers[i],
          i + 1
        );
      }
    }
  }

  backtrack([], 0, 0);

  return result;
}
