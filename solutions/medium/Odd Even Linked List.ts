import { ListNode } from "@/utils/list-node";

/**
  Input: head = [2,1,3,5,6,4,7]
  Output: [2,3,6,7,1,5,4]

  Time complexity = O(n)
  Space complexity = O(1)
*/
export function oddEvenList(head: ListNode | null): ListNode | null {
  if (!head) return null;

  let odd = head;
  let even = head.next;

  const evenHead = even;

  while (even !== null && even.next !== null) {
    odd.next = odd.next!.next;
    odd = odd.next!;

    even.next = even.next!.next;
    even = even.next;
  }

  odd.next = evenHead;

  return head;
}
