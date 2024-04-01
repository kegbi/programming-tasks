export function rob(nums: number[]): number {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];

  function robHelper(nums: number[]) {
    let maxRobbedUpToPrevious = nums[0];
    let maxRobbedUpToCurrent = Math.max(nums[0], nums[1]);

    for (let i = 2; i < nums.length; i++) {
      const newBestValue = Math.max(
        maxRobbedUpToCurrent,
        maxRobbedUpToPrevious + nums[i],
      );

      maxRobbedUpToPrevious = maxRobbedUpToCurrent;
      maxRobbedUpToCurrent = newBestValue;
    }

    return maxRobbedUpToCurrent;
  }

  if (nums.length > 2) {
    return Math.max(
      robHelper(nums.slice(0, nums.length - 1)),
      robHelper(nums.slice(1, nums.length)),
    );
  } else {
    return robHelper(nums);
  }
}
