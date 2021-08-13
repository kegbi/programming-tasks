// export default function countBits(n: number): number[] {
//   function dec2bin(dec) {
//     return (dec >>> 0).toString(2);
//   }
//   let numsArray = new Array(n + 1);
//
//   for (let i = 0; i < numsArray.length; i++) {
//     numsArray[i] = (dec2bin(i).match(/1/g) || []).length;
//   }
//
//   return numsArray;
// }

// Bitwise stuff
export default function countBits(n: number): number[] {
  let memo = new Array(n + 1).fill(0);

  for (let i = 0; i < memo.length; i++) {
    memo[i] = memo[i >> 1] + (i % 2);
  }

  return memo;
}
