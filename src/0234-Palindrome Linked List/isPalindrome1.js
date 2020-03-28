/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 判断是否为回文链表
 * 递归解法：
 * 利用递归可以反向遍历链表的特点，让反向节点和正向节点进行对比
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
    let frontCurrent = head;
    function recursiveCheck(current) {
        if (current == null) return true;
        if (!recursiveCheck(current.next)) return false;
        if (frontCurrent.val !== current.val) return false;
        frontCurrent = frontCurrent.next;
        return true;
    }
    return recursiveCheck(head);
}

module.exports = isPalindrome;
