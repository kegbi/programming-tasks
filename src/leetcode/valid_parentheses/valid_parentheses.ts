// First solution

// export default function validParentheses(string: string): boolean {
//   type OpeningBracket = "(" | "{" | "[";
//   type ClosingBracket = ")" | "}" | "]";
//
//   const openBrackets = ["(", "{", "["];
//   const closedBrackets = [")", "}", "]"];
//   const openStack: OpeningBracket[] = [];
//   const closedStack: ClosingBracket[] = [];
//
//   const splittedBrackets = string.split("");
//   splittedBrackets.forEach((bracket: string) => {
//     if (openBrackets.includes(bracket)) {
//       openStack.push(bracket as OpeningBracket);
//     } else {
//       closedStack.push(bracket as ClosingBracket);
//       const bracketIndex = closedBrackets.indexOf(bracket);
//       if (openStack.length > 0) {
//         if (openStack[openStack.length - 1] === openBrackets[bracketIndex]) {
//           openStack.pop();
//           closedStack.pop();
//         }
//       }
//     }
//   });
//
//   return openStack.length === 0 && closedStack.length === 0;
// }

// Second solution, uses only 1 stack

export default function validParentheses(string: string): boolean {
  type OpeningBracket = "(" | "{" | "[";
  type ClosingBracket = ")" | "}" | "]";

  const matching: { [key in OpeningBracket]: ClosingBracket } = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  const stack: string[] = [];

  for (const char of string) {
    // If current symbol is opening bracket - push it to the stack
    if (matching[char]) {
      stack.push(char);
      // If current symbol !== closing bracket, associated with last symbol in stack - return false
    } else if (char !== matching[stack[stack.length - 1]]) {
      return false;
    } else {
      // In other cases - delete last element from stack
      stack.pop();
    }
  }

  return stack.length === 0;
}
