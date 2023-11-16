import { rob } from "./house_robber";
import { describe, it, expect } from "vitest";

describe("house robber tests", function () {
  it("should pass the first test", function () {
    const expectedOutput = 4;
    const output = rob([1, 2, 3, 1]);
    expect(output).toEqual(expectedOutput);
  });

  it("should pass the second test", function () {
    const expectedOutput = 12;
    const output = rob([2, 7, 9, 3, 1]);
    expect(output).toEqual(expectedOutput);
  });

  it("should pass the third test", function () {
    const expectedOutput = 2;
    const output = rob([1, 2]);
    expect(output).toEqual(expectedOutput);
  });

  it("should pass the fourth test", function () {
    const expectedOutput = 4173;
    const output = rob([
      114, 117, 207, 117, 235, 82, 90, 67, 143, 146, 53, 108, 200, 91, 80, 223,
      58, 170, 110, 236, 81, 90, 222, 160, 165, 195, 187, 199, 114, 235, 197,
      187, 69, 129, 64, 214, 228, 78, 188, 67, 205, 94, 205, 169, 241, 202, 144,
      240,
    ]);
    expect(output).toEqual(expectedOutput);
  });

  it("should pass the fifth test", function () {
    const expectedOutput = 0;
    const output = rob([
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ]);
    expect(output).toEqual(expectedOutput);
  });
});
