// Memoization version
// export function coinChange(coins: number[], amount: number): number {
//   if (amount === 0) {
//     return 0;
//   }
//
//   const descendingSortedCoinsArray = coins.sort((a, b) => b - a);
//   let finalCoinsUsedAmount = -1;
//
//   const results: { [key: string]: number } = {};
//
//   function deductionHelper(
//     coinsLeft: number,
//     coinsUsed: number,
//     index: number,
//   ) {
//     for (let i = index; i < descendingSortedCoinsArray.length; i++) {
//       const newCoinsLeft = coinsLeft - descendingSortedCoinsArray[i];
//       const newCoinsUsed = coinsUsed + 1;
//
//       if (newCoinsLeft === 0) {
//         if (
//           finalCoinsUsedAmount === -1 ||
//           finalCoinsUsedAmount > newCoinsUsed
//         ) {
//           finalCoinsUsedAmount = newCoinsUsed;
//         }
//       } else if (
//         newCoinsLeft > 0 &&
//         (finalCoinsUsedAmount === -1 || newCoinsUsed < finalCoinsUsedAmount)
//       ) {
//         const savedResult = results[String(newCoinsLeft)];
//         if (!savedResult || savedResult > newCoinsUsed) {
//           results[String(newCoinsLeft)] = newCoinsUsed;
//           deductionHelper(newCoinsLeft, newCoinsUsed, i);
//         }
//       }
//     }
//   }
//
//   deductionHelper(amount, 0, 0);
//
//   return finalCoinsUsedAmount;
// }

// DP version (Unbounded Knapsack)
export function coinChange(coins: number[], amount: number): number {
  const dpArray = new Array(amount + 1).fill(Infinity);

  // 0 coins needed to reach 0 amount
  dpArray[0] = 0;

  for (const coin of coins) {
    for (let i = 1; i < dpArray.length; i++) {
      if (i >= coin) {
        dpArray[i] = Math.min(dpArray[i], dpArray[i - coin] + 1);
      }
    }
  }

  return dpArray[amount] === Infinity ? -1 : dpArray[amount];
}
