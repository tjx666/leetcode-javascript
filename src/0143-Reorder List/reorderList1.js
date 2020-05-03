/**
 * 题述：给定一个单链表 L：L0→L1→…→Ln-1→Ln，将其重新排列后变为： L0→Ln→L1→Ln-1→L2→Ln-2→… 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
 * 思路：将链表存到数组中，再使用首尾双指针
 * 时间复杂度：n，n 为链表节点数量
 * 空间复杂度：n
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
function reorderList(head) {
    if (head == null || head.next == null || head.next.next == null) return;
    const elements = [];
    let current = head;
    while (current != null) {
        elements.push(current);
        current = current.next;
    }
    const { length } = elements;
    let j = length - 1;
    for (let i = 0; i < j - 1; i++, j--) {
        elements[j].next = elements[i].next;
        elements[i].next = elements[j];
    }
    elements[j].next = null;
}
