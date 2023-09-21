import { letterCombinations } from "./letter_combinations";
import { describe, it, expect } from "vitest";

describe("letterCombinations", function () {
  it("should pass the first test", function () {
    expect(letterCombinations("23")).toEqual([
      "ad",
      "ae",
      "af",
      "bd",
      "be",
      "bf",
      "cd",
      "ce",
      "cf",
    ]);
  });

  it("should pass the second test", function () {
    expect(letterCombinations("")).toEqual([]);
  });

  it("should pass the third test", function () {
    expect(letterCombinations("2")).toEqual(["a", "b", "c"]);
  });

  it("should pass the fourth test", function () {
    expect(letterCombinations("234")).toEqual([
      "adg",
      "adh",
      "adi",
      "aeg",
      "aeh",
      "aei",
      "afg",
      "afh",
      "afi",
      "bdg",
      "bdh",
      "bdi",
      "beg",
      "beh",
      "bei",
      "bfg",
      "bfh",
      "bfi",
      "cdg",
      "cdh",
      "cdi",
      "ceg",
      "ceh",
      "cei",
      "cfg",
      "cfh",
      "cfi",
    ]);
  });

  it("should pass the fifth test", function () {
    expect(letterCombinations("5")).toEqual(["j", "k", "l"]);
  });
});
