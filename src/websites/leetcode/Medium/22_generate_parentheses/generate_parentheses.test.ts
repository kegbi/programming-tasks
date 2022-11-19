import { generateParenthesis } from "./generate_parentheses";

describe("22 generate parentheses tests", () => {
  test("First example", () => {
    const n = 3;

    expect(generateParenthesis(n)).toEqual([
      "((()))",
      "(()())",
      "(())()",
      "()(())",
      "()()()",
    ]);
  });

  test("Second example", () => {
    const n = 1;

    expect(generateParenthesis(n)).toEqual(["()"]);
  });
});
