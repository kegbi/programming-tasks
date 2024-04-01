import { rob } from "./house_robber_2";
import { describe, it, expect } from "vitest";

describe("house robber 2 tests", function () {
  it("should pass the first test", function () {
    const expectedOutput = 3;
    const output = rob([2, 3, 2]);
    expect(output).toEqual(expectedOutput);
  });

  it("should pass the second test", function () {
    const expectedOutput = 4;
    const output = rob([1, 2, 3, 1]);
    expect(output).toEqual(expectedOutput);
  });

  it("should pass the third test", function () {
    const expectedOutput = 0;
    const output = rob([0]);
    expect(output).toEqual(expectedOutput);
  });

  it("should pass the fourth test", function () {
    const expectedOutput = 1;
    const output = rob([1]);
    expect(output).toEqual(expectedOutput);
  });

  it("should pass the fifth test", function () {
    const expectedOutput = 2;
    const output = rob([1, 2]);
    expect(output).toEqual(expectedOutput);
  });

  it("should pass the sixth test", function () {
    const expectedOutput = 3;
    const output = rob([1, 2, 1, 1]);
    expect(output).toEqual(expectedOutput);
  });

  it("should pass the seventh test", function () {
    const expectedOutput = 3;
    const output = rob([1, 2, 1, 1, 1]);
    expect(output).toEqual(expectedOutput);
  });

  it("should pass the eighth test", function () {
    const expectedOutput = 4;
    const output = rob([1, 2, 1, 1, 1, 1]);
    expect(output).toEqual(expectedOutput);
  });

  it("should pass the ninth test", function () {
    const expectedOutput = 4;
    const output = rob([1, 2, 1, 1, 1, 1, 1]);
    expect(output).toEqual(expectedOutput);
  });

  it("should pass the tenth test", function () {
    const expectedOutput = 5;
    const output = rob([1, 2, 1, 1, 1, 1, 1, 1]);
    expect(output).toEqual(expectedOutput);
  });

  it("should pass the eleventh test", function () {
    const expectedOutput = 3;
    const output = rob([1, 2, 3]);
    expect(output).toEqual(expectedOutput);
  });

  it("should pass the twelve test", function () {
    const expectedOutput = 16;
    const output = rob([4, 2, 3, 12, 13]);
    expect(output).toEqual(expectedOutput);
  });
});
