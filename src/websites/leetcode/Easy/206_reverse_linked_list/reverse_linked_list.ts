import { ListNode } from "../../../../common_data_structures/singly_linked_list/singly_linked_list";

function reverseList(head: ListNode | null): ListNode | null {
  let prev = null;
  let current = head;

  while (current) {
    let nxt = current.next;
    current.next = prev;
    prev = current;
    current = nxt;
  }

  return prev;
}
