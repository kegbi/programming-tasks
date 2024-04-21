import { describe, it, expect } from "vitest";
import { coinChange } from "./coin_change";

describe("coin change tests", function () {
  it("should pass the first test", function () {
    const expectedOutput = 3;
    const output = coinChange([1, 2, 5], 11);
    expect(output).toEqual(expectedOutput);
  });

  it("should pass the second test", function () {
    const expectedOutput = -1;
    const output = coinChange([2], 3);
    expect(output).toEqual(expectedOutput);
  });

  it("should pass the third test", function () {
    const expectedOutput = 0;
    const output = coinChange([1], 0);
    expect(output).toEqual(expectedOutput);
  });

  it("should pass the forth test", function () {
    const expectedOutput = 24;
    const output = coinChange(
      [411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422],
      9864,
    );
    expect(output).toEqual(expectedOutput);
  });

  it("should pass the fifth test", function () {
    const expectedOutput = 2;
    const output = coinChange([1, 2], 4);
    expect(output).toEqual(expectedOutput);
  });
});
