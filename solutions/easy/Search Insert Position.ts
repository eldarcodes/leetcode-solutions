export const searchInsert = (nums: number[], target: number): number => {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    console.log({ mid: nums[mid] });

    // if k is found
    if (target > nums[mid]) {
      start = mid + 1;
    } else if (target < nums[mid]) {
      end = mid - 1;
    } else {
      return mid;
    }
  }

  return start;
};