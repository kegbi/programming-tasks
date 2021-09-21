// O(n) time and O(1) memory (without result array)
export function findDuplicates(nums: number[]): number[] {
  const result: Array<number> = [];

  nums.forEach((number) => {
    if (nums[Math.abs(number) - 1] < 0) {
      result.push(Math.abs(number));
    }
    nums[Math.abs(number) - 1] *= -1;
  });

  return result;
}
