/**
 * 题述：链表反转
 * 思路：递归，反转一个链表 list 其实等同于：将 list.next 代表的子链表反转后，尾部再接上头节点
 * 时间复杂度：n，n 为链表节点数量，递归的深度就是 n
 * 空间复杂度：n，需要和递归深度相同的栈空间
 * @param {ListNode} head
 * @returns {ListNode}
 * @example
 *
 * 输入: 1->2->3->4->5->NULL
 * 输出: 5->4->3->2->1->NULL
 *
 */
function reverseList(head) {
    if (head == null || head.next == null) return head;

    const secondNode = head.next;
    const reversed = reverseList(secondNode);
    secondNode.next = head;
    head.next = null;
    return reversed;
}

module.exports = reverseList;
