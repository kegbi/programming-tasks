import {
  treeFromArray,
  treeValuesToString,
} from "../../../../utils/build_tree/build_tree";
import { mergeTrees } from "./merge_two_binary_trees";

describe("617 merge two binary trees tests", function () {
  test("First example", () => {
    const input1 = treeFromArray([1, 3, 2, 5]);
    const input2 = treeFromArray([2, 1, 3, null, 4, null, 7]);

    const output = treeFromArray([3, 4, 5, 5, 4, null, 7]);
    expect(treeValuesToString(mergeTrees(input1, input2))).toEqual(
      treeValuesToString(output)
    );
  });
  test("Second example", () => {
    const input1 = treeFromArray([1]);
    const input2 = treeFromArray([1, 2]);

    const output = treeFromArray([2, 2]);
    expect(treeValuesToString(mergeTrees(input1, input2))).toEqual(
      treeValuesToString(output)
    );
  });
  test("Third example", () => {
    const input1 = treeFromArray([]);
    const input2 = treeFromArray([1]);

    const output = treeFromArray([1]);
    expect(treeValuesToString(mergeTrees(input1, input2))).toEqual(
      treeValuesToString(output)
    );
  });
});
