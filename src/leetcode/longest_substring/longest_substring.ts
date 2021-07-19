export default function lengthOfLongestSubstring(s: string): number {
  function getPreviousElementIndex(
    splittedString: string[],
    element: string,
    currentIndex: number
  ): number {
    for (let i = currentIndex - 1; i != -1; i--) {
      if (splittedString[i] === splittedString[currentIndex]) {
        return i + 1;
      }
    }
  }

  if (s === "") {
    return 0;
  } else {
    const splittedString = s.split("");
    let longestString: string[] = [];
    let maxLength: number = 0;
    let currentLength = 0;

    for (let index = 0; index < splittedString.length; index++) {
      if (longestString.includes(splittedString[index])) {
        currentLength = longestString.length;
        if (maxLength < currentLength) {
          maxLength = currentLength;
        }
        longestString = [];

        index =
          getPreviousElementIndex(
            splittedString,
            splittedString[index],
            index
          ) - 1;
      } else {
        longestString.push(splittedString[index]);
      }
    }
    return maxLength > longestString.length ? maxLength : longestString.length;
  }
}
