export function spiralOrder(matrix: number[][]): number[] {
  const result: number[] = [];

  const rows = matrix.length;
  if (rows === 0) {
    return result;
  }

  const columns = matrix[0].length;
  if (columns === 0) {
    return result;
  }

  let direction = 0;
  let topCropped = 0;
  let leftCropped = 0;
  let bottomCropped = rows - 1;
  let rightCropped = columns - 1;

  while (topCropped <= bottomCropped && leftCropped <= rightCropped) {
    if (direction === 0) {
      for (let i = leftCropped; i <= rightCropped; i++) {
        result.push(matrix[topCropped][i]);
      }
      topCropped++;
    } else if (direction === 1) {
      for (let i = topCropped; i <= bottomCropped; i++) {
        result.push(matrix[i][rightCropped]);
      }
      rightCropped--;
    } else if (direction === 2) {
      for (let i = rightCropped; i >= leftCropped; i--) {
        result.push(matrix[bottomCropped][i]);
      }
      bottomCropped--;
    } else if (direction === 3) {
      for (let i = bottomCropped; i >= topCropped; i--) {
        result.push(matrix[i][leftCropped]);
      }
      leftCropped++;
    }
    direction = (direction + 1) % 4;
  }

  return result;
}
