import { subsets } from "./subsets";

describe("78 subsets tests", function () {
  test("First example", () => {
    const input = [1, 2, 3];
    const output = [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]];

    expect(subsets(input)).toEqual(expect.arrayContaining(output));
  });
  test("Second example", () => {
    const input = [0];
    const output = [[], [0]];

    expect(subsets(input)).toEqual(expect.arrayContaining(output));
  });
});
