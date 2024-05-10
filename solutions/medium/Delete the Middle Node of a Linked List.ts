import { ListNode } from "@/shared/types";

/**
  Input: [1,2,3,4]
  Output: [1,2,4]

  Time complexity = O(n)
  Space complexity = O(1)
*/
export function deleteMiddle(head: ListNode | null): ListNode | null {
  if (!head || !head.next) {
    return null;
  }

  let slow: ListNode = head;
  let fast: ListNode | null = head.next.next;

  while (fast && fast.next) {
    slow = slow.next!;
    fast = fast.next.next;
  }

  slow.next = slow.next!.next;

  return head;
}
