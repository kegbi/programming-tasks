export default function nextGreatestLetter(
    letters: string[],
    target: string,
): string {
  let left = 0;
  let right = letters.length - 1;

  while (left <= right) {
    let middle = Math.floor((right + left) / 2);

    if (letters[middle] > target) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return letters[left % letters.length];
}
