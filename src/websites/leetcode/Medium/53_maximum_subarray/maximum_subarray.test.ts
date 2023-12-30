import { describe, it, expect } from "vitest";
import { maxSubArray } from "./maximum_subarray";

describe("maximum subarray tests", function () {
  it("should pass the first test", function () {
    const expectedOutput = 6;
    const output = maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
    expect(output).toEqual(expectedOutput);
  });

  it("should pass the second test", function () {
    const expectedOutput = 1;
    const output = maxSubArray([1]);
    expect(output).toEqual(expectedOutput);
  });

  it("should pass the third test", function () {
    const expectedOutput = 0;
    const output = maxSubArray([0]);
    expect(output).toEqual(expectedOutput);
  });

  it("should pass the fourth test", function () {
    const expectedOutput = -1;
    const output = maxSubArray([-1]);
    expect(output).toEqual(expectedOutput);
  });

  it("should pass the fifth test", function () {
    const expectedOutput = -2147483647;
    const output = maxSubArray([-2147483647]);
    expect(output).toEqual(expectedOutput);
  });
});
