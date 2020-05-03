/**
 * 题述：给定一个单链表 L：L0→L1→…→Ln-1→Ln，将其重新排列后变为： L0→Ln→L1→Ln-1→L2→Ln-2→… 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
 * 思路：将链表后半段反转
 * 时间复杂度：n，n 为链表节点数量
 * 空间复杂度：0
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
function reorderList(head) {
    if (head == null || head.next == null || head.next.next == null) return;

    // 快指针每次走两步，慢指针每次走一步，这样当快指针走到最后的时候慢指针就走到了中间
    let fast = head;
    let slow = head;
    while (fast.next != null && fast.next.next != null) {
        fast = fast.next.next;
        slow = slow.next;
    }
    const backHalf = slow.next;
    slow.next = null;

    // 反转后半段
    let previous = backHalf;
    let k = backHalf.next;
    while (k != null) {
        const { next } = k;
        k.next = previous;
        previous = k;
        k = next;
    }
    backHalf.next = null;

    let i = head;
    let j = previous;
    while (i != null && j != null) {
        const jNext = j.next;
        j.next = i.next;
        i.next = j;
        i = j.next;
        j = jNext;
    }
}
