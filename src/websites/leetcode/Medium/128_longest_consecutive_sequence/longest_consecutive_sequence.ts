// Sorting solution
// export function longestConsecutive(nums: number[]): number {
//   if (nums.length == 0) {
//     return 0;
//   }
//   const sortedArray = nums.sort((a, b) => {
//     return a - b;
//   });
//
//   let longestStreak = 1;
//   let currentStreak = 1;
//
//   for (let i = 1; i < nums.length; i++) {
//     if (sortedArray[i] !== sortedArray[i - 1]) {
//       if (sortedArray[i] === sortedArray[i - 1] + 1) {
//         currentStreak += 1;
//       } else {
//         longestStreak = Math.max(longestStreak, currentStreak);
//         currentStreak = 1;
//       }
//     }
//   }
//
//   return Math.max(longestStreak, currentStreak);
// }

// Constant lookup times. Time complexity: O(n+n) = O(n), space complexity: O(1)
export function longestConsecutive(nums: number[]): number {
  const numsMap = new Map();

  nums.forEach((number) => {
    if (!numsMap.has(String(number))) {
      numsMap.set(String(number), number);
    }
  });

  let longestStreak = 0;

  numsMap.forEach((value) => {
    if (!numsMap.has(String(value - 1))) {
      let currentNum = value;
      let currentStreak = 1;

      while (numsMap.has(String(currentNum + 1))) {
        currentNum += 1;
        currentStreak += 1;
      }

      longestStreak = Math.max(longestStreak, currentStreak);
    }
  });

  return longestStreak;
}
