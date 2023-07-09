export function partition(s: string): string[][] {
  const results: string[][] = [];

  function isStringPalindrome(string: string): boolean {
    const lowercaseStr = string.toLowerCase();

    const reverseStr = lowercaseStr.split("").reverse().join("");

    return lowercaseStr === reverseStr;
  }

  function backtrack(start: number, currentPartition: string[]) {
    if (start === s.length) {
      results.push([...currentPartition]);
      return;
    }

    for (let i = start; i < s.length; i++) {
      const substring = s.substring(start, i + 1);
      if (isStringPalindrome(substring)) {
        currentPartition.push(substring);

        backtrack(i + 1, currentPartition);

        currentPartition.pop();
      }
    }
  }

  backtrack(0, []);

  return results;
}
