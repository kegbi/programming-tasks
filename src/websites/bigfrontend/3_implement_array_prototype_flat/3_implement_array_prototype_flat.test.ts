import flat from "./3_implement_array_prototype_flat";

describe("3 implement Array.prototype.flat tests", () => {
  test("First example", () => {
    const arr = [1, [2], [3, [4]]];

    expect(flat(arr)).toEqual([1, 2, 3, [4]]);
  });
  test("Second example", () => {
    const arr = [1, [2], [3, [4]]];

    expect(flat(arr, 1)).toEqual([1, 2, 3, [4]]);
  });
  test("Third example", () => {
    const arr = [1, [2], [3, [4]]];

    expect(flat(arr, 2)).toEqual([1, 2, 3, 4]);
  });
  test("Fourth example", () => {
    const arr = [1, [2], [3, [4]]];

    expect(flat(arr, 0)).toEqual([1, [2], [3, [4]]]);
  });
});
