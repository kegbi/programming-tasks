// Tracker solution (kinda like hash)
// export function permuteUnique(nums: number[]): number[][] {
//   const permutations: number[][] = [];
//   const numberTracker = nums.reduce(
//     (prev: { [num: number]: number }, curr) => ({
//       ...prev,
//       [curr]: 1 + (prev[curr] || 0),
//     }),
//     {}
//   );
//
//   function findPermutations(result: number[]): void {
//     if (result.length === nums.length) {
//       permutations.push(result);
//       return;
//     }
//
//     for (let key in numberTracker) {
//       if (numberTracker[key]) {
//         numberTracker[key] = numberTracker[key] - 1;
//         findPermutations([...result, Number(key)]);
//         numberTracker[key] = numberTracker[key] + 1;
//       }
//     }
//   }
//
//   findPermutations([]);
//
//   return permutations;
// }

// Sorting solution
export function permuteUnique(nums: number[]): number[][] {
  if (nums.length === 1) {
    return [nums];
  }

  let res: number[][] = [];
  let previous: number | null = null;

  nums.sort();

  for (let index = 0; index < nums.length; index++) {
    const currentNumber = nums[index];

    if (currentNumber !== previous) {
      previous = currentNumber;
      const restNums = [...nums];
      restNums.splice(index, 1);
      const perms = permuteUnique(restNums).map((x) => [currentNumber, ...x]);
      res.push(...perms);
    }
  }
  return res;
}
