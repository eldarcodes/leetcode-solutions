import { TreeNode } from "@/utils/tree-node";

export function minDepth(root: TreeNode | null): number {
  if (root === null) return 0;

  if (root.left === null && root.right === null) return 1;

  const leftDepth = root.left !== null ? minDepth(root.left) : Infinity;
  const rightDepth = root.right !== null ? minDepth(root.right) : Infinity;

  return 1 + Math.min(leftDepth, rightDepth);
}
