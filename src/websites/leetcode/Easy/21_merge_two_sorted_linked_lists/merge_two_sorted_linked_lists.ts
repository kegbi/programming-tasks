import { ListNode } from "../../../../common_data_structures/singly_linked_list/singly_linked_list";

function mergeTwoLists(
    l1: ListNode | null,
    l2: ListNode | null,
): ListNode | null {
  let merged = new ListNode(0);
  let result = merged;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      merged.next = new ListNode(l1.val);
      merged = merged.next;
      l1 = l1.next;
    } else {
      merged.next = new ListNode(l2.val);
      merged = merged.next;
      l2 = l2.next;
    }
  }

  while (l1) {
    merged.next = new ListNode(l1.val);
    merged = merged.next;
    l1 = l1.next;
  }

  while (l2) {
    merged.next = new ListNode(l2.val);
    merged = merged.next;
    l2 = l2.next;
  }

  return result.next;
}
