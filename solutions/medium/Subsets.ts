export function subsets(nums: number[]): number[][] {
  const result: number[][] = [];

  const subset: number[] = [];

  function dfs(index: number) {
    if (index >= nums.length) {
      result.push([...subset]);
      return;
    }

    subset.push(nums[index]);
    dfs(index + 1);

    subset.pop();
    dfs(index + 1);
  }

  dfs(0);

  return result;
}
