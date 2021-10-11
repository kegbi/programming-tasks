// Some kind of recursion solution
export function letterCasePermutation(s: string): string[] {
  const result: Array<string> = [];

  const checkLettersSequence = (letters, currentLetterIndex) => {
    const newLetters = [...letters];
    if (!letters[currentLetterIndex]) {
      const newWord = newLetters.join("");
      result.push(newWord);
    } else {
      if (isNaN(letters[currentLetterIndex])) {
        newLetters[currentLetterIndex] =
          newLetters[currentLetterIndex].toLowerCase();
        checkLettersSequence(newLetters, currentLetterIndex + 1);

        newLetters[currentLetterIndex] =
          newLetters[currentLetterIndex].toUpperCase();
        checkLettersSequence(newLetters, currentLetterIndex + 1);
      } else {
        currentLetterIndex++;
        checkLettersSequence(newLetters, currentLetterIndex);
      }
    }
  };

  checkLettersSequence(s.split(""), 0);

  return result;
}
