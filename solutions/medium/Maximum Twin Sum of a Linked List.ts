import { ListNode } from "@/utils/list-node";

/**
  Input: head = [4,2,2,3]
  Output: 7

  Time complexity = O(n)
  Space complexity = O(n)
*/
export function pairSum(head: ListNode | null): number {
  if (!head) return 0;

  const nums = [];

  while (head !== null) {
    nums.push(head.val);
    head = head.next;
  }

  let max = 0;
  const n = nums.length;

  for (let i = 0; i < n / 2; i++) {
    const twinSum = nums[i] + nums[n - 1 - i];

    max = Math.max(max, twinSum);
  }

  return max;
}
