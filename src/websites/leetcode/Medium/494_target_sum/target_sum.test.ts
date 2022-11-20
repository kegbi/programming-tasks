import { findTargetSumWays } from "./target_sum";

describe("494 target sum tests", () => {
  test("First example", () => {
    const nums = [1, 1, 1, 1, 1];
    const target = 3;

    expect(findTargetSumWays(nums, target)).toEqual(5);
  });

  test("Second example", () => {
    const nums = [1];
    const target = 1;

    expect(findTargetSumWays(nums, target)).toEqual(1);
  });

  test("Third example", () => {
    const nums = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const target = 0;

    expect(findTargetSumWays(nums, target)).toEqual(1048576);
  });
});
