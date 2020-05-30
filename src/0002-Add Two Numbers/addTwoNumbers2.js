/**
 * 题述：
 * 给出两个非空的链表用来表示两个非负的整数。其中， 它们各自的位数是按照逆序的方式存储的，并且它们的每个节点只能存储一位数字。
 * 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
 * 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 * 思路：在解法一的基础上，如果不新建一条新的链表，而是直接使用两条链表中更长的那条原地修改
 * 时间复杂度：max(m, n), m 是 l1 节点数， n 是 l2 节点数
 * 空间复杂度：1，常数级
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
    // 遍历 l1 获取 l1 长度
    let i = l1;
    // 因为是非复数，所以链表至少有一个节点，这里设置为 1 是因为最后一个节点没有遍历
    let len1 = 1;
    while (i.next != null) {
        len1++;
        i = i.next;
    }

    let j = l2;
    let len2 = 1;
    while (j.next != null) {
        len2++;
        j = j.next;
    }

    // 获取更长的链表以及它的最后一个节点
    let longerList = l1;
    let longerListLast = i;
    if (len1 < len2) {
        longerList = l2;
        longerListLast = j;
    }

    // 重置
    i = l1;
    j = l2;

    let k = longerList;
    let carryBit = 0;
    while (i != null || j != null) {
        const iVal = i == null ? 0 : i.val;
        const jVal = j == null ? 0 : j.val;
        const sum = iVal + jVal + carryBit;
        k.val = sum % 10;
        k = k.next;
        carryBit = sum >= 10 ? 1 : 0;
        if (i != null) i = i.next;
        if (j != null) j = j.next;
    }

    if (carryBit === 1) {
        longerListLast.next = { val: 1, next: null };
    }

    return longerList;
}

module.exports = addTwoNumbers;

/*
LeetCode 提交结果空间复杂度排名就很离谱
*/
