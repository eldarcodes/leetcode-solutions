/**
  Input: nums = [0,0,1,1,1,2,2,3,3,4]
  Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]

  Time complexity = O(n)
  Space complexity = O(1)
*/
export function removeDuplicates(nums: number[]): number {
  let left = 1;

  for (let right = 1; right < nums.length; right++) {
    if (nums[right] !== nums[right - 1]) {
      nums[left] = nums[right];
      left += 1;
    }
  }

  return left;
}
