import { TreeNode } from "@/utils/tree-node";

/**
  Input: root = [1,null,1,1,1,null,null,1,1,null,1,null,null,null,1]
  Output: 3

  Time complexity = O(n)
  Space complexity = O(n)
*/
export function longestZigZag(root: TreeNode | null): number {
  if (!root) return 0;

  const dfs = (
    node: TreeNode | null,
    isLeft: boolean,
    depth: number
  ): number => {
    if (!node) return depth;

    if (isLeft) {
      depth = Math.max(
        depth,
        dfs(node.right, false, depth + 1),
        dfs(node.left, true, 0)
      );
    } else {
      depth = Math.max(
        depth,
        dfs(node.right, false, 0),
        dfs(node.left, true, depth + 1)
      );
    }

    return depth;
  };

  return Math.max(dfs(root.left, true, 0), dfs(root.right, false, 0));
}
