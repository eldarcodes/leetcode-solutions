export function permute(nums: number[]): number[][] {
  const result: number[][] = [];

  if (nums.length === 1) {
    return [nums];
  }

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    const rest = nums.slice(0, i).concat(nums.slice(i + 1));

    const permutations = permute(rest);

    for (const permutation of permutations) {
      permutation.unshift(current);
      result.push(permutation);
    }
  }

  return result;
}
