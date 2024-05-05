// Bruteforce without optimizations (timing out)
// export function longestPalindrome(s: string): string {
//   function isPalindrom(string: string) {
//     const reversedString = string.split("").reverse().join("");
//
//     return string === reversedString;
//   }
//
//   const maximumSubstring = {
//     length: 0,
//     string: "",
//   };
//
//   const initialStringArray = s.split("");
//
//   function checkString(passedIndex: number, currentString: string) {
//     const newString = currentString + initialStringArray[passedIndex];
//
//     if (maximumSubstring.length < newString.length && isPalindrom(newString)) {
//       maximumSubstring.length = newString.length;
//       maximumSubstring.string = newString;
//     }
//
//     if (passedIndex < initialStringArray.length) {
//       checkString(passedIndex + 1, newString);
//     }
//   }
//
//   for (let i = 0; i < initialStringArray.length; i++) {
//     checkString(i, "");
//   }
//
//   return maximumSubstring.string;
// }

// DP
export function longestPalindrome(s: string): string {
  let longestPalindrome = "";

  function expandAroundCenter(left: number, right: number): string {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return s.substring(left + 1, right);
  }

  for (let i = 0; i < s.length; i++) {
    const odd = expandAroundCenter(i, i);
    const even = expandAroundCenter(i, i + 1);

    if (odd.length > longestPalindrome.length) {
      longestPalindrome = odd;
    }

    if (even.length > longestPalindrome.length) {
      longestPalindrome = even;
    }
  }

  return longestPalindrome;
}
