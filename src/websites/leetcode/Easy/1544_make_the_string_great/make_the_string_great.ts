export default function makeGood(s: string): string {
  const stack: string[] = [];

  const areAdjacent = (a: string, b: string): boolean => {
    return a.toLowerCase() === b.toLowerCase() && a !== b;
  };

  for (let i = 0; i < s.length; i++) {
    if (stack.length && areAdjacent(stack[stack.length - 1], s[i])) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }

  return stack.join("");
}
