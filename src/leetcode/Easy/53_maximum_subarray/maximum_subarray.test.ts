import maxSubArray from "./maximum_subarray";

describe("136 Single number tests", function () {
  test("First example", () => {
    const input = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
    const output = 6;
    expect(maxSubArray(input)).toEqual(output);
  });
  test("Second example", () => {
    const input = [1];
    const output = 1;
    expect(maxSubArray(input)).toEqual(output);
  });
  test("Third example", () => {
    const input = [5, 4, -1, 7, 8];
    const output = 23;
    expect(maxSubArray(input)).toEqual(output);
  });
});
