import { treeFromArray } from "../../../../utils/build_tree/build_tree";
import { invertTree } from "./invert_binary_tree";

describe("226 invert binary tree tests", function () {
  test("First example", () => {
    const input = treeFromArray([4, 2, 7, 1, 3, 6, 9]);

    const output = treeFromArray([4, 7, 2, 9, 6, 3, 1]);
    expect(invertTree(input)).toEqual(output);
  });
  test("Second example", () => {
    const input = treeFromArray([2, 1, 3]);

    const output = treeFromArray([2, 3, 1]);
    expect(invertTree(input)).toEqual(output);
  });
  test("Third example", () => {
    const input = treeFromArray([]);

    const output = treeFromArray([]);
    expect(invertTree(input)).toEqual(output);
  });
});
