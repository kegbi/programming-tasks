import NumArray from "./range_sum_query_immutable";

describe("303 Range sum query immutable tests", function () {
  const inputNums = [-2, 0, 3, -5, 2, -1];
  const numArray = new NumArray(inputNums);
  test("First example", () => {
    expect(numArray.sumRange(0, 2)).toEqual(1);
  });
  test("Second example", () => {
    expect(numArray.sumRange(2, 5)).toEqual(-1);
  });
  test("Third example", () => {
    expect(numArray.sumRange(0, 5)).toEqual(-3);
  });
});
