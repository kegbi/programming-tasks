import { treeFromArray } from "../../../../utils/build_tree/build_tree";
import { lowestCommonAncestor } from "./lowest_common_ancestor_of_a_binary_search_tree";
import { binarySearchInBST } from "../../../../common_data_structures/binary_tree/binary_search";

describe("235 lowest common ancestor of a binary search tree tests", function () {
  test("First example", () => {
    const input = treeFromArray([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]);

    const firstNode = binarySearchInBST(input, 2);
    const secondNode = binarySearchInBST(input, 8);

    const output = binarySearchInBST(input, 6);
    expect(lowestCommonAncestor(input, firstNode, secondNode)).toEqual(output);
  });
  test("Second example", () => {
    const input = treeFromArray([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]);

    const firstNode = binarySearchInBST(input, 2);
    const secondNode = binarySearchInBST(input, 4);

    const output = binarySearchInBST(input, 2);
    expect(lowestCommonAncestor(input, firstNode, secondNode)).toEqual(output);
  });
  test("Third example", () => {
    const input = treeFromArray([2, 1]);

    const firstNode = binarySearchInBST(input, 2);
    const secondNode = binarySearchInBST(input, 1);

    const output = binarySearchInBST(input, 2);
    expect(lowestCommonAncestor(input, firstNode, secondNode)).toEqual(output);
  });
});
