export default function findDisappearedNumbers(nums: number[]): any {
  const set = new Set(nums);
  const result: Array<number> = [];

  for (let i = 1; i < nums.length + 1; i++) {
    if (!set.has(i)) {
      result.push(i);
    }
  }

  return result;
}
