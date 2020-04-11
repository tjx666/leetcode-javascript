/**
 * 两两交换链表中的节点
 *
 * @param {ListNode} head
 * @return {ListNode}
 * @example
 * Given 1->2->3->4, you should return the list as 2->1->4->3.
 */
function swapPairs(head) {
    if (head == null) return null;

    const sentinel = { val: null, next: head };
    let previous = sentinel;
    let current = head;

    // previous -> current -> next
    // previous -> next -> current
    while (current != null && current.next != null) {
        const { next } = current;
        previous.next = next;
        current.next = next.next;
        next.next = current;

        previous = current;
        current = current.next;
    }

    return sentinel.next;
}
