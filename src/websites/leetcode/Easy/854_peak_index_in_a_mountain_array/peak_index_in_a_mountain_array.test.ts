import peakIndexInMountainArray from "./peak_index_in_a_mountain_array";

describe("852 peak index in a mountain array tests", function () {
  test("First example", () => {
    const input = [0, 1, 0];
    const output = 1;
    expect(peakIndexInMountainArray(input)).toEqual(output);
  });
  test("Second example", () => {
    const input = [0, 2, 1, 0];
    const output = 1;
    expect(peakIndexInMountainArray(input)).toEqual(output);
  });
  test("Third example", () => {
    const input = [0, 10, 5, 2];
    const output = 1;
    expect(peakIndexInMountainArray(input)).toEqual(output);
  });
  test("Fourth example", () => {
    const input = [3, 4, 5, 1];
    const output = 2;
    expect(peakIndexInMountainArray(input)).toEqual(output);
  });
  test("Fifth example", () => {
    const input = [24, 69, 100, 99, 79, 78, 67, 36, 26, 19];
    const output = 2;
    expect(peakIndexInMountainArray(input)).toEqual(output);
  });
});
