/**
 * 题述：链表反转
 * 思路：使用头插法构造链表
 * 时间复杂度：n，n 为链表节点数量
 * 空间复杂度：1，只使用了一个哑节点辅助添加节点
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

    const dummy = { val: null, next: null };
    let current = head;
    while (current != null) {
        const { next } = current;
        current.next = dummy.next;
        dummy.next = current;
        current = next;
    }

    return dummy.next;
}

module.exports = reverseList;
