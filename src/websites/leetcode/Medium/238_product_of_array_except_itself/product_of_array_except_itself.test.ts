import { productExceptSelf } from "./product_of_array_except_itself";

describe("238 product of array except itself tests", function () {
  test("First example", () => {
    const input = [1, 2, 3, 4];

    const output = [24, 12, 8, 6];
    expect(productExceptSelf(input)).toEqual(output);
  });
  test("Second example", () => {
    const input = [-1, 1, 0, -3, 3];

    const output = [0, 0, 9, 0, 0];
    expect(productExceptSelf(input)).toEqual(output);
  });
  test("Third example", () => {
    const input = [2, 3, 0, 0];

    const output = [0, 0, 0, 0];
    expect(productExceptSelf(input)).toEqual(output);
  });
  test("Fourth example", () => {
    const input = [4, 3, 2, 1, 2];

    const output = [12, 16, 24, 48, 24];
    expect(productExceptSelf(input)).toEqual(output);
  });
});
