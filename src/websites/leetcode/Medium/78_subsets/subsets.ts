// export function subsets(nums: number[]): number[][] {
//   const output: Array<Array<number>> = [[]];
//
//   nums.forEach((num) => {
//     const newSubsets: Array<Array<number>> = [];
//     output.forEach((current) => {
//       newSubsets.push([...current, num]);
//     });
//     newSubsets.forEach((current) => {
//       output.push(current);
//     });
//   });
//
//   return output;
// }

export function subsets(nums: number[]): number[][] {
  const result: Set<Array<number>> = new Set();

  const checkNumbers = (
    currentNumbersForCheck: Array<number>,
    initialNumbersArray: Array<number>,
    index: number
  ) => {
    result.add(currentNumbersForCheck);

    for (let i = index; i < nums.length; i++) {
      checkNumbers([...currentNumbersForCheck, nums[i]], nums, i + 1);
    }
  };

  checkNumbers([], nums, 0);

  return Array.from(result);
}
