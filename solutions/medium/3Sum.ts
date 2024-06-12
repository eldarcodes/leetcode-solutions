/**
  Input: nums = [-1,0,1,2,-1,-4]
  Output: [[-1,-1,2],[-1,0,1]]

  Time complexity = O(n^2)
  Space complexity = O(n)
*/
export function threeSum(nums: number[]): number[][] {
  const result: number[][] = [];

  const sorted = nums.sort((a, b) => a - b);

  for (let i = 0; i < sorted.length; i++) {
    const value = sorted[i];

    if (i > 0 && value === sorted[i - 1]) {
      continue;
    }

    let left = i + 1;
    let right = sorted.length - 1;

    while (left < right) {
      let sum = value + sorted[left] + sorted[right];

      if (sum > 0) {
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        result.push([value, sorted[left], sorted[right]]);

        left++;

        while (sorted[left] === sorted[left - 1] && left < right) {
          left++;
        }
      }
    }
  }

  return result;
}
