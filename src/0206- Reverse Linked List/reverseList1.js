/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 链表反转一
 *
 * 直接原地反转，遍历一边每个元素，将每个元素的 next 指向前一个元素即可
 * 时间复杂度：n
 * 空间复杂度：1
 *
 * @param {ListNode} head
 * @returns {ListNode}
 * @example
 *
 * 输入: 1->2->3->4->5->NULL
 * 输出: 5->4->3->2->1->NULL
 *
 */
function reverseList(head) {
    if (!head || !head.next) return head;

    let previous = head;
    let current = head.next;
    while (current != null) {
        const { next } = current;
        current.next = previous;
        previous = current;
        current = next;
    }

    head.next = null;
    head = previous;

    return head;
}

module.exports = reverseList;
