import { TreeNode } from "@types";

export function postorderTraversal(root: TreeNode | null): number[] {
  if (root === null) return [];

  return [
    ...postorderTraversal(root.left),
    ...postorderTraversal(root.right),
    root.val,
  ];
}
