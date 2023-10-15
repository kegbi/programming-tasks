import { generateAbbreviations } from "./generalized_abbreviation";
import { describe, it, expect } from "vitest";

describe("generateAbbreviations", function () {
  it("should pass the first test", function () {
    const expectedOutput = [
      "4",
      "3d",
      "2r1",
      "2rd",
      "1o2",
      "1o1d",
      "1or1",
      "1ord",
      "w3",
      "w2d",
      "w1r1",
      "w1rd",
      "wo2",
      "wo1d",
      "wor1",
      "word",
    ];

    const output = generateAbbreviations("word");

    expect([...output].sort()).toEqual([...expectedOutput].sort());
  });

  it("should pass the second test", function () {
    const expectedOutput = ["1", "a"];

    const output = generateAbbreviations("a");

    expect([...output].sort()).toEqual([...expectedOutput].sort());
  });

  it("should pass the test with the word 'hi'", function () {
    const expectedOutput = ["2", "1i", "h1", "hi"];
    const output = generateAbbreviations("hi");
    expect([...output].sort()).toEqual([...expectedOutput].sort());
  });

  it("should pass the test with the word 'abc'", function () {
    const expectedOutput = ["3", "2c", "1b1", "1bc", "a2", "a1c", "ab1", "abc"];
    const output = generateAbbreviations("abc");
    expect([...output].sort()).toEqual([...expectedOutput].sort());
  });

  it("should pass the test with the word 'xyz'", function () {
    const expectedOutput = ["3", "2z", "1y1", "1yz", "x2", "x1z", "xy1", "xyz"];
    const output = generateAbbreviations("xyz");
    expect([...output].sort()).toEqual([...expectedOutput].sort());
  });

  it("should pass the test with the word 'one'", function () {
    const expectedOutput = ["3", "2e", "1n1", "1ne", "o2", "o1e", "on1", "one"];
    const output = generateAbbreviations("one");
    expect([...output].sort()).toEqual([...expectedOutput].sort());
  });
});
