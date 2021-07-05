export default function validParentheses(s: string): boolean | any {
  const openBrackets = ["(", "{", "["];
  const closedBrackets = [")", "}", "]"];
  const openStack: any[] = [];
  const closedStack: any[] = [];

  const splittedBrackets = s.split("");
  splittedBrackets.forEach((bracket) => {
    if (openBrackets.includes(bracket)) {
      openStack.push(bracket);
      const bracketIndex = openBrackets.indexOf(bracket);
      if (closedStack.length > 0) {
        if (
          closedStack[closedStack.length - 1] === closedBrackets[bracketIndex]
        ) {
          openStack.pop();
          closedStack.pop();
        }
      }
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

  if (openStack.length === 0 && closedStack.length === 0) {
    return true;
  } else {
    return [openStack, closedStack];
  }
}

validParentheses("{[]}");
