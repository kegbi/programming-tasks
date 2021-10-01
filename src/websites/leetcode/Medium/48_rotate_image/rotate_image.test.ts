import { rotate } from "./rotate_image";

describe("48 rotate image tests", function () {
  test("First example", () => {
    const input = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    rotate(input);

    const output = [
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3],
    ];
    expect(input).toEqual(output);
  });
  test("Second example", () => {
    const input = [
      [5, 1, 9, 11],
      [2, 4, 8, 10],
      [13, 3, 6, 7],
      [15, 14, 12, 16],
    ];
    rotate(input);

    const output = [
      [15, 13, 2, 5],
      [14, 3, 4, 1],
      [12, 6, 8, 9],
      [16, 7, 10, 11],
    ];
    expect(input).toEqual(output);
  });
  test("Third example", () => {
    const input = [[1]];
    rotate(input);

    const output = [[1]];
    expect(input).toEqual(output);
  });
  test("Fourth example", () => {
    const input = [
      [1, 2],
      [3, 4],
    ];
    rotate(input);

    const output = [
      [3, 1],
      [4, 2],
    ];
    expect(input).toEqual(output);
  });
});
