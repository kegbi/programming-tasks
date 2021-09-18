import { majorityElement } from "./majority_element";

describe("169 majority element tests", function () {
  test("First example", () => {
    const input = [3, 2, 3];

    const output = 3;
    expect(majorityElement(input)).toEqual(output);
  });
  test("Second example", () => {
    const input = [2, 2, 1, 1, 1, 2, 2];

    const output = 2;
    expect(majorityElement(input)).toEqual(output);
  });
  test("Third example", () => {
    const input = [6, 5, 5];

    const output = 5;
    expect(majorityElement(input)).toEqual(output);
  });
});
