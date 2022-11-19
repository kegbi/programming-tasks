export function generateParenthesis(n: number): string[] {
  const result: string[] = [];

  function backtrack(
    parenthesisCombination: string,
    openingBracketCounter: number,
    closingBracketCounter: number
  ) {
    if (openingBracketCounter === 0 && closingBracketCounter === 0) {
      result.push(parenthesisCombination);
    } else if (closingBracketCounter >= openingBracketCounter) {
      if (openingBracketCounter > 0) {
        backtrack(
          parenthesisCombination + "(",
          openingBracketCounter - 1,
          closingBracketCounter
        );
      }
      if (closingBracketCounter > 0) {
        backtrack(
          parenthesisCombination + ")",
          openingBracketCounter,
          closingBracketCounter - 1
        );
      }
    }
  }

  backtrack("", n, n);

  return result;
}
