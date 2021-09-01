import { ListNode } from "../../../../common_data_structures/singly_linked_list/linked_list_node";

function hasCycle(head: ListNode | null): boolean {
  if (!head) {
    return false;
  }

  let slow = head;
  let fast = head;

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
}
