import { permutations } from "./permutations";

describe("46 permutations tests", () => {
  test("First example", () => {
    const nums = [1, 2, 3];

    console.log(permutations(nums));

    expect(permutations(nums)).toEqual([
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 1, 2],
      [3, 2, 1],
    ]);
  });

  test("Second example", () => {
    const nums = [0, 1];

    expect(permutations(nums)).toEqual([
      [0, 1],
      [1, 0],
    ]);
  });

  test("Third example", () => {
    const nums = [1];

    expect(permutations(nums)).toEqual([[1]]);
  });

  test("Fourth example", () => {
    const nums: number[] = [];

    expect(permutations(nums)).toEqual([[]]);
  });
});
