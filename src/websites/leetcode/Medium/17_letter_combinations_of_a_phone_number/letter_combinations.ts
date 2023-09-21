type PossibleDigits = 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export function letterCombinations(digits: string): string[] {
  const numberToLettersArray = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["q", "p", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };

  const finalArray: string[] = [];

  const formedArrayOfArrays = digits
    .split("")
    .map(
      (stringDigit) =>
        numberToLettersArray[Number(stringDigit) as PossibleDigits],
    );

  function iterateOverOtherNumbers(
    currentString: string,
    leftCombinations: string[][],
  ) {
    if (leftCombinations?.length) {
      const arrayWIthoutCurrentNumbers = [...leftCombinations];

      arrayWIthoutCurrentNumbers.splice(0, 1);

      for (let i = 0; i < leftCombinations[0].length; i++) {
        iterateOverOtherNumbers(
          currentString + leftCombinations[0][i],
          arrayWIthoutCurrentNumbers,
        );
      }
    } else if (currentString !== "") {
      finalArray.push(currentString);
    }
  }

  iterateOverOtherNumbers("", formedArrayOfArrays);

  return finalArray;
}
