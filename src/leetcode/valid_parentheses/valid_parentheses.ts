export default function validParentheses(s: string): boolean | any {
  const openBrackets = ["(", "{", "["];
  const closedBrackets = [")", "}", "]"];
  const openStack: any[] = [];
  const closedStack: any[] = [];

  const splittedBrackets = s.split("");
  splittedBrackets.forEach((bracket) => {
    if (openBrackets.includes(bracket)) {
      openStack.push(bracket);
    } else {
      closedStack.push(bracket);
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
