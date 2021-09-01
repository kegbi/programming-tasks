import { ListNode } from "../../../../common_data_structures/singly_linked_list/linked_list_node";

function middleNode(head: ListNode | null): ListNode | null {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    /* Second next pointer would be ListNode or null (would be presented anyway)
    so we don't need to check for its presence in order not to catch an error  */
    fast = fast.next.next;
  }

  return slow;
}
