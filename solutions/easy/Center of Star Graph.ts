export function findCenter(edges: number[][]): number {
  const [a, b] = edges[0];
  const [c, d] = edges[1];
  if (a === c || a === d) return a;
  return b;
}
