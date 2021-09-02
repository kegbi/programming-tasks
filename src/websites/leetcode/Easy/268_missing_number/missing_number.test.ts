import missingNumber from "./missing_number";

describe("268 Missing number tests", function () {
  test("First example", () => {
    const input = [3, 0, 1];
    const output = 2;
    expect(missingNumber(input)).toEqual(output);
  });
  test("Second example", () => {
    const input = [0, 1];
    const output = 2;
    expect(missingNumber(input)).toEqual(output);
  });
  test("Third example", () => {
    const input = [9, 6, 4, 2, 3, 5, 7, 0, 1];
    const output = 8;
    expect(missingNumber(input)).toEqual(output);
  });
  test("Fourth example", () => {
    const input = [0];
    const output = 1;
    expect(missingNumber(input)).toEqual(output);
  });
});
