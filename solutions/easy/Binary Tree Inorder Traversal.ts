import { TreeNode } from "@types";

export function inorderTraversal(root: TreeNode | null): number[] {
  const result: number[] = [];

  const inorder = (root: TreeNode | null) => {
    if (!root) return;

    inorder(root.left);
    result.push(root.val);
    inorder(root.right);
  };

  inorder(root);

  return result;
}
