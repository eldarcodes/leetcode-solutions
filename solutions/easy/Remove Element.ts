/**
  Input: nums = [0,1,2,2,3,0,4,2], val = 2
  Output: 5, nums = [0,1,4,0,3,_,_,_]

  Time complexity = O(n)
  Space complexity = O(1)
*/
export function removeElement(nums: number[], val: number): number {
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] !== val) {
      nums[left] = nums[right];
      left += 1;
    }
  }

  return left;
}
