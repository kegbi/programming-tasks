// Recursive
// export default function flat(arr: Array<any>, depth: number = 1): Array<any> {
//   if (depth === 0) return arr;
//
//   const output = [];
//
//   for (const item of arr) {
//     if (Array.isArray(item)) {
//       output.push(...flat(item, depth - 1));
//     } else {
//       output.push(item);
//     }
//   }
//   return output;
// }

// Iterative
export default function flat(arr: Array<any>, depth: number = 1): Array<any> {
  const stack: Array<Array<[Array<any>, number]>> = arr.map((item) => [
    item,
    depth,
  ]);
  const res = [];

  while (stack.length > 0) {
    // @ts-ignore
    const [item, itemDepth] = stack.pop();
    if (Array.isArray(item) && itemDepth > 0) {
      stack.push(...item.map((i) => [i, itemDepth - 1]));
    } else {
      res.push(item);
    }
  }

  return res.reverse();
}
