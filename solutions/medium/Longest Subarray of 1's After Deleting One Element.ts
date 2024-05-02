/**
  Input: nums = [0,1,1,1,0,1,1,0,1]
  Output: 5 

  Time complexity = O(n)
  Space complexity = O(1)
*/
export function longestSubarray(nums: number[]): number {
  let left = 0;
  let zeroCount = 0;

  let result = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) {
      zeroCount++;
    }

    while (zeroCount > 1) {
      if (nums[left] === 0) {
        zeroCount--;
      }
      left++;
    }

    result = Math.max(result, right - left);
  }

  return result;
}
