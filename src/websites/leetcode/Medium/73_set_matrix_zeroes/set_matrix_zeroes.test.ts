import { setZeroes } from "./set_matrix_zeroes";

describe("73 set matrix zeroes tests", function () {
  test("First example", () => {
    const matrix = [
      [1, 1, 1],
      [1, 0, 1],
      [1, 1, 1],
    ];
    setZeroes(matrix);

    const output = [
      [1, 0, 1],
      [0, 0, 0],
      [1, 0, 1],
    ];
    expect(matrix).toEqual(output);
  });
  test("Second example", () => {
    const matrix = [
      [0, 1, 2, 0],
      [3, 4, 5, 2],
      [1, 3, 1, 5],
    ];
    setZeroes(matrix);

    const output = [
      [0, 0, 0, 0],
      [0, 4, 5, 0],
      [0, 3, 1, 0],
    ];
    expect(matrix).toEqual(output);
  });
});
