class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

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
