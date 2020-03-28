/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 删除链表中值为给定值的节点
 *
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 * @example
 * Input:  1->2->6->3->4->5->6, val = 6
 * Output: 1->2->3->4->5
 */
function removeElements(head, val) {
    if (head == null) return head;

    // 哨兵节点方便遍历
    const sentinel = { val: null, next: head };
    let previous = sentinel;
    let current = head;
    while (current != null) {
        if (current.val === val) {
            previous.next = current.next;
        } else {
            previous = current;
        }

        current = current.next;
    }

    return sentinel.next;
}

module.exports = removeElements;
