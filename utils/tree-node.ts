export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

export function createTree(arr: (number | null)[]): TreeNode | null {
  if (arr.length === 0) return null;

  const root = new TreeNode(arr[0]!);
  const queue = [root];
  let index = 1;

  while (index < arr.length) {
    const currentNode = queue.shift()!;
    const leftVal = arr[index++];
    const rightVal = arr[index++];

    if (leftVal !== null && leftVal !== undefined) {
      currentNode.left = new TreeNode(leftVal);
      queue.push(currentNode.left);
    }

    if (rightVal !== null && rightVal !== undefined) {
      currentNode.right = new TreeNode(rightVal);
      queue.push(currentNode.right);
    }
  }

  return root;
}
