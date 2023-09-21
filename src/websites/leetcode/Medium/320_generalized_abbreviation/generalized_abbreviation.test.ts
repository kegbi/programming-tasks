import { generalized_abbreviation } from "./generalized_abbreviation";
import { describe, it, expect } from "vitest";

describe("generalized_abbreviation", function () {
  it("should pass the first test", function () {
    expect(generalized_abbreviation("word")).toEqual([
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
    ]);
  });

  it("should pass the second test", function () {
    expect(generalized_abbreviation("a")).toEqual(["1", "a"]);
  });
});
