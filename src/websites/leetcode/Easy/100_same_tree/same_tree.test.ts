import { treeFromArray } from "../../../../utils/build_tree/build_tree";
import { isSameTree } from "./same_tree";

describe("100 same tree tests", function () {
  test("First example", () => {
    const firstInput = treeFromArray([1, 2, 3]);
    const secondInput = treeFromArray([1, 2, 3]);

    const output = true;
    expect(isSameTree(firstInput, secondInput)).toEqual(output);
  });
  test("Second example", () => {
    const firstInput = treeFromArray([1, 2]);
    const secondInput = treeFromArray([1, null, 2]);

    const output = false;
    expect(isSameTree(firstInput, secondInput)).toEqual(output);
  });
  test("Third example", () => {
    const firstInput = treeFromArray([1, 2, 1]);
    const secondInput = treeFromArray([1, 1, 2]);

    const output = false;
    expect(isSameTree(firstInput, secondInput)).toEqual(output);
  });
});
