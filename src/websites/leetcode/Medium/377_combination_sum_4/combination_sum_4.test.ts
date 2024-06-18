import { describe, it, expect } from "vitest";
import { combinationSum4 } from "./combination_sum_4";

describe("combination sum 4 tests", function () {
    it("should pass the first test", function () {
        const expectedOutput = 7;
        const output = combinationSum4([1, 2, 3], 4);
        expect(output).toEqual(expectedOutput);
    });

    it("should pass the second test", function () {
        const expectedOutput = 0;
        const output = combinationSum4([9], 3);
        expect(output).toEqual(expectedOutput);
    });

    it("should pass the third test", function () {
        const expectedOutput = 181997601;
        const output = combinationSum4([1, 2, 3], 32);
        expect(output).toEqual(expectedOutput);
    });
});
