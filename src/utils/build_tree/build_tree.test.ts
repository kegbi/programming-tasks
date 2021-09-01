import { treeFromArray, treeValuesToString } from "./build_tree";

describe("build tree tests", function () {
  test("First example", () => {
    const input = [
      4,
      -7,
      -3,
      null,
      null,
      -9,
      -3,
      9,
      -7,
      -4,
      null,
      6,
      null,
      -6,
      -6,
      null,
      null,
      0,
      6,
      5,
      null,
      9,
      null,
      null,
      -1,
      -4,
      null,
      null,
      null,
      -2,
    ];

    const tree = treeFromArray(input);
    const output =
        "4, -7, -3, null, null, -9, -3, 9, -7, -4, null, 6, null, -6, -6, null, null, 0, 6, 5, null, 9, null, null, -1, -4, null, null, null, -2";
    expect(treeValuesToString(tree)).toEqual(output);
  });
  test("Second example", () => {
    const input = [];

    const tree = treeFromArray(input);
    const output = "null";
    expect(treeValuesToString(tree)).toEqual(output);
  });
  test("Third example", () => {
    const input = [1, 2, null, null, 3];

    const tree = treeFromArray(input);
    const output = "1, 2, null, null, 3";
    expect(treeValuesToString(tree)).toEqual(output);
  });
});
