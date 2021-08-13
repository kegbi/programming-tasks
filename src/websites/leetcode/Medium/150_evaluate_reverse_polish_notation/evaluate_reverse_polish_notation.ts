export default function evalRPN(tokens: string[]): number {
  let stack = [];

  const operators = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => Math.trunc(a / b),
  };

  tokens.forEach((element) => {
    if (operators.hasOwnProperty(element)) {
      stack.splice(
        stack.length - 2,
        2,
        String(
          operators[element](
            Number(stack[stack.length - 2]),
            Number(stack[stack.length - 1])
          )
        )
      );
    } else {
      stack.push(Number(element));
    }
  });

  return Number(stack[0]);
}
