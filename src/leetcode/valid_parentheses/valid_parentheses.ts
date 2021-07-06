export default function validParentheses(string: string): boolean {
  type OpeningBracket = "(" | "{" | "[";
  type ClosingBracket = ")" | "}" | "]";
  type Bracket = OpeningBracket | ClosingBracket;

  const openBrackets = ["(", "{", "["];
  const closedBrackets = [")", "}", "]"];
  const openStack: OpeningBracket[] = [];
  const closedStack: ClosingBracket[] = [];

  const splittedBrackets = string.split("");
  splittedBrackets.forEach((bracket: Bracket) => {
    if (openBrackets.includes(bracket)) {
      openStack.push(bracket as OpeningBracket);
    } else {
      closedStack.push(bracket as ClosingBracket);
      const bracketIndex = closedBrackets.indexOf(bracket);
      if (openStack.length > 0) {
        if (openStack[openStack.length - 1] === openBrackets[bracketIndex]) {
          openStack.pop();
          closedStack.pop();
        }
      }
    }
  });

  return openStack.length === 0 && closedStack.length === 0;
}
