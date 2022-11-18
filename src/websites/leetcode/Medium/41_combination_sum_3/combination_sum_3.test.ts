import { combinationSum3 } from "./combination_sum_3";

describe("41 combination sum 3 tests", () => {
  test("First example", () => {
    const k = 3;
    const n = 7;

    expect(combinationSum3(k, n)).toEqual([[1, 2, 4]]);
  });

  test("Second example", () => {
    const k = 3;
    const n = 9;

    expect(combinationSum3(k, n)).toEqual([
      [1, 2, 6],
      [1, 3, 5],
      [2, 3, 4],
    ]);
  });

  test("Third example", () => {
    const k = 4;
    const n = 1;

    expect(combinationSum3(k, n)).toEqual([]);
  });

  test("Fourth example", () => {
    const k = 3;
    const n = 2;

    expect(combinationSum3(k, n)).toEqual([]);
  });

  test("Fifth example", () => {
    const k = 9;
    const n = 45;

    expect(combinationSum3(k, n)).toEqual([[1, 2, 3, 4, 5, 6, 7, 8, 9]]);
  });
});
