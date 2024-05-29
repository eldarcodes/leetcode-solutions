/**
  Input: n = 5 
  Output: 8 

  Time complexity = O(n)
  Space complexity = O(1)
*/
export function climbStairs(n: number): number {
  let prev = 1;
  let current = 1;

  for (let i = 0; i < n - 1; i++) {
    const temp = current;
    current += prev;
    prev = temp;
  }

  return current;
}
