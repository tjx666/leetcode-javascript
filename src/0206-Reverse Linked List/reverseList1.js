/**
 * 题述：链表反转
 * 思路：直接原地反转，遍历每一个元素，将每个元素的 next 指向前一个元素即可，因此这里需要使用一个变量 previous 保存前一个节点
 * 时间复杂度：n，n 为链表节点数量
 * 空间复杂度：1，没有使用额外空间
 *
 * @param {ListNode} head
 * @returns {ListNode}
 * @example
 *
 * 输入: 1->2->3->4->5->NULL
 * 输出: 5->4->3->2->1->NULL
 *
 */
function reverseList(head) {
    // 0 个或者 1 个节点直接返回 head
    if (head == null || head.next == null) {
        return head;
    }

    // 从第二个节点开始修改 next 指向
    let previous = head;
    let current = head.next;
    while (current != null) {
        const { next } = current;
        current.next = previous;
        previous = current;
        current = next;
    }
    // 注意修改 head 的 next 指向
    head.next = null;

    // 当 current 遍历到 null 时，previous 便是链表最后一个节点，也是反转后的链表的头节点
    return previous;
}

module.exports = reverseList;
