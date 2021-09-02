import evalRPN from "./evaluate_reverse_polish_notation";

describe("150 Longest substring test cases", function () {
  test("First example", () => {
    const input = ["2", "1", "+", "3", "*"];
    const output = 9;
    expect(evalRPN(input)).toEqual(output);
  });
  test("Second example", () => {
    const input = ["4", "13", "5", "/", "+"];
    const output = 6;
    expect(evalRPN(input)).toEqual(output);
  });
  test("Third example", () => {
    const input = [
      "10",
      "6",
      "9",
      "3",
      "+",
      "-11",
      "*",
      "/",
      "*",
      "17",
      "+",
      "5",
      "+",
    ];
    const output = 22;
    expect(evalRPN(input)).toEqual(output);
  });
  test("Fourth example", () => {
    const input = ["4", "-2", "/", "2", "-3", "-", "-"];
    const output = -7;
    expect(evalRPN(input)).toEqual(output);
  });
});
