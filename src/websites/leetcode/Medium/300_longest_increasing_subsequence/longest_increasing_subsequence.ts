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
// export function lengthOfLIS(nums: number[]): number {
//   if (nums.length === 0) return 0;
//
//   const lis = new Array(nums.length).fill(1);
//
//   for (let i = 1; i < nums.length; i++) {
//     for (let j = 0; j < i; j++) {
//       if (nums[j] < nums[i]) {
//         lis[i] = Math.max(lis[i], lis[j] + 1);
//       }
//     }
//   }
//
//   return Math.max(...lis);
// }

// BinarySearch
export function lengthOfLIS(nums: number[]): number {
  if (nums.length === 0) return 0;

  const finalSequence: number[] = [];

  function binarySearch(arr: number[], x: number): number {
    let start = 0;
    let end = arr.length - 1;
    let resultIndex = -1;

    while (start <= end) {
      const mid = Math.floor((start + end) / 2);

      if (arr[mid] < x) {
        start = mid + 1;
      } else {
        end = mid - 1;
        resultIndex = mid;
      }
    }

    return resultIndex >= 0 ? resultIndex : start;
  }

  for (let i = 0; i < nums.length; i++) {
    const index = binarySearch(finalSequence, nums[i]);
    if (index === finalSequence.length) {
      finalSequence.push(nums[i]);
    } else {
      finalSequence[index] = nums[i];
    }
  }

  return finalSequence.length;
}
