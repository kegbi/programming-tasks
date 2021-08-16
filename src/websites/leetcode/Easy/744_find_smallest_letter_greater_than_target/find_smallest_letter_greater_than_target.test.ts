import nextGreatestLetter from "./find_smallest_letter_greater_than_target";

describe("744 find smallest letter greater than target tests", function () {
  test("First example", () => {
    const input = ["c", "f", "j"];
    const target = "a";
    const output = "c";
    expect(nextGreatestLetter(input, target)).toEqual(output);
  });
  test("Second example", () => {
    const input = ["c", "f", "j"];
    const target = "c";
    const output = "f";
    expect(nextGreatestLetter(input, target)).toEqual(output);
  });
  test("Third example", () => {
    const input = ["c", "f", "j"];
    const target = "d";
    const output = "f";
    expect(nextGreatestLetter(input, target)).toEqual(output);
  });
  test("Fourth example", () => {
    const input = ["c", "f", "j"];
    const target = "g";
    const output = "j";
    expect(nextGreatestLetter(input, target)).toEqual(output);
  });
  test("Fifth example", () => {
    const input = ["c", "f", "j"];
    const target = "j";
    const output = "c";
    expect(nextGreatestLetter(input, target)).toEqual(output);
  });
});
