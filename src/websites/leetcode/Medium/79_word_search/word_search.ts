// Backtracking solution
export function exist(board: string[][], word: string): boolean {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === word[0]) {
        if (traverse(board, i, j, word)) {
          return true;
        }
      }
    }
  }

  function traverse(board, i, j, word) {
    if (word.length === 0) return true;

    if (
      i < 0 ||
      i >= board.length ||
      j < 0 ||
      j >= board[0].length ||
      board[i][j] !== word[0]
    ) {
      return false;
    }

    const originalValue = board[i][j];

    const isVisitedFlag = true;
    board[i][j] = isVisitedFlag;

    const match =
      traverse(board, i + 1, j, word.substring(1)) ||
      traverse(board, i - 1, j, word.substring(1)) ||
      traverse(board, i, j - 1, word.substring(1)) ||
      traverse(board, i, j + 1, word.substring(1));

    board[i][j] = originalValue;

    return match;
  }

  return false;
}
