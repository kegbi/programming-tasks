import removeKdigits from "./remove_k_digits";

describe("402 Remove k digits tests", function () {
  test("First example", () => {
    const num = "1432219";
    const k = 3;
    const output = "1219";
    expect(removeKdigits(num, k)).toEqual(output);
  });
  test("Second example", () => {
    const num = "10200";
    const k = 1;
    const output = "200";
    expect(removeKdigits(num, k)).toEqual(output);
  });
  test("Third example", () => {
    const num = "10";
    const k = 2;
    const output = "0";
    expect(removeKdigits(num, k)).toEqual(output);
  });
});
