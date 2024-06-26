import { TreeNode } from "@/utils/tree-node";

export function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  // if both empty
  if (!p && !q) return true;

  if (!p || !q || p.val !== q.val) return false;

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}
