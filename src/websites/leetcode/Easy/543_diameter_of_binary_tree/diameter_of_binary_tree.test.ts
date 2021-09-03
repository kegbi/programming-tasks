import { treeFromArray } from "../../../../utils/build_tree/build_tree";
import { diameterOfBinaryTree } from "./diameter_of_binary_tree";

describe("543 diameter of binary tree", function () {
  test("First example", () => {
    const input = treeFromArray([1, 2, 3, 4, 5]);
    const output = 3;

    expect(diameterOfBinaryTree(input)).toEqual(output);
  });
  test("Second example", () => {
    const input = treeFromArray([1, 2]);
    const output = 1;

    expect(diameterOfBinaryTree(input)).toEqual(output);
  });
});
