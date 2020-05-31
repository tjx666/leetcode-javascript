const reverseList = require('../0206-Reverse Linked List/reverseList1');
const addTwoNumbersI = require('../0002-Add Two Numbers/addTwoNumbers1');
/**
 * 题述：链表相加二
 * 思路：先反转，再当作 LeetCode 0002-Add Two Numbers 来解，最后将结果再反转
 * 时间复杂度：max(m, n), m, n 分别为 l1 和 l2 的节点数量
 * 空间复杂度：max(m, n)
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1, l2) {
    return reverseList(addTwoNumbersI(reverseList(l1), reverseList(l2)));
}

module.exports = addTwoNumbers;
