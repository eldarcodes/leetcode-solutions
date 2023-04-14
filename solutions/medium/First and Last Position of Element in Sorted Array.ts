function binarySearch(nums: number[], target: number, leftBound: boolean) {
  let left = 0;
  let right = nums.length - 1;

  let index = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (target > nums[mid]) {
      left = mid + 1;
    } else if (target < nums[mid]) {
      right = mid - 1;
    } else {
      index = mid;
      if (leftBound) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  }

  return index;
}

export function searchRange(nums: number[], target: number): number[] {
  const leftIndex = binarySearch(nums, target, true);
  const rightIndex = binarySearch(nums, target, false);

  return [leftIndex, rightIndex];
}
