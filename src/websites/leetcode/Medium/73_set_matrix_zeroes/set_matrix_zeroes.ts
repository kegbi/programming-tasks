// O(R*C) time, O(R*C) space (R - number of rows, C - number of columns)
// export function setZeroes(matrix: number[][]): void {
//   interface zeroesIndexes {
//     matrixZeroedIndexes: Set<number>;
//     numbersZeroedIndexes: Set<number>;
//   }
//
//   const zeroesIndexes: zeroesIndexes = {
//     matrixZeroedIndexes: new Set(),
//     numbersZeroedIndexes: new Set(),
//   };
//
//   function saveIndexesIntoHashmap(matrixIndex: number, elementIndex: number) {
//     zeroesIndexes.matrixZeroedIndexes.add(matrixIndex);
//     zeroesIndexes.numbersZeroedIndexes.add(elementIndex);
//   }
//
//   matrix.forEach((matrix, matrixIndex) => {
//     matrix.forEach((element, elementIndex) => {
//       if (element === 0) {
//         saveIndexesIntoHashmap(matrixIndex, elementIndex);
//       }
//     });
//   });
//
//   matrix.forEach((matrix, matrixIndex) => {
//     if (zeroesIndexes.matrixZeroedIndexes.has(matrixIndex)) {
//       matrix.fill(0);
//     } else {
//       matrix.forEach((element, elementIndex) => {
//         if (zeroesIndexes.numbersZeroedIndexes.has(elementIndex)) {
//           matrix[elementIndex] = 0;
//         }
//       });
//     }
//   });
// }

// O(R*C) time, O(1) space (R - number of rows, C - number of columns)
export function setZeroes(matrix: number[][]): void {
  let isFirstColumnGonnaBeZeroed = false;
  const rowsQuantity = matrix.length;
  const columnsQuantity = matrix[0].length;

  for (let i = 0; i < rowsQuantity; i++) {
    if (matrix[i][0] === 0) {
      isFirstColumnGonnaBeZeroed = true;
    }

    for (let j = 1; j < columnsQuantity; j++) {
      if (matrix[i][j] === 0) {
        matrix[0][j] = 0;
        matrix[i][0] = 0;
      }
    }
  }

  for (let i = 1; i < rowsQuantity; i++) {
    for (let j = 1; j < columnsQuantity; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }

  if (matrix[0][0] === 0) {
    for (let j = 0; j < columnsQuantity; j++) {
      matrix[0][j] = 0;
    }
  }

  if (isFirstColumnGonnaBeZeroed) {
    for (let i = 0; i < rowsQuantity; i++) {
      matrix[i][0] = 0;
    }
  }
}
