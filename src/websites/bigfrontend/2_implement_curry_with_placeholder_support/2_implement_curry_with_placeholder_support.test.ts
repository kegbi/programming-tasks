import { curry } from "./2_implement_curry_with_placeholder_support";

describe("2 implement curry with placeholder support tests", () => {
  test("First example", () => {
    function basicFunction(a: string, b: string, c: string) {
      return `${a}_${b}_${c}`;
    }

    const curriedJoin = curry(basicFunction);
    const _ = curry.placeholder;

    expect(curriedJoin(1, 2, 3)).toEqual("1_2_3");
    expect(curriedJoin(1)(2, 3)).toEqual("1_2_3");
    expect(curriedJoin(1, 2)(3)).toEqual("1_2_3");
    expect(curriedJoin(1)(2)(3)).toEqual("1_2_3");
    expect(curriedJoin(_, 2)(1, 3)).toEqual("1_2_3");
    expect(curriedJoin(_, _, _)(1)(_, 3)(2)).toEqual("1_2_3");
  });
});
