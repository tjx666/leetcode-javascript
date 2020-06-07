const reverseList = require('../0206-Reverse Linked List/reverseList1');

/**
 * 题述：判断是否为回文链表
 * 思路：反转后半段链表然后和前半段判断是否先等
 * 时间复杂度：n，n 是链表节点数
 * 空间复杂度：n
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

/**
 * 快指针每次走两步，慢指针每次走一步，快指针走完了慢指针就到中间节点
 * @param {LinkNode} head
 */
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
