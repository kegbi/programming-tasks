String.prototype.toJadenCase = function (): string {
  return this
    .split(" ")
    .map((word) => {
      // Maybe need some check for value like isLetter or something like this, but i'm quite lazy
      return word.charAt(0).toUpperCase() + word.substring(1)
    })
    .join(" ");
};
