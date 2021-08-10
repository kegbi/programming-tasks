/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

// @ts-ignore
function isPalindrome(head: ListNode | null): boolean {
  // @ts-ignore
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

  // @ts-ignore
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

  let middle = middleNode(head);
  let reverse = reverseList(middle);

  while (reverse) {
    if (reverse.val !== head.val) {
      return false;
    }

    reverse = reverse.next;
    head = head.next;
  }

  return true;
}
