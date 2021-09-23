import { spiralOrder } from "./spiral_matrix";

describe("54 spiral matrix tests", function () {
  test("First example", () => {
    const input = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];

    const output = [1, 2, 3, 6, 9, 8, 7, 4, 5];
    expect(spiralOrder(input)).toEqual(output);
  });
  test("Second example", () => {
    const input = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
    ];

    const output = [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7];
    expect(spiralOrder(input)).toEqual(output);
  });
});
