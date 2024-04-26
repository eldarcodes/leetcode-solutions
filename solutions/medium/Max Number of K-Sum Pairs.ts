/**
  Input: nums = [1,2,3,4], k = 5
  Output: 2

  Time complexity = O(n)
  Space complexity = O(n)
*/
export function maxOperations(nums: number[], k: number): number {
  const map: { [key: number]: number } = {};
  let operations = 0;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    const result = k - num;

    if (map[result] && map[result] > 0) {
      operations++;

      map[result]--;
    } else {
      if (map[num]) {
        map[num]++;
      } else {
        map[num] = 1;
      }
    }
  }

  return operations;
}
