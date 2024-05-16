import { TreeNode } from "@/utils/tree-node";

/**
  Input: root1 = [3,5,1,6,2,9,8,null,null,7,4], root2 = [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]
  Output: true

  Time complexity = O(n)
  Space complexity = O(n)
*/

const dfs = (root: TreeNode | null, leaf: number[]): void => {
  if (!root) return;

  if (!root.left && !root.right) {
    leaf.push(root.val);

    return;
  }

  dfs(root.left, leaf);
  dfs(root.right, leaf);
};

export function leafSimilar(
  root1: TreeNode | null,
  root2: TreeNode | null
): boolean {
  const leaf1: number[] = [];
  const leaf2: number[] = [];

  dfs(root1, leaf1);
  dfs(root2, leaf2);

  if (leaf1.length !== leaf2.length) return false;

  for (let i in leaf1) {
    if (leaf1[i] !== leaf2[i]) {
      return false;
    }
  }

  return true;
}
