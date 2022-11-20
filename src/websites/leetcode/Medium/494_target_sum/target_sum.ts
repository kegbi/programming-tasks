export function findTargetSumWays(nums: number[], target: number): number {
  const numbersCount = nums.length;

  const numbersTotal = nums.reduce((acc, num) => acc + num, 0);
  const memo = Array.from(
    Array(numbersCount),
    () => new Array(2 * numbersTotal + 1)
  );

  function backtrack(sum: number, currentItemIndex: number, memo: number[][]) {
    if (currentItemIndex === numbersCount) {
      if (sum === target) {
        return 1;
      } else {
        return 0;
      }
    } else {
      if (memo[currentItemIndex][sum + numbersTotal] !== undefined) {
        return memo[currentItemIndex][sum + numbersTotal];
      }
      const add = backtrack(
        sum + nums[currentItemIndex],
        currentItemIndex + 1,
        memo
      );
      const substract = backtrack(
        sum - nums[currentItemIndex],
        currentItemIndex + 1,
        memo
      );
      memo[currentItemIndex][sum + numbersTotal] = add + substract;

      return memo[currentItemIndex][sum + numbersTotal];
    }
  }

  return backtrack(0, 0, memo);
}
