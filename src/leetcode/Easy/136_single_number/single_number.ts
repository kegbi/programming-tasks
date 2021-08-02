export default function singleNumber(nums: number[]): any {
  const hashMap = {};

  nums.forEach((num) => {
    if (num in hashMap) {
      hashMap[num]++;
    } else {
      hashMap[num] = 0;
    }
  });

  for (let num in hashMap) {
    if (hashMap[num] === 0) {
      return Number(num);
    }
  }
}
