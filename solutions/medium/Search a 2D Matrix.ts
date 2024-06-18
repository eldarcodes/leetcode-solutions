/**
  Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
  Output: true

  Time complexity = O(log(m * n))
  Space complexity = O(n)
*/
export function searchMatrix(matrix: number[][], target: number): boolean {
  const rows = matrix.length;
  const cols = matrix[0].length;

  let top = 0;
  let bottom = rows - 1;

  while (top <= bottom) {
    const row = Math.floor((top + bottom) / 2);

    if (matrix[row][cols - 1] < target) {
      top = row + 1;
    } else if (matrix[row][0] > target) {
      bottom = row - 1;
    } else {
      break;
    }
  }

  if (!(top <= bottom)) {
    return false;
  }

  let rowIndex = Math.floor((top + bottom) / 2);

  let leftIndex = 0;
  let rightIndex = cols - 1;

  while (leftIndex <= rightIndex) {
    let midIndex = Math.floor((leftIndex + rightIndex) / 2);

    if (matrix[rowIndex][midIndex] > target) {
      rightIndex = midIndex - 1;
    } else if (matrix[rowIndex][midIndex] < target) {
      leftIndex = midIndex + 1;
    } else {
      return true;
    }
  }

  return false;
}
