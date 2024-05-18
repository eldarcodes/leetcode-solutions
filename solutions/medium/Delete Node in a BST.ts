import { TreeNode } from "@/utils/tree-node";

/**
  Input: root = [5,3,6,2,4,null,7], key = 3
  Output: [5,4,6,2,null,null,7]

  Time complexity = O(n)
  Space complexity = O(n)
*/
export function deleteNode(
  root: TreeNode | null,
  key: number
): TreeNode | null {
  if (!root) return null;

  if (key > root.val) {
    root.right = deleteNode(root.right, key);
  } else if (key < root.val) {
    root.left = deleteNode(root.left, key);
  } else {
    if (!root.left) return root.right;
    else if (!root.right) return root.left;

    let min = root.right;
    while (min.left) {
      min = min.left;
    }

    root.val = min.val;

    root.right = deleteNode(root.right, root.val);
  }

  return root;
}
