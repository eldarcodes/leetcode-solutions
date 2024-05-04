/**
  Input: grid = [[3,2,1],[1,7,6],[2,7,7]]
  Output: 1

  Time complexity = O(n^2)
  Space complexity = O(n^2)
*/
export function equalPairs(grid: number[][]): number {
  const n = grid.length;

  const rows = new Array(n);
  const columns = new Array(n);

  for (let i = 0; i < n; i++) {
    rows[i] = grid[i].join(",");
  }

  for (let j = 0; j < n; j++) {
    const column = [];
    for (let i = 0; i < n; i++) {
      column.push(grid[i][j]);
    }
    columns[j] = column.join(",");
  }

  let result = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (rows[i] === columns[j]) {
        result++;
      }
    }
  }

  return result;
}
