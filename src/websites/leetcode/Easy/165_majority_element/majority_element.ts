// HashMap solution
// export function majorityElement(nums: number[]): number {
//   const requiredNumber = nums.length / 2;
//
//   const hashMap: { [num: number]: number } = {};
//
//   nums.forEach((number) => {
//     if (number in hashMap) {
//       hashMap[number]++;
//     } else {
//       hashMap[number] = 1;
//     }
//   });
//
//   return Number(
//     Object.keys(hashMap).find((key) => hashMap[key] > requiredNumber)
//   );
// }

// Sorting solution
// export function majorityElement(nums: number[]): number {
//   return nums.sort()[Math.floor(nums.length / 2)];
// }

// Boyer-Moore voting algorithm solution
// O(n) time and O(1) space
export function majorityElement(nums: number[]): number {
  let count = 0;
  let candidate: number | null = null;

  nums.forEach((number) => {
    if (count === 0) {
      candidate = number;
    }
    if (candidate === number) {
      count++;
    } else {
      count--;
    }
  });

  return candidate;
}
