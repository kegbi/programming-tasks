import lengthOfLongestSubstring from "./longest_substring";

describe("longest substring test cases", function () {
  test("First example", () => {
    const input = "abcabcbb";
    const output = 3;
    expect(lengthOfLongestSubstring(input)).toEqual(output);
  });
  test("Second example", () => {
    const input = "bbbbb";
    const output = 1;
    expect(lengthOfLongestSubstring(input)).toEqual(output);
  });
  test("Third example", () => {
    const input = "pwwkew";
    const output = 3;
    expect(lengthOfLongestSubstring(input)).toEqual(output);
  });
  test("Forth example", () => {
    const input = "";
    const output = 0;
    expect(lengthOfLongestSubstring(input)).toEqual(output);
  });
  test("Fifth example", () => {
    const input = "aab";
    const output = 2;
    expect(lengthOfLongestSubstring(input)).toEqual(output);
  });
  test("Sixth example", () => {
    const input = "dvdf";
    const output = 3;
    expect(lengthOfLongestSubstring(input)).toEqual(output);
  });
});
