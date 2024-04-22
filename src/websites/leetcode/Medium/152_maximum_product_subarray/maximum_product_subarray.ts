export function maxProduct(nums: number[]): number {
  if (nums.length == 1) {
    return nums[0];
  }

  let maxProduct = Math.max(...nums);

  let minValue = 1;
  let maxValue = 1;

  for (const number of nums) {
    if (number === 0) {
      minValue = 1;
      maxValue = 1;
    } else {
      const tempMin = minValue;
      minValue = Math.min(number * maxValue, number * minValue, number);
      maxValue = Math.max(number * maxValue, number * tempMin, number);

      maxProduct = Math.max(maxValue, maxProduct);
    }
  }

  return maxProduct;
}
