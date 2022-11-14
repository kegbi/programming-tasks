export function combine(n: number, k: number): number[][] {
  const result: number[][] = [];

  function backTrackingNumber(temp: number[], index: number): void {
    if (temp.length === k) {
      result.push(temp);
    }

    for (let i = index; i <= n; i++) {
      backTrackingNumber([...temp, i], i + 1);
    }
  }

  backTrackingNumber([], 1);

  return result;
}
