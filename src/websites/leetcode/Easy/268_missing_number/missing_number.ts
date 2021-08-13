export default function missingNumber(nums: number[]): number {
  const length = nums.length;
  let result = length;
  for (let i = 0; i < length; i++) {
    result += i - nums[i];
  }

  return result;
}
