import { combine } from "./combinations";

describe("77 combinations tests", () => {
  test("First example", () => {
    const n = 4;
    const k = 2;

    const correctResult = [
      [2, 4],
      [3, 4],
      [2, 3],
      [1, 2],
      [1, 3],
      [1, 4],
    ];

    // Sorting is applied to 2-dimensional arrays to compare them without thinking about their order
    expect(combine(n, k).sort()).toEqual(correctResult.sort());
  });

  test("Second example", () => {
    const n = 1;
    const k = 1;

    const correctResult = [[1]];

    // Sorting is applied to 2-dimensional arrays to compare them without thinking about their order
    expect(combine(n, k).sort()).toEqual(correctResult.sort());
  });

  test("Third example", () => {
    const n = 13;
    const k = 13;

    const correctResult = [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]];

    // Sorting is applied to 2-dimensional arrays to compare them without thinking about their order
    expect(combine(n, k).sort()).toEqual(correctResult.sort());
  });

  test("Fourth example", () => {
    const n = 20;
    const k = 20;

    const correctResult = [
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    ];

    // Sorting is applied to 2-dimensional arrays to compare them without thinking about their order
    expect(combine(n, k).sort()).toEqual(correctResult.sort());
  });
});
