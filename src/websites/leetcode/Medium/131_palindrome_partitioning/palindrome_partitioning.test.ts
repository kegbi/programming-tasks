import { partition } from "./palindrome_partitioning";
import { describe, it, expect } from "vitest";

describe("131_palindrome_partitioning", function () {
  it("should pass the first test", function () {
    expect(partition("aab")).toEqual([
      ["a", "a", "b"],
      ["aa", "b"],
    ]);
  });

  it("should pass the second test", function () {
    expect(partition("a")).toEqual([["a"]]);
  });

  it("should pass the third test", function () {
    expect(partition("ab")).toEqual([["a", "b"]]);
  });
});
