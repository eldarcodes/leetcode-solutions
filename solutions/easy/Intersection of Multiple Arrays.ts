// Given a 2D integer array nums where nums[i] is a non-empty array of distinct positive integers, return the list of integers that are present in each array of nums sorted in ascending order.
export function intersection(nums: number[][]): number[] {
  const freq = new Array(1001).fill(0);

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums[i].length; j++) {
      freq[nums[i][j]]++;
    }
  }

  const result = [];

  for (let i = 0; i < freq.length; i++) {
    if (freq[i] === nums.length) {
      result.push(i);
    }
  }

  return result;
}
