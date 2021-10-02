import { exist } from "./word_search";

describe("79 word search tests", function () {
  test("First example", () => {
    const board = [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ];
    const word = "ABCCED";

    const output = true;
    expect(exist(board, word)).toEqual(output);
  });
  test("Second example", () => {
    const board = [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ];
    const word = "SEE";

    const output = true;
    expect(exist(board, word)).toEqual(output);
  });
  test("Third example", () => {
    const board = [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ];
    const word = "ABCB";

    const output = false;
    expect(exist(board, word)).toEqual(output);
  });
});
