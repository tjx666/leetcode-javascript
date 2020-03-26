/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 链表反转二
 *
 * 使用递归，将问题范围缩小
 * 链表反转其实可以先反转子链表
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
function reverseList(head) {
    if (!head || !head.next) return head;

    const secondNode = head.next;
    const reveredChildList = reverseList(secondNode);
    secondNode.next = head;
    head.next = null;

    return reveredChildList;
}

module.exports = reverseList;
