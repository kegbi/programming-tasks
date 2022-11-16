import { combinationSum } from "./combination_sum";

describe("39 combination sum tests", () => {
  test("First example", () => {
    const candidates = [2, 3, 6, 7];
    const target = 7;

    expect(combinationSum(candidates, target)).toEqual([[2, 2, 3], [7]]);
  });

  test("Second example", () => {
    const candidates = [2, 3, 5];
    const target = 8;

    expect(combinationSum(candidates, target)).toEqual([
      [2, 2, 2, 2],
      [2, 3, 3],
      [3, 5],
    ]);
  });

  test("Third example", () => {
    const candidates = [2];
    const target = 1;

    expect(combinationSum(candidates, target)).toEqual([]);
  });

  test("Fourth example", () => {
    const candidates = [1];
    const target = 1;

    expect(combinationSum(candidates, target)).toEqual([[1]]);
  });

  test("Fifth example", () => {
    const candidates = [1];
    const target = 2;

    expect(combinationSum(candidates, target)).toEqual([[1, 1]]);
  });
});
