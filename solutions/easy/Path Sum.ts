import { TreeNode } from "@/shared/types";

export function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  const dfs = (node: TreeNode | null, currentSum: number): boolean => {
    if (node === null) {
      return false;
    }

    currentSum += node.val;

    if (!node.left && !node.right) {
      return currentSum === targetSum;
    }

    return dfs(node.left, currentSum) || dfs(node.right, currentSum);
  };

  return dfs(root, 0);
}
