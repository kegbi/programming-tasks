import containsDuplicate from "./contains_duplicate";

describe("217 Contains duplicate", function () {
  test("First example", () => {
    const input = [1, 2, 3, 1];
    const output = true;
    expect(containsDuplicate(input)).toEqual(output);
  });
  test("Second example", () => {
    const input = [1, 2, 3, 4];
    const output = false;
    expect(containsDuplicate(input)).toEqual(output);
  });
  test("Third example", () => {
    const input = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
    const output = true;
    expect(containsDuplicate(input)).toEqual(output);
  });
});
