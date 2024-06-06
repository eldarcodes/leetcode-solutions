/**
  Input: nums = [1,1,1,2,2,3], k = 2
  Output: [1,2]

  Time complexity = O()
  Space complexity = O()
*/
export function topKFrequent(nums: number[], k: number): number[] {
  const bucketMap: number[][] = Array.from(
    { length: nums.length + 1 },
    () => []
  );
  const countMap: Record<number, number> = {};

  for (let n of nums) {
    countMap[n] = 1 + (countMap[n] || 0);
  }

  for (let [n, c] of Object.entries(countMap)) {
    bucketMap[c].push(+n);
  }

  const result: number[] = [];

  for (let i = bucketMap.length - 1; i >= 0; i--) {
    for (let n of bucketMap[i]) {
      result.push(n);

      if (result.length === k) {
        return result;
      }
    }
  }

  return result;
}
