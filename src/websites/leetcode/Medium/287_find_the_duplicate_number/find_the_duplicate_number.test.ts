import { findDuplicate } from "./find_the_duplicate_number";

describe("287 find the duplicate number tests", function () {
  test("First example", () => {
    const input = [1, 3, 4, 2, 2];

    const output = 2;
    expect(findDuplicate(input)).toEqual(output);
  });
  test("Second example", () => {
    const input = [3, 1, 3, 4, 2];

    const output = 3;
    expect(findDuplicate(input)).toEqual(output);
  });
  test("Third example", () => {
    const input = [1, 1];

    const output = 1;
    expect(findDuplicate(input)).toEqual(output);
  });
  test("Fourth example", () => {
    const input = [1, 1, 2];

    const output = 1;
    expect(findDuplicate(input)).toEqual(output);
  });
  test("Fifth example", () => {
    const input = [1, 3, 4, 2, 2];

    const output = 2;
    expect(findDuplicate(input)).toEqual(output);
  });
  test("Sixth example", () => {
    const input = [
      18, 13, 14, 17, 9, 19, 7, 17, 4, 6, 17, 5, 11, 10, 2, 15, 8, 12, 16, 17,
    ];

    const output = 17;
    expect(findDuplicate(input)).toEqual(output);
  });
});
