import { TreeNode } from "@/utils/tree-node";

/**
  Input: root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8
  Output: 3

  Time complexity = O(n)
  Space complexity = O(n)
*/
export function pathSum(root: TreeNode | null, targetSum: number): number {
  if (!root) return 0;

  let map = new Map<number, number>();
  map.set(0, 1);

  function dfs(node: TreeNode | null, pathSum: number): number {
    if (!node) return 0;

    pathSum += node.val;

    // get count from map
    let count = map.get(pathSum - targetSum) || 0;

    // set current running sum in map
    map.set(pathSum, (map.get(pathSum) || 0) + 1);

    count = count + dfs(node.left, pathSum) + dfs(node.right, pathSum);

    map.set(pathSum, (map.get(pathSum) || 0) - 1);

    return count;
  }

  return dfs(root, 0);
}
