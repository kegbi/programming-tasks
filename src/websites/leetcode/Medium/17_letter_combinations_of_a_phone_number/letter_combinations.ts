type PossibleDigits = "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";

export function letterCombinations(digits: string): string[] {
  if (digits.length === 0) {
    return [];
  }

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

  const combinations: string[] = [];
  const backtrack = (index: number, current: string) => {
    if (index === digits.length) {
      combinations.push(current);
      return;
    }

    const digit = digits[index];
    const letters = numberToLettersArray[digit as PossibleDigits];

    for (const letter of letters) {
      backtrack(index + 1, current + letter);
    }
  };

  backtrack(0, "");
  return combinations;
}
