// Divide and conquer ts

export default function longestSubstring(s: string, k: number): number {
  const dnc = (start, end) => {
    if (end < k) return 0;

    //Build the countMap with the frequency of each character in the string s.
    let countMap = {};
    for (let char of s.substring(start, end).split("")) {
      if (!countMap[char]) countMap[char] = 0;
      countMap[char]++;
    }

    //Find the position for mid index by iterating over the string. The mid index would be the first invalid character in the string.
    for (let mid = start; mid < end; mid++) {
      if (countMap[s[mid]] >= k) continue;
      let midNext = mid + 1;
      while (countMap[s[midNext]] < k && midNext < end) midNext++;

      //Split the string into 2 substrings at the mid index and recursively find the result.
      return Math.max(dnc(start, mid), dnc(midNext, end));
    }
    return end - start;
  };

  return dnc(0, s.length);
}
