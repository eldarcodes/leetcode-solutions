/**
  Input: nums = [3,4,5,1,2]
  Output: 1

  Time complexity = O(log n)
  Space complexity = O(1)
*/
export function findMin(nums: number[]): number {
  let result = nums[0];

  let leftIndex = 0;
  let rightIndex = nums.length - 1;

  while (leftIndex <= rightIndex) {
    if (nums[leftIndex] < nums[rightIndex]) {
      result = Math.min(result, nums[leftIndex]);
      break;
    }

    let midIndex = Math.floor((leftIndex + rightIndex) / 2);
    result = Math.min(result, nums[midIndex]);

    if (nums[midIndex] >= nums[leftIndex]) {
      leftIndex = midIndex + 1;
    } else {
      rightIndex = midIndex - 1;
    }
  }

  return result;
}
