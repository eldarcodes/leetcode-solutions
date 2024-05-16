import { ListNode } from "@/utils/list-node";

export function removeElements(
  head: ListNode | null,
  val: number
): ListNode | null {
  const dummy = new ListNode(0, head);
  let current = dummy;

  while (current.next) {
    if (current.next.val === val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return dummy.next;
}
