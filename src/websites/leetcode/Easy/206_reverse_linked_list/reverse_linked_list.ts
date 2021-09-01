import { ListNode } from "../../../../common_data_structures/singly_linked_list/linked_list_node";

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
