import makeGood from "./make_the_string_great";

describe("1544 Make the string great (again) tests", function () {
  test("First example", () => {
    const input = "leEeetcode";
    const output = "leetcode";
    expect(makeGood(input)).toEqual(output);
  });
  test("Second example", () => {
    const input = "abBAcC";
    const output = "";
    expect(makeGood(input)).toEqual(output);
  });
  test("Third example", () => {
    const input = "s";
    const output = "s";
    expect(makeGood(input)).toEqual(output);
  });
});
