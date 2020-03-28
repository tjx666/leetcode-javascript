const reverseList = require('../0206- Reverse Linked List/reverseList1');

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 判断是否为回文链表
 * 利用快慢指针，一个每次走两步，一个走一步，当快指针走到头了，此时慢指针刚好会是前半段尾节点或者中间节点
 * 解题步骤就是反转后半段，判断两条链表是不是一样的
 *
 * @param {ListNode} head
 * @return {boolean}
 * @example
 *
 * Input: 1->2
 * Output: false
 *
 * Input: 1->2->2->1
 * Output: true
 *
 */
function isPalindrome(head) {
    if (head == null || head.next == null) return true;
    const endOfFrontHalf = getMiddleNode(head);
    const reversedBackHalfList = reverseList(endOfFrontHalf.next);

    let i = head;
    let j = reversedBackHalfList;

    while (j != null && i.val === j.val) {
        i = i.next;
        j = j.next;
    }

    reverseList(reversedBackHalfList);

    return j == null;
}

function getMiddleNode(head) {
    if (head == null) return null;
    if (head.next == null || head.next.next == null) return head;

    let fast = head;
    let slow = head;
    while (fast.next != null && fast.next.next != null) {
        fast = fast.next.next;
        slow = slow.next;
    }

    return slow;
}

module.exports = isPalindrome;
