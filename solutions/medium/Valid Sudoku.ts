/**
  Input: board = 
  [["5","3",".",".","7",".",".",".","."]
  ,["6",".",".","1","9","5",".",".","."]
  ,[".","9","8",".",".",".",".","6","."]
  ,["8",".",".",".","6",".",".",".","3"]
  ,["4",".",".","8",".","3",".",".","1"]
  ,["7",".",".",".","2",".",".",".","6"]
  ,[".","6",".",".",".",".","2","8","."]
  ,[".",".",".","4","1","9",".",".","5"]
  ,[".",".",".",".","8",".",".","7","9"]]
  Output: true

  Time complexity = O(n^2)
  Space complexity = O(n^2)
*/
export function isValidSudoku(board: string[][]): boolean {
  const rows: Set<string>[] = [];
  const cols: Set<string>[] = [];
  const squares: Set<string>[] = [];

  for (let i = 0; i < 9; i++) {
    rows.push(new Set());
    cols.push(new Set());
    squares.push(new Set());
  }

  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      const current = board[row][col];

      if (current === ".") continue;

      const k = Math.floor(row / 3) * 3 + Math.floor(col / 3);

      if (
        rows[row].has(current) ||
        cols[col].has(current) ||
        squares[k].has(current)
      ) {
        return false;
      }

      rows[row].add(current);
      cols[col].add(current);
      squares[k].add(current);
    }
  }
  return true;
}
