import { TreeNode } from "@/utils/tree-node";
/**
  Input: root = [4,2,7,1,3], val = 2
  Output: [2,1,3]

  Time complexity = O(n)
  Space complexity = O(1)
*/
export function searchBST(root: TreeNode | null, val: number): TreeNode | null {
  if (!root) return null;

  let node: TreeNode | null = root;

  while (node) {
    if (node.val === val) {
      return node;
    } else if (val > node.val) {
      node = node.right;
    } else {
      node = node.left;
    }
  }

  return node;
}
