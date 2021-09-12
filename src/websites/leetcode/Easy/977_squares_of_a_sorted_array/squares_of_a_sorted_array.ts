// Map + sort solution
// export function sortedSquares(nums: number[]): number[] {
//   return nums.map((number) => number ** 2).sort((a, b) => a * a - b * b);
// }

// 2 pointers solution
export function sortedSquares(nums: number[]): number[] {
  const length = nums.length;

  let left = 0;
  let right = length - 1;

  const result = [];

  for (let i = length - 1; i > -1; i--) {
    const pow2Left = nums[left] ** 2;
    const pow2Right = nums[right] ** 2;

    if (pow2Left > pow2Right) {
      result[i] = pow2Left;
      left += 1;
    } else {
      result[i] = pow2Right;
      right -= 1;
    }
  }

  return result;
}
