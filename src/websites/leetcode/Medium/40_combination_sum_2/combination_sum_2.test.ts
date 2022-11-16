import { combinationSum2 } from "./combination_sum_2";

describe("40 combination sum 2 tests", () => {
  test("First example", () => {
    const candidates = [10, 1, 2, 7, 6, 1, 5];
    const target = 8;
    const answer = [
      [1, 7],
      [1, 2, 5],
      [2, 6],
      [1, 1, 6],
    ];

    expect(combinationSum2(candidates, target).sort()).toEqual(answer.sort());
  });

  test("Second example", () => {
    const candidates = [2, 5, 2, 1, 2];
    const target = 5;
    const answer = [[1, 2, 2], [5]];

    expect(
      combinationSum2(candidates, target)
        .map((element) => element.sort())
        .sort()
    ).toEqual(answer.map((element) => element.sort()).sort());
  });

  test("Third example", () => {
    const candidates = [
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    ];
    const target = 30;
    const answer = [
      [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1,
      ],
    ];

    expect(combinationSum2(candidates, target).sort()).toEqual(answer.sort());
  });
});
