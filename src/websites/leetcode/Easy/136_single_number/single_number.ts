export default function singleNumber(nums: number[]) {
  const hashMap: {
    [number: number]: number;
  } = {};

  nums.forEach((num) => {
    if (num in hashMap) {
      hashMap[num]++;
    } else {
      hashMap[num] = 0;
    }
  });

  for (const num in hashMap) {
    if (hashMap[num] === 0) {
      return Number(num);
    }
  }
}
