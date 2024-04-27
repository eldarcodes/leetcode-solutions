/**
  Input: nums = [1,12,-5,-6,50,3], k = 4
  Output: 12.75000

  Time complexity = O(n)
  Space complexity = O(1)
*/
export function findMaxAverage(nums: number[], k: number): number {
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }

  let startIndex = 0;
  let endIndex = k;

  let maxSum = sum;

  while (endIndex < nums.length) {
    sum -= nums[startIndex];
    startIndex++;

    sum += nums[endIndex];
    endIndex++;

    if (sum > maxSum) {
      maxSum = sum;
    }
  }

  return maxSum / k;
}
