import { TreeNode } from "@/utils/tree-node";

/**
  Input: root = [1,7,0,7,-8,null,null]
  Output: 2

  Time complexity = O(n)
  Space complexity = O(n)
*/
export function maxLevelSum(root: TreeNode | null): number {
  if (!root) return 0;

  const queue: TreeNode[] = [];
  queue.push(root);

  let level = 1;
  let maxLevel = 1;
  let maxSum = root.val;

  while (queue.length > 0) {
    const size = queue.length;

    let levelSum = 0;

    for (let i = 0; i < size; i++) {
      let node = queue.shift()!;

      levelSum += node.val;

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    if (levelSum > maxSum) {
      maxSum = levelSum;
      maxLevel = level;
    }

    level++;
  }

  return maxLevel;
}
