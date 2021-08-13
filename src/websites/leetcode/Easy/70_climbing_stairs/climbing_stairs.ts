export default function climbStairs(n: number): number {
  if (n === 1) {
    return 1;
  }

  let number1 = 1;
  let number2 = 2;

  for (let i = 3; i < n + 1; i++) {
    [number1, number2] = [number2, number1 + number2];
  }

  return number2;
}
