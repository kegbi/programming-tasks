import { treeFromArray } from "../../../../utils/build_tree/build_tree";
import { isSubtree } from "./subtree_of_another_tree";

describe("573 subtree of another tree tests", function () {
  test("First example", () => {
    const input = treeFromArray([3, 4, 5, 1, 2]);
    const target = treeFromArray([4, 1, 2]);

    const output = true;
    expect(isSubtree(input, target)).toEqual(output);
  });
  test("Second example", () => {
    const input = treeFromArray([3, 4, 5, 1, 2, null, null, null, null, 0]);
    const target = treeFromArray([4, 1, 2]);

    const output = false;
    expect(isSubtree(input, target)).toEqual(output);
  });
  test("Trird example", () => {
    const input = treeFromArray([
      1,
      null,
      1,
      null,
      1,
      null,
      1,
      null,
      1,
      null,
      1,
      null,
      1,
      null,
      1,
      null,
      1,
      null,
      1,
      null,
      1,
      2,
    ]);
    const target = treeFromArray([
      1,
      null,
      1,
      null,
      1,
      null,
      1,
      null,
      1,
      null,
      1,
      2,
    ]);

    const output = true;
    expect(isSubtree(input, target)).toEqual(output);
  });
});
