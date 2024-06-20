/**
  Input: nums = [4,5,6,7,0,1,2], target = 0
  Output: 4

  Time complexity = O(log n)
  Space complexity = O(1)
*/
export function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (target === nums[mid]) {
      return mid;
    }

    if (nums[left] <= nums[mid]) {
      if (target > nums[mid] || target < nums[left]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    } else {
      // we are in the right sorted portion
      if (target < nums[mid] || target > nums[right]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  }

  return -1;
}
