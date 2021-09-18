import { indexPairs } from "./index_pairs_of_a_string";

describe("1065 index pairs of a string tests", function () {
  test("First example", () => {
    const inputText = "thestoryofleetcodeandme";
    const inputWords = ["story", "fleet", "leetcode"];

    const output = [
      [3, 7],
      [9, 13],
      [10, 17],
    ];
    expect(indexPairs(inputText, inputWords)).toEqual(output);
  });
  test("Second example", () => {
    const inputText = "ababa";
    const inputWords = ["aba", "ab"];

    const output = [
      [0, 1],
      [0, 2],
      [2, 3],
      [2, 4],
    ];
    expect(indexPairs(inputText, inputWords)).toEqual(output);
  });
});
