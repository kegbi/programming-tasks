import { sortedSquares } from "./squares_of_a_sorted_array";

describe("977 squares of a sorted array tests", function () {
  test("First example", () => {
    const input = [-4, -1, 0, 3, 10];

    const output = [0, 1, 9, 16, 100];
    expect(sortedSquares(input)).toEqual(output);
  });
  test("Second example", () => {
    const input = [-7, -3, 2, 3, 11];

    const output = [4, 9, 9, 49, 121];
    expect(sortedSquares(input)).toEqual(output);
  });
});
