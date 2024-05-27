/**
  Input: nums = [1,2,3,1]
  Output: 2

  Time complexity = O(log n)
  Space complexity = O(1)
*/
export function findPeakElement(nums: number[]): number {
  let leftIndex = 0;
  let rightIndex = nums.length - 1;

  while (leftIndex <= rightIndex) {
    let midIndex = leftIndex + Math.floor((rightIndex - leftIndex) / 2);

    if (midIndex > 0 && nums[midIndex] < nums[midIndex - 1]) {
      rightIndex = midIndex - 1;
    } else if (
      midIndex < nums.length - 1 &&
      nums[midIndex] < nums[midIndex + 1]
    ) {
      leftIndex = midIndex + 1;
    } else {
      return midIndex;
    }
  }

  return 0;
}
