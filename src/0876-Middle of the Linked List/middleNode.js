/**
 * 求链表中间节点
 *
 * 时间复杂度：O(N)O(N)，其中 NN 是给定链表的结点数目。
 * 空间复杂度：O(1)O(1)，只需要常数空间存放 slow 和 fast 两个指针。
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
function middleNode(head) {
    if (head == null) return null;
    if (head.next == null) return head;

    let fast = head;
    let slow = head;
    while (fast.next != null && fast.next.next != null) {
        fast = fast.next.next;
        slow = slow.next;
    }

    return fast.next ? slow.next : slow;
}

module.exports = middleNode;
