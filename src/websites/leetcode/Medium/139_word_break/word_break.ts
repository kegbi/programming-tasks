// Recursion
// export function wordBreak(s: string, wordDict: string[]): boolean {
//   const stringCache: { [key: string]: boolean } = {};
//
//   function checkNewString(passedString: string): boolean {
//     if (passedString in stringCache) {
//       return stringCache[passedString];
//     }
//
//     if (passedString === s) {
//       stringCache[passedString] = true;
//       return true;
//     }
//
//     if (passedString.length > s.length) {
//       stringCache[passedString] = false;
//       return false;
//     }
//
//     if (stringCache[passedString] !== undefined) {
//       return stringCache[passedString];
//     }
//
//     for (let i = 0; i < wordDict.length; i++) {
//       const newString = passedString + wordDict[i];
//
//       if (s.startsWith(newString)) {
//         if (checkNewString(passedString + wordDict[i])) {
//           stringCache[passedString] = true;
//           return true;
//         }
//       }
//     }
//
//     stringCache[passedString] = false;
//     return false;
//   }
//
//   return checkNewString("");
// }

// Dynamic Programming
export function wordBreak(s: string, wordDict: string[]): boolean {
  const dp: boolean[] = new Array(s.length + 1).fill(false);
  dp[s.length] = true;

  for (let i = s.length - 1; i >= 0; i--) {
    for (const w of wordDict) {
      if (i + w.length <= s.length && s.substring(i, i + w.length) === w) {
        dp[i] = dp[i + w.length];
      }
      if (dp[i]) {
        break;
      }
    }
  }

  return dp[0];
}
