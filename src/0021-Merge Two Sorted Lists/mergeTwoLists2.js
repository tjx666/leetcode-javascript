/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 合并两个有序链表，不需要去重
 * 递归解法
 *
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function mergeTwoLists(l1, l2) {
    if (l1 == null) {
        return l2;
    }

    if (l2 == null) {
        return l1;
    }

    if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    }

    l2.next = mergeTwoLists(l2.next, l1);
    return l2;
}

module.exports = mergeTwoLists;
