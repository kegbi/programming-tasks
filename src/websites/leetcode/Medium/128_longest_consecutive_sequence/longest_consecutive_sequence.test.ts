import { longestConsecutive } from "./longest_consecutive_sequence";

describe("128 longest consecutive sequence tests", function () {
  test("First example", () => {
    const input = [100, 4, 200, 1, 3, 2];

    const output = 4;
    expect(longestConsecutive(input)).toEqual(output);
  });
  test("Second example", () => {
    const input = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];

    const output = 9;
    expect(longestConsecutive(input)).toEqual(output);
  });
  test("Third example", () => {
    const input = [0];

    const output = 1;
    expect(longestConsecutive(input)).toEqual(output);
  });
  test("Fourth example", () => {
    const input = [0, -1];

    const output = 2;
    expect(longestConsecutive(input)).toEqual(output);
  });
  test("Fifth example", () => {
    const input = [1, 2, 0, 1];

    const output = 3;
    expect(longestConsecutive(input)).toEqual(output);
  });
});
