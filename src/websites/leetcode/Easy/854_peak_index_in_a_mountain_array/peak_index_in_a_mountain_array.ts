export default function peakIndexInMountainArray(arr: number[]): number {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let middle = Math.floor((right + left) / 2);

    if (arr[middle] < arr[middle + 1]) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return left;
}
