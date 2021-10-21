import { subsetsWithDup } from "./subsets_2";

describe("90 subsets 2 tests", function () {
  test("First example", () => {
    const input = [1, 2, 2];
    const output = [[], [1], [1, 2], [1, 2, 2], [2], [2, 2]];

    expect(subsetsWithDup(input)).toEqual(expect.arrayContaining(output));
  });
  test("Second example", () => {
    const input = [0];
    const output = [[], [0]];

    expect(subsetsWithDup(input)).toEqual(expect.arrayContaining(output));
  });
  test("Third example", () => {
    const input = [4, 4, 4, 1, 4];
    const output = [
      [],
      [1],
      [1, 4],
      [1, 4, 4],
      [1, 4, 4, 4],
      [1, 4, 4, 4, 4],
      [4],
      [4, 4],
      [4, 4, 4],
      [4, 4, 4, 4],
    ];

    expect(subsetsWithDup(input)).toEqual(expect.arrayContaining(output));
  });
});
