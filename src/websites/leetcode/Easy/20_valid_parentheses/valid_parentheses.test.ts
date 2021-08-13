import validParentheses from "./valid_parentheses";

describe("20 Valid parentheses cases", function () {
  test("First example", () => {
    expect(validParentheses("()")).toEqual(true);
  });
  test("Second example", () => {
    expect(validParentheses("()[]{}")).toEqual(true);
  });
  test("Third example", () => {
    expect(validParentheses("(]")).toEqual(false);
  });
  test("Fourth example", () => {
    expect(validParentheses("([)]")).toEqual(false);
  });
  test("Fifth example", () => {
    expect(validParentheses("{[]}")).toEqual(true);
  });
  test("Sixth example", () => {
    expect(validParentheses("(){}}{")).toEqual(false);
  });
});
