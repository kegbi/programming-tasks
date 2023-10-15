export function generateAbbreviations(word: string): string[] {
  const res: string[] = [];
  helper(res, "", word, 0, 0);
  return res;
}

function helper(
  res: string[],
  curr: string,
  word: string,
  pos: number,
  cnt: number,
): void {
  if (pos === word.length) {
    if (cnt > 0) {
      curr += cnt;
    }
    res.push(curr);
  } else {
    helper(res, curr, word, pos + 1, cnt + 1);
    helper(
      res,
      curr + (cnt > 0 ? cnt : "") + word.charAt(pos),
      word,
      pos + 1,
      0,
    );
  }
}
