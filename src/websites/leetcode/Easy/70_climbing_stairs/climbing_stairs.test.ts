import climbStairs from "./climbing_stairs";

describe("70 Climbing stairs tests", function () {
  test("First example", () => {
    const input = 2;
    const output = 2;
    expect(climbStairs(input)).toEqual(output);
  });
  test("Second example", () => {
    const input = 3;
    const output = 3;
    expect(climbStairs(input)).toEqual(output);
  });
  test("Third example", () => {
    const input = 44;
    const output = 1134903170;
    expect(climbStairs(input)).toEqual(output);
  });
});
