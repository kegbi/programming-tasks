export function combinationSum(
  candidates: number[],
  target: number
): number[][] {
  const result: number[][] = [];

  function backTrackingNumbers(
    currentNums: number[],
    sum: number,
    position: number
  ): void {
    if (sum === target) {
      result.push(currentNums);
    } else if (sum < target) {
      for (let i = position; i < candidates.length; i++) {
        const currentCandidate = candidates[i];
        backTrackingNumbers(
          [...currentNums, currentCandidate],
          sum + currentCandidate,
          i
        );
      }
    }
  }

  backTrackingNumbers([], 0, 0);

  return result;
}
