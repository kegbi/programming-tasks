// First solution

// export default function lengthOfLongestSubstring(s: string): number {
//   function getPreviousElementIndex(
//     splittedString: string[],
//     element: string,
//     currentIndex: number
//   ): number {
//     for (let i = currentIndex - 1; i != -1; i--) {
//       if (splittedString[i] === splittedString[currentIndex]) {
//         return i + 1;
//       }
//     }
//   }
//
//   if (s === "") {
//     return 0;
//   } else {
//     const splittedString = s.split("");
//     let longestString: string[] = [];
//     let maxLength: number = 0;
//     let currentLength = 0;
//
//     for (let index = 0; index < splittedString.length; index++) {
//       if (longestString.includes(splittedString[index])) {
//         currentLength = longestString.length;
//         if (maxLength < currentLength) {
//           maxLength = currentLength;
//         }
//         longestString = [];
//
//         index =
//           getPreviousElementIndex(
//             splittedString,
//             splittedString[index],
//             index
//           ) - 1;
//       } else {
//         longestString.push(splittedString[index]);
//       }
//     }
//     return maxLength > longestString.length ? maxLength : longestString.length;
//   }
// }

// Stealed sliding window solution, which was worse in time efficiency, than my first garbage solution

// export default function lengthOfLongestSubstring(s: string): number {
//   let leftWindow: number = 0;
//   let longest: number = 0;
//   const charHashTable = {};
//
//   for (let rightWindow = 0; rightWindow < s.length; ) {
//     if (!charHashTable[s[rightWindow]]) {
//       charHashTable[s[rightWindow]] = 0;
//     }
//
//     charHashTable[s[rightWindow]]++;
//
//     if (Object.values(charHashTable).some((element) => element > 1)) {
//       charHashTable[s[leftWindow]]--;
//       leftWindow++;
//     }
//
//     longest = Math.max(longest, rightWindow - leftWindow + 1);
//     rightWindow++;
//   }
//
//   return longest;
// }

// Stealed solution with reduce and much better time, added comments while understanding, what happened here, lol

interface InitialValue {
  previousLetters: string;
  longestCount: number;
}

const initialValue = {
  previousLetters: "",
  longestCount: 0,
};

const getLongestSubstring = (
  { previousLetters, longestCount }: InitialValue,
  currentLetter: string
) => {
  // Checking if we already have letter, equal to our current
  const repeatedIndex = previousLetters.indexOf(currentLetter);
  /* If index is higher than -1 (letter is found), we either find latest used point without recurring character,
  or just add the current letter, which we are checking right now to our string if it's not recurred */
  const currentLetters =
    repeatedIndex > -1
      ? previousLetters.substring(repeatedIndex + 1) + currentLetter
      : previousLetters + currentLetter;

  //Return current calculated letters and change the longest count if our current is better than the stored one
  return {
    previousLetters: currentLetters,
    longestCount:
      currentLetters.length > longestCount
        ? currentLetters.length
        : longestCount,
  };
};

export default function lengthOfLongestSubstring(s: string): number {
  const result = s.split("").reduce(getLongestSubstring, initialValue);
  return result.longestCount;
}
