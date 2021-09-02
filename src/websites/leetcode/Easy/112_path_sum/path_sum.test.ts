import { treeFromArray } from "../../../../utils/build_tree/build_tree";
import { hasPathSum } from "./path_sum";

describe("112 path sum tests", function () {
  test("First example", () => {
    const input = treeFromArray([
      5,
      4,
      8,
      11,
      null,
      13,
      4,
      7,
      2,
      null,
      null,
      null,
      1,
    ]);
    const requiredNumber = 22;

    const output = true;
    expect(hasPathSum(input, requiredNumber)).toEqual(output);
  });
  test("Second example", () => {
    const input = treeFromArray([1, 2, 3]);
    const requiredNumber = 5;

    const output = false;
    expect(hasPathSum(input, requiredNumber)).toEqual(output);
  });
  test("Third example", () => {
    const input = treeFromArray([1, 2]);
    const requiredNumber = 0;

    const output = false;
    expect(hasPathSum(input, requiredNumber)).toEqual(output);
  });
  test("Fourth example", () => {
    const input = treeFromArray([1, 2]);
    const requiredNumber = 1;

    const output = false;
    expect(hasPathSum(input, requiredNumber)).toEqual(output);
  });
  test("Fifth example", () => {
    const input = treeFromArray([0, 1, 1]);
    const requiredNumber = 1;

    const output = true;
    expect(hasPathSum(input, requiredNumber)).toEqual(output);
  });
});
