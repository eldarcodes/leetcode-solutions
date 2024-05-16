import { TreeNode } from "@/utils/tree-node";

/**
  Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
  Output: [[5,4,11,2],[5,8,4,5]]

  Time complexity = O(n)
  Space complexity = O(n)
*/
export function pathSum(root: TreeNode | null, targetSum: number): number[][] {
  if (!root) return [];

  const result: number[][] = [];

  function dfs(node: TreeNode, path: number[]) {
    const currentPath = [...path, node.val];
    const currentSum = currentPath.reduce((acc, curr) => (acc += curr), 0);

    if (node.left) dfs(node.left, currentPath);
    if (node.right) dfs(node.right, currentPath);

    if (!node.left && !node.right && currentSum === targetSum) {
      result.push(currentPath);
    }
  }

  dfs(root, []);

  return result;
}
