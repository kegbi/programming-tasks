import { findDuplicates } from "./find_all_duplicates_in_an_array";

describe("442 find all duplicates in an array tests", function () {
  test("First example", () => {
    const input = [4, 3, 2, 7, 8, 2, 3, 1];

    const output = [2, 3];
    expect(findDuplicates(input)).toEqual(output);
  });
  test("Second example", () => {
    const input = [1, 1, 2];

    const output = [1];
    expect(findDuplicates(input)).toEqual(output);
  });
  test("Third example", () => {
    const input = [1];

    const output = [];
    expect(findDuplicates(input)).toEqual(output);
  });
  test("Fourth example", () => {
    const input = [2, 2];

    const output = [2];
    expect(findDuplicates(input)).toEqual(output);
  });
});
