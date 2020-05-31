/**
 * 题述：
 * 给出两个非空的链表用来表示两个非负的整数。其中， 它们各自的位数是按照逆序的方式存储的，并且它们的每个节点只能存储一位数字。
 * 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
 * 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 * 思路：
 * 这道题给出的两个链表是逆序排列的，更难的是顺序排列。逆序排列可以直接使用两个下标，同时遍历两个链表，注意处理好进位即可。
 * 如果题目是顺序的，也就是 LeetCode 445. 两数相加 II，其实可以先将两条链表反转，再当作这道题来做。
 * 时间复杂度：max(m, n), m 是 l1 节点数， n 是 l2 节点数
 * 空间复杂度：max(m, n)，其实可以在更长的链表上原地修改，那样空间复杂度 1
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * @example
 *
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * Explanation: 342 + 465 = 807.
 *
 */
function addTwoNumbers(l1, l2) {
    let i = l1;
    let j = l2;
    let carryBit = 0;
    // 使用哑节点辅助方便添加节点
    const dummy = { val: null, next: null };
    let tail = dummy;
    // carryBit === 1 处理最后还有进位的情况
    while (i != null || j != null || carryBit === 1) {
        const iVal = i == null ? 0 : i.val;
        const jVal = j == null ? 0 : j.val;
        const sum = iVal + jVal + carryBit;
        tail.next = { val: sum % 10, next: null };
        tail = tail.next;
        carryBit = sum >= 10 ? 1 : 0;
        if (i != null) i = i.next;
        if (j != null) j = j.next;
    }

    return dummy.next;
}

module.exports = addTwoNumbers;
