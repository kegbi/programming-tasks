export function rob(nums: number[]): number {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];

  // Initialize variables to store the max amount robbed up to the previous and current house
  let maxRobbedUpToPrevious = nums[0];
  let maxRobbedUpToCurrent = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    // Calculate the new best value for the current house
    const newBestValue = Math.max(
      maxRobbedUpToCurrent,
      maxRobbedUpToPrevious + nums[i],
    );
    maxRobbedUpToPrevious = maxRobbedUpToCurrent;
    maxRobbedUpToCurrent = newBestValue;
  }

  // Return the maximum amount robbed
  return maxRobbedUpToCurrent;
}
