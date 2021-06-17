// const twoSum = require("./two_sum");
import twoSum from "./two_sum"

describe("two sum case", function () {
  test("First example", () => {
    const array = [2, 7, 11, 15];
    const target = 9;
    const output = [0, 1];
    expect(twoSum(array, target)).toEqual(output);
  });
  test("Second example", () => {
    const array = [3,2,4];
    const target = 6;
    const output = [1, 2];
    expect(twoSum(array, target)).toEqual(output);
  });
  test("Third example", () => {
    const array = [3,3];
    const target = 6;
    const output = [0, 1];
    expect(twoSum(array, target)).toEqual(output);
  });
});
