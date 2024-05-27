/*
  Input: n = 6, connections = [[0,1],[1,3],[2,3],[4,0],[4,5]]
  Output: 3

  Time complexity = O(n)
  Space complexity = O(n)
*/
export function minReorder(n: number, connections: number[][]): number {
  const adjList: Record<number, number[]> = {};
  const roads = new Set();
  let result = 0;

  for (const [from, to] of connections) {
    if (!adjList[from]) adjList[from] = [];
    if (!adjList[to]) adjList[to] = [];

    adjList[from].push(to);
    adjList[to].push(from);

    roads.add(`${from}-${to}`);
  }

  function dfs(node: number, parent: number): number {
    result += roads.has(`${parent}-${node}`) ? 1 : 0;

    for (const neighbor of adjList[node]) {
      if (neighbor === parent) continue;

      dfs(neighbor, node);
    }

    return result;
  }

  dfs(0, -1);

  return result;
}
