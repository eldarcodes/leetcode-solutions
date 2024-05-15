import { TreeNode } from "@/shared/types";

/**
  Input: root = [3,1,4,3,null,1,5]
  Output: 4

  Time complexity = O(n)
  Space complexity = O(n)
*/
const dfs = (root: TreeNode | null, max: number): number => {
  if (!root) return 0;

  let result = root.val >= max ? 1 : 0;
  max = Math.max(max, root.val);

  result += dfs(root.left, max);
  result += dfs(root.right, max);

  return result;
};

export function goodNodes(root: TreeNode | null): number {
  if (!root) return 0;

  return dfs(root, root.val);
}
