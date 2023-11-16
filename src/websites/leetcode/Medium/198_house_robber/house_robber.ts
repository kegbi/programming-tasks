export function rob(nums: number[]): number {
  let bestResult = 0;

  const result: number[] = [];

  function robMoney(currentHouseIndex: number, currentMoney: number) {
    for (let i = currentHouseIndex; i < nums.length; i++) {
      const newMoney = currentMoney + nums[i];

      if (newMoney > bestResult) {
        bestResult = newMoney;
      }

      if (result[i] === undefined || result[i] < newMoney) {
        result[i] = newMoney;
        robMoney(i + 2, newMoney);
      }
    }
  }

  if (nums.length > 1) {
    for (let i = 0; i < 2; i++) {
      robMoney(i, 0);
    }
  } else {
    robMoney(0, 0);
  }

  return bestResult;
}
