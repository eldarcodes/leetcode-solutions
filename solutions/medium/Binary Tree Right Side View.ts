import { TreeNode } from "@/utils/tree-node";

/**
  Input: root = [1,2,3,null,5,null,4]
  Output: [1,3,4]

  Time complexity = O(n)
  Space complexity = O(n)
*/
export function rightSideView(root: TreeNode | null): number[] {
  if (!root) return [];

  const result: number[] = [];
  const queue: TreeNode[] = [root];

  while (queue.length) {
    let queueLength = queue.length;
    for (let i = 0; i < queueLength; i++) {
      let node = queue.shift()!;

      if (i === queueLength - 1) {
        result.push(node.val);
      }

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  return result;
}
