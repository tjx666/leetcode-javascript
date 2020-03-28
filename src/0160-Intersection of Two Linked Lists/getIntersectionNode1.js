/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 求两个两个链表的交点
 * 说明:
 * 如果两个链表没有交点，返回 null.
 * 在返回结果后，两个链表仍须保持原有的结构。
 * 可假定整个链表结构中没有循环。
 * 程序尽量满足 O(n) 时间复杂度，且仅用 O(1) 内存。
 *
 * 解法一：暴力法，遍历 list1 每一个元素，再从头遍历 list2，如果 list2 中有该元素那么就是它
 * 优化：没必要每次都从头遍历 list2，我们只需要判断 list2 中有没有该元素而已，可以将 list2 元素中的元素放到 set 中
 *
 * @see https://leetcode-cn.com/problems/intersection-of-two-linked-lists/
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 *
 */
function getIntersectionNode(headA, headB) {
    if (headA == null || headB == null) return null;

    let current2 = headB;
    const setB = new Set();
    while (current2 != null) {
        setB.add(current2);
        current2 = current2.next;
    }

    let current1 = headA;
    while (current1 != null) {
        if (setB.has(current1)) return current1;

        current1 = current1.next;
    }

    return null;
}

module.exports = getIntersectionNode;
