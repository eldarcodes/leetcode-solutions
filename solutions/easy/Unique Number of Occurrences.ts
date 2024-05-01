/**
  Input: arr = [1,2,2,1,1,3]
  Output: true

  Time complexity = O(n)
  Space complexity = O(n)
*/
export function uniqueOccurrences(nums: number[]): boolean {
  const map = new Map<number, number>();

  for (const num of nums) {
    const current = map.get(num);

    if (current) {
      map.set(num, current + 1);
    } else {
      map.set(num, 1);
    }
  }

  const uniq = new Set(map.values());

  return map.size === uniq.size;
}
