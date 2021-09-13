import { backspaceCompare } from "./backspace_string_compare";

describe("844 backspace string compare tests", function () {
  test("First example", () => {
    const input1 = "ab#c";
    const input2 = "ad#c";

    const output = true;
    expect(backspaceCompare(input1, input2)).toEqual(output);
  });
  test("Second example", () => {
    const input1 = "ab##";
    const input2 = "c#d#";

    const output = true;
    expect(backspaceCompare(input1, input2)).toEqual(output);
  });
  test("Third example", () => {
    const input1 = "a##c";
    const input2 = "#a#c";

    const output = true;
    expect(backspaceCompare(input1, input2)).toEqual(output);
  });
  test("Fourth example", () => {
    const input1 = "a#c";
    const input2 = "b";

    const output = false;
    expect(backspaceCompare(input1, input2)).toEqual(output);
  });
});
