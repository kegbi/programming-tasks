export default function minOperations(logs: string[]): number {
  let stack: string[] = [];
  logs.forEach((element) => {
    if (element === "../") {
      if (stack.length > 0) {
        stack.pop();
      }
    } else if (element !== "./") {
      stack.push(element);
    }
  });

  return stack.length;
}
