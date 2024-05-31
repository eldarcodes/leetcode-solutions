/**
  Input: isConnected = [[1,1,0],[1,1,0],[0,0,1]]
  Output: 2

  Time complexity = O()
  Space complexity = O()
*/
export function findCircleNum(isConnected: number[][]): number {
  let totalProvinces = 0;
  const visited = new Set<number>();

  for (let i = 0; i < isConnected.length; i++) {
    const isVisited = visited.has(i);

    if (!isVisited) {
      totalProvinces += dfs(isConnected, visited, i);
    }
  }

  return totalProvinces;
}

function dfs(isConnected: number[][], visited: Set<number>, i: number): number {
  visited.add(i);

  for (let j = 0; j < isConnected.length; j++) {
    if (isConnected[i][j] === 1 && !visited.has(j)) {
      dfs(isConnected, visited, j);
    }
  }

  return 1;
}
