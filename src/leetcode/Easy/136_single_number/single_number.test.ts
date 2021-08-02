import singleNumber from "./single_number";

describe("136 Single number tests", function () {
  test("First example", () => {
    const input = [2, 2, 1];
    const output = 1;
    expect(singleNumber(input)).toEqual(output);
  });
  test("Second example", () => {
    const input = [4, 1, 2, 1, 2];
    const output = 4;
    expect(singleNumber(input)).toEqual(output);
  });
  test("Third example", () => {
    const input = [1];
    const output = 1;
    expect(singleNumber(input)).toEqual(output);
  });
});
