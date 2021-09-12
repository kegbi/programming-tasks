// Hashmap Solution
export default function twoSum(
  nums: Array<number>,
  target: number
): number[] | Error {
  let hashMap = {};

  for (let index = 0; index < nums.length; index++) {
    const number = nums[index];

    if (hashMap[target - number] !== undefined) {
      return [hashMap[target - number], index];
    }
    hashMap[number] = index;
  }

  return new Error("No two sum solution");
}
