/**
  Input: nums1 = [1,2,3], nums2 = [2,4,6]
  Output: [[1,3],[4,6]]

  Time complexity = O(n)
  Space complexity = O(n)
*/
export function findDifference(nums1: number[], nums2: number[]): number[][] {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  const uniqNums1 = Array.from(set1).filter((num) => !set2.has(num));
  const uniqNums2 = Array.from(set2).filter((num) => !set1.has(num));

  return [uniqNums1, uniqNums2];
}
