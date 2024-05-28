import { TreeNode } from "@/utils/tree-node";

/**
  Input: root = [2,1,3]
  Output: true

  Time complexity = O(n)
  Space complexity = O(n)
*/
export function isValidBST(root: TreeNode | null): boolean {
  if (!root) return false;

  return validateBST(root, null, null);
}

function validateBST(
  node: TreeNode | null,
  left: number | null,
  right: number | null
): boolean {
  if (!node) return true;

  if ((left && node.val <= left) || (right && node.val >= right)) {
    return false;
  }

  return (
    validateBST(node.left, left, node.val) &&
    validateBST(node.right, node.val, right)
  );
}
