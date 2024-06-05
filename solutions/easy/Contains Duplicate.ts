export function containsDuplicate(nums: number[]): boolean {
  const hash = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (hash.has(nums[i])) {
      return true;
    }

    hash.add(nums[i]);
  }

  return false;
}
