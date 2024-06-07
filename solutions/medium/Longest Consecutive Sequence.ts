/**
  Input: nums = [100,4,200,1,3,2]
  Output: 4

  Time complexity = O(n)
  Space complexity = O(n)
*/
export function longestConsecutive(nums: number[]): number {
  const set = new Set(nums);
  let result = 0;

  for (let num of nums) {
    if (set.has(num - 1)) continue;

    let length = 0;

    while (set.has(num + length)) {
      length += 1;
    }

    result = Math.max(result, length);
  }

  return result;
}
