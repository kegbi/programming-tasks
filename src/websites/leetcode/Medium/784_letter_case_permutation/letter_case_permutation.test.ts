import { letterCasePermutation } from "./letter_case_permutation";

describe("784 letter case permutation tests", function () {
  test("First example", () => {
    const input = "a1b2";

    const output = ["a1b2", "a1B2", "A1b2", "A1B2"];
    expect(letterCasePermutation(input)).toEqual(output);
  });
  test("Second example", () => {
    const input = "3z4";

    const output = ["3z4", "3Z4"];
    expect(letterCasePermutation(input)).toEqual(output);
  });
  test("Third example", () => {
    const input = "12345";

    const output = ["12345"];
    expect(letterCasePermutation(input)).toEqual(output);
  });
  test("Fourth example", () => {
    const input = "0";

    const output = ["0"];
    expect(letterCasePermutation(input)).toEqual(output);
  });
});
