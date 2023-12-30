export function maxSubArray(nums: number[]): number {
  let globalMaxSubArray = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const maxSubarrayFromHere = Math.max(nums[i], nums[i - 1] + nums[i]);
    nums[i] = maxSubarrayFromHere;
    globalMaxSubArray = Math.max(globalMaxSubArray, maxSubarrayFromHere);
  }

  return globalMaxSubArray;
}
