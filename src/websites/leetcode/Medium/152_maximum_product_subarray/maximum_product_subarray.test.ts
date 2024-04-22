import { describe, it, expect } from "vitest";
import { maxProduct } from "./maximum_product_subarray";

describe("maximum product subarray tests", function () {
  it("should pass the first test", function () {
    const expectedOutput = 6;
    const output = maxProduct([2, 3, -2, 4]);
    expect(output).toEqual(expectedOutput);
  });

  it("should pass the second test", function () {
    const expectedOutput = 0;
    const output = maxProduct([-2, 0, -1]);
    expect(output).toEqual(expectedOutput);
  });

  it("should pass the third test", function () {
    const expectedOutput = -2;
    const output = maxProduct([-2]);
    expect(output).toEqual(expectedOutput);
  });

  it("should pass the fourth test", function () {
    const expectedOutput = 2;
    const output = maxProduct([0, 2]);
    expect(output).toEqual(expectedOutput);
  });

  it("should pass the fifth test", function () {
    const expectedOutput = 4;
    const output = maxProduct([3, -1, 4]);
    expect(output).toEqual(expectedOutput);
  });

  it("should pass the sixth test", function () {
    const expectedOutput = 24;
    const output = maxProduct([2, -5, -2, -4, 3]);
    expect(output).toEqual(expectedOutput);
  });
});
