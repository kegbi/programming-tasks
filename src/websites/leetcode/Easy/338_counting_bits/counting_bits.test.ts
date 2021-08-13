import countBits from "./counting_bits";

describe("338 counting bits tests", function () {
  test("First example", () => {
    const input = 2;
    const output = [0, 1, 1];
    expect(countBits(input)).toEqual(output);
  });
  test("Second example", () => {
    const input = 5;
    const output = [0, 1, 1, 2, 1, 2];
    expect(countBits(input)).toEqual(output);
  });
});
