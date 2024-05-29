/**
  Input: nums = [1,2,3,1]
  Output: 4

  Time complexity = O(n)
  Space complexity = O(1)
*/
export function rob(nums: number[]): number {
  let max1 = 0;
  let max2 = 0;

  for (let n of nums) {
    const temp = Math.max(n + max1, max2);
    max1 = max2;
    max2 = temp;
  }

  return max2;
}
