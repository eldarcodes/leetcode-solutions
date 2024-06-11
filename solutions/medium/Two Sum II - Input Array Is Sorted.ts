/**
  Input: numbers = [2,7,11,15], target = 9
  Output: [1,2]

  Time complexity = O(n)
  Space complexity = O(1)
*/
export function twoSum(numbers: number[], target: number): number[] {
  let left = 0;
  let right = numbers.length - 1;

  while (left <= right) {
    let sum = numbers[left] + numbers[right];

    if (sum > target) {
      right--;
    } else if (sum < target) {
      left++;
    } else {
      return [left + 1, right + 1];
    }
  }

  return [];
}
