// Bruteforce (too slow)
// export function productExceptSelf(nums: number[]): number[] {
//   let result: Array<number> = new Array(nums.length).fill(1);
//
//   nums.forEach((number, index) => {
//     result.forEach((element, elementIndex) => {
//       if (elementIndex !== index) {
//         const product = number * element;
//         result[elementIndex] = product === 0 ? 0 : product;
//       }
//     });
//   });
//
//   return result;
// }

// HashTable
// export function productExceptSelf(nums: number[]): number[] {
//   const hashTable: { [key: number]: number } = {};
//   const result: Array<number> = [];
//   for (let i = 0; i < nums.length; i++) {
//     const currValue = nums[i];
//     if (hashTable[currValue]) {
//       result.push(hashTable[currValue]);
//     } else {
//       const clone = [...nums];
//       clone[i] = 1;
//
//       const res = clone.reduce((prev: number, curr: number) => prev * curr, 1);
//       hashTable[currValue] = res;
//       result.push(res === 0 ? 0 : res);
//     }
//   }
//
//   return result;
// }

// o(n) time, o(n) memory
// export function productExceptSelf(nums: number[]): number[] {
//   const length = nums.length;
//
//   const left = new Array(length).fill(1);
//   for (let i = 1; i < length; i++) {
//     left[i] = left[i - 1] * nums[i - 1];
//   }
//
//   const right = new Array(length).fill(1);
//   for (let i = length - 2; i > -1; i--) {
//     right[i] = right[i + 1] * nums[i + 1];
//   }
//
//   let result: Array<number> = [];
//   for (let i = 0; i < length; i++) {
//     let product = left[i] * right[i];
//     result.push(product === 0 ? 0 : product);
//   }
//
//   return result;
// }

// o(n) time, o(1) memory (assuming, that we don't count the output array as extra space)
export function productExceptSelf(nums: number[]): number[] {
  const length = nums.length;

  const result: Array<number> = [1];

  for (let i = 1; i < length; i++) {
    result[i] = result[i - 1] * nums[i - 1];
  }

  let postfix = 1;
  for (let i = length - 1; i > -1; i--) {
    const product = result[i] * postfix;
    result[i] = product === 0 ? 0 : product;
    postfix *= nums[i];
  }

  return result;
}
