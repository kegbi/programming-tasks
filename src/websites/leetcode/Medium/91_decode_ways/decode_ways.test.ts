import { describe, it, expect } from "vitest";
import { numDecodings} from "./decode_ways";

describe("word break tests", function () {
    it("should pass the first test", function () {
        const expectedOutput = 2;
        const output = numDecodings("12");
        expect(output).toEqual(expectedOutput);
    });

    it("should pass the second test", function () {
        const expectedOutput = 3;
        const output = numDecodings("226");
        expect(output).toEqual(expectedOutput);
    });

    it("should pass the third test", function () {
        const expectedOutput = 0;
        const output = numDecodings("06");
        expect(output).toEqual(expectedOutput);
    });

    it("should pass the fourth test", function () {
        const expectedOutput = 1;
        const output = numDecodings("2101");
        expect(output).toEqual(expectedOutput);
    });

    it("should pass the fifth test", function () {
        const expectedOutput = 55;
        const output = numDecodings("111111111");
        expect(output).toEqual(expectedOutput);
    });
});
