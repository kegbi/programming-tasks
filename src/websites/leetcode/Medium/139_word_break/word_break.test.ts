import { describe, it, expect } from "vitest";
import { wordBreak } from "./word_break";

describe("word break tests", function () {
  it("should pass the first test", function () {
    const expectedOutput = true;
    const output = wordBreak("leetcode", ["leet", "code"]);
    expect(output).toEqual(expectedOutput);
  });

  it("should pass the second test", function () {
    const expectedOutput = true;
    const output = wordBreak("applepenapple", ["apple", "pen"]);
    expect(output).toEqual(expectedOutput);
  });

  it("should pass the third test", function () {
    const expectedOutput = false;
    const output = wordBreak("catsandog", [
      "cats",
      "dog",
      "sand",
      "and",
      "cat",
    ]);
    expect(output).toEqual(expectedOutput);
  });

  it("should pass the third test", function () {
    const expectedOutput = true;
    const output = wordBreak("bccdbacdbdacddabbaaaadababadad", [
      "cbc",
      "bcda",
      "adb",
      "ddca",
      "bad",
      "bbb",
      "dad",
      "dac",
      "ba",
      "aa",
      "bd",
      "abab",
      "bb",
      "dbda",
      "cb",
      "caccc",
      "d",
      "dd",
      "aadb",
      "cc",
      "b",
      "bcc",
      "bcd",
      "cd",
      "cbca",
      "bbd",
      "ddd",
      "dabb",
      "ab",
      "acd",
      "a",
      "bbcc",
      "cdcbd",
      "cada",
      "dbca",
      "ac",
      "abacd",
      "cba",
      "cdb",
      "dbac",
      "aada",
      "cdcda",
      "cdc",
      "dbc",
      "dbcb",
      "bdb",
      "ddbdd",
      "cadaa",
      "ddbc",
      "babb",
    ]);
    expect(output).toEqual(expectedOutput);
  });
});
