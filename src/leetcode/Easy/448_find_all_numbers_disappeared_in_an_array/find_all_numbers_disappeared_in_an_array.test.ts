import findDisappearedNumbers from "./find_all_numbers_disappeared_in_an_array";

describe("448 find all numbers disappeared in an array tests", function () {
  test("First example", () => {
    const input = [4, 3, 2, 7, 8, 2, 3, 1];
    const output = [5, 6];
    expect(findDisappearedNumbers(input)).toEqual(output);
  });
  test("Second example", () => {
    const input = [1, 1];
    const output = [2];
    expect(findDisappearedNumbers(input)).toEqual(output);
  });
});
