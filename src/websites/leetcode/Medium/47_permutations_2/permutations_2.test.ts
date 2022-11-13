import { permuteUnique } from "./permutations_2";

describe("47 permutations 2 tests", () => {
  test("First example", () => {
    const nums = [1, 1, 2];

    expect(permuteUnique(nums)).toEqual([
      [1, 1, 2],
      [1, 2, 1],
      [2, 1, 1],
    ]);
  });

  test("Second example", () => {
    const nums = [1, 2, 3];

    expect(permuteUnique(nums)).toEqual([
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 1, 2],
      [3, 2, 1],
    ]);
  });
});
