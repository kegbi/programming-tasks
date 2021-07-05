import validParentheses from "./valid_parentheses";

describe("valid parentheses cases", function () {
  test("First example", () => {
    expect(validParentheses("()")).toEqual(true);
  });
  test("Second example", () => {
    expect(validParentheses("()[]{}")).toEqual(true);
  });
  test("Third example", () => {
    expect(validParentheses("(]")).toEqual(true);
  });
  test("Fourth example", () => {
    expect(validParentheses("([)]")).toEqual(true);
  });
  test("Fifth example", () => {
    expect(validParentheses("{[]}")).toEqual(true);
  });
  test("Sixth example", () => {
    expect(validParentheses("(){}}{")).toEqual(true);
  });
});
