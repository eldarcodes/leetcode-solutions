/**
  Input: nums = [2,7,11,15], target = 9
  Output: [0,1]

  Time complexity = O(n)
  Space complexity = O(n)
*/
export const twoSum = (nums: number[], target: number): number[] => {
  const hashMap: Record<PropertyKey, number> = {};

  for (let i = 0; i <= nums.length - 1; i++) {
    const value = target - nums[i];

    if (hashMap[value] !== undefined) {
      return [i, hashMap[value]];
    }

    hashMap[nums[i]] = i;
  }

  return [];
};
