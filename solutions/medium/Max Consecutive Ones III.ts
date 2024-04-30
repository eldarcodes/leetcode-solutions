/**
  Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
  Output: 6

  Time complexity = O(n)
  Space complexity = O(1)
*/
export function longestOnes(nums: number[], k: number): number {
  let left = 0;
  let result = 0;
  let zeroCount = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) {
      zeroCount++;
    }

    while (zeroCount > k) {
      if (nums[left] === 0) {
        zeroCount--;
      }
      left++;
    }

    result = Math.max(result, right - left + 1);
  }

  return result;
}
