import { ListNode } from "../../../../common_data_structures/singly_linked_list/linked_list_node";

function removeElements(head: ListNode | null, val: number): ListNode | null {
  let result = new ListNode(0);
  result.next = head;

  let current = result;

  while (current.next) {
    if (current.next.val === val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return result.next;
}
