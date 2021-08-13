export default function removeKdigits(num: string, k: number): string {
  const stack = [];

  for (const digit of num) {
    while (stack.length > 0 && stack[stack.length - 1] > digit && k > 0) {
      stack.pop();
      k--;
    }
    stack.push(digit);
  }

  while (k > 0) {
    stack.pop();
    k--;
  }

  stack.reverse();
  while (stack[stack.length - 1] === "0") {
    stack.pop();
  }

  const result = stack.reverse().join("");

  return result.length === 0 ? "0" : result;
}
