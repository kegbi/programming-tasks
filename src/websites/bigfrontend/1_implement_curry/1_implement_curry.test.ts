import curry from "./1_implement_curry";

describe("1 implement curry tests", () => {
  test("First example", () => {
    function basicFunction(a, b, c) {
      return `${a}_${b}_${c}`;
    }

    const curriedJoin = curry(basicFunction);

    expect(curriedJoin(1, 2, 3)).toEqual("1_2_3");
    expect(curriedJoin(1)(2, 3)).toEqual("1_2_3");
    expect(curriedJoin(1, 2)(3)).toEqual("1_2_3");
    expect(curriedJoin(1)(2)(3)).toEqual("1_2_3");
  });
});
