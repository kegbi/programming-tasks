// Rotate groups of 4 elements
// export function rotate(matrix: number[][]): void {
//   const length = matrix[0].length;
//   for (let i = 0; i < Math.floor(length / 2) + (length % 2); i++) {
//     for (let j = 0; j < Math.floor(length / 2); j++) {
//       const temp = matrix[length - 1 - j][i];
//       matrix[length - 1 - j][i] = matrix[length - 1 - i][length - j - 1];
//       matrix[length - 1 - i][length - j - 1] = matrix[j][length - 1 - i];
//       matrix[j][length - 1 - i] = matrix[i][j];
//       matrix[i][j] = temp;
//     }
//   }
// }

// Transposed and reflected
export function rotate(matrix: number[][]): void {
  transpose(matrix);
  reflect(matrix);

  function transpose(matrix) {
    const length = matrix.length;
    for (let i = 0; i < length; i++) {
      for (let j = i; j < length; j++) {
        const tmp = matrix[i][j];
        matrix[i][j] = matrix[j][i];
        matrix[j][i] = tmp;
      }
    }
  }

  function reflect(matrix) {
    const length = matrix.length;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length / 2; j++) {
        const tmp = matrix[i][j];
        matrix[i][j] = matrix[i][length - j - 1];
        matrix[i][length - j - 1] = tmp;
      }
    }
  }
}
