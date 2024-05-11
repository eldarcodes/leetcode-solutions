/**
  Input: n = 5
  Output: [0,1,1,2,1,2]

  Time complexity = O(n)
  Space complexity = O(n)
*/
export function countBits(n: number): number[] {
  const result: number[] = [];

  for (let i = 0; i <= n; i++) {
    const a = (i >>> 0)
      .toString(2)
      .split("")
      .filter((i) => i === "1");

    result.push(a.length);
  }

  return result;
}
