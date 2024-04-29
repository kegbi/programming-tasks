// DFS + cache
// export function lengthOfLIS(nums: number[]): number {
//   let globalHighestNumber = 0;
//
//   const maxSequenceArray = new Array(nums.length).fill(0);
//
//   function iterateOverNums(
//     highestNumber: number,
//     sequenceCounter: number,
//     index: number,
//   ) {
//     for (let j = index; j < nums.length; j++) {
//       if ((nums[j] === 0 && sequenceCounter === 0) || nums[j] > highestNumber) {
//         const newSequenceCounter = sequenceCounter + 1;
//         if (globalHighestNumber < newSequenceCounter) {
//           globalHighestNumber = newSequenceCounter;
//         }
//
//         if (maxSequenceArray[j] < newSequenceCounter) {
//           maxSequenceArray[j] = newSequenceCounter;
//           iterateOverNums(nums[j], newSequenceCounter, j);
//         }
//       }
//     }
//   }
//
//   for (let i = 0; i < nums.length; i++) {
//     iterateOverNums(-Infinity, 0, i);
//   }
//
//   return globalHighestNumber;
// }

// DP
export function lengthOfLIS(nums: number[]): number {
  if (nums.length === 0) return 0;

  const lis = new Array(nums.length).fill(1);

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        lis[i] = Math.max(lis[i], lis[j] + 1);
      }
    }
  }

  return Math.max(...lis);
}
