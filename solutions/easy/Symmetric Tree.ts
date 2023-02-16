import { TreeNode } from "@types";

function isMirror(node1: TreeNode | null, node2: TreeNode | null): boolean {
  if (node1 === null && node2 === null) return true;
  if (node1 === null || node2 === null) return false;

  return (
    node1.val === node2.val &&
    isMirror(node1.left, node2.right) &&
    isMirror(node1.right, node2.left)
  );
}

export function isSymmetric(root: TreeNode | null): boolean {
  return isMirror(root, root);
}
