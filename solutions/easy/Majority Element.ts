export function majorityElement(nums: number[]): number {
  const map = new Map<number, number>();
  const half = nums.length / 2;

  for (const num of nums) {
    const count = (map.get(num) || 0) + 1;
    if (count > half) {
      return num;
    }

    map.set(num, count);
  }

  return -1;
}
