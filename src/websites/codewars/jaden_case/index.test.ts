String.prototype.toJadenCase = function () {
  return this.split(" ")
    .map((word) => {
      // Maybe need some check for value like isLetter or something like this, but i'm quite lazy
      return word.charAt(0).toUpperCase() + word.substring(1);
    })
    .join(" ");
};

describe("solution", function () {
  test("transforms our func normally", () => {
    const str = "How can mirrors be real if our eyes aren't real";
    expect(str.toJadenCase()).toBe(
      "How Can Mirrors Be Real If Our Eyes Aren't Real"
    );
  });
});
