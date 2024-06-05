/**
  Input: a = 2, b = 3
  Output: 5

  Time complexity = O(1)
  Space complexity = O(1)
*/
export function getSum(a: number, b: number): number {
  while (b) {
    let temp = (a & b) << 1;
    a = a ^ b;
    b = temp;
  }

  return a;
}
