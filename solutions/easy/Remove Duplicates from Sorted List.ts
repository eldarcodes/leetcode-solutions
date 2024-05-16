import { ListNode } from "@/utils/list-node";

export function deleteDuplicates(head: ListNode | null): ListNode | null {
  let current = head;

  while (current) {
    while (current.next && current.val === current.next.val) {
      current.next = current.next.next;
    }
    current = current.next;
  }
  return head;
}
