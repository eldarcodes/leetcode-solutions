import { TreeNode } from "@/utils/tree-node";

export function isBalanced(root: TreeNode | null): boolean {
  if (root === null) return true;

  const maxDepth = (root: TreeNode | null): number => {
    if (root === null) return 0;

    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
  };

  const left = maxDepth(root.left);
  const right = maxDepth(root.right);

  return (
    Math.abs(left - right) <= 1 &&
    isBalanced(root.left) &&
    isBalanced(root.right)
  );
}
