/**
  Input: nums = [-1,0,3,5,9,12], target = 9
  Output: 4

  Time complexity = O(log n)
  Space complexity = O(1)
*/
export function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      return mid;
    }
  }

  return -1;
}
