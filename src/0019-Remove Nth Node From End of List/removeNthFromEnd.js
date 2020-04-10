/**
 * 移除链表倒数第 n 个节点
 *
 * 双指针，保持快指针和慢指针距离为 n，以相同速度遍历到最后，慢指针是倒数 n + 1
 *
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
function removeNthFromEnd(head, n) {
    const sentinel = { val: null, next: head };
    let fast = sentinel;
    let slow = sentinel;

    // 遍历 n 次后，此时 slow 在第 n 个节点，slow 是相对于 fast 节点倒数第 n + 1
    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }

    while (fast.next != null) {
        fast = fast.next;
        slow = slow.next;
    }

    slow.next = slow.next.next;

    return sentinel.next;
}
