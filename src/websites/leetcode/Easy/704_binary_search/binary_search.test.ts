import search from "./binary_search";

describe("704 binary search tests", function () {
  test("First example", () => {
    const input = [-1, 0, 3, 5, 9, 12];
    const target = 9;
    const output = 4;
    expect(search(input, target)).toEqual(output);
  });
  test("Second example", () => {
    const input = [-1, 0, 3, 5, 9, 12];
    const target = 2;
    const output = -1;
    expect(search(input, target)).toEqual(output);
  });
});
