/**
 * 题述：给定一个排序链表，删除所有含有重复数字的节点，只保留原始链表中 没有重复出现 的数字
 * 思路：递归
 * 时间复杂度：n
 * 空间复杂度：栈空间参与计算的话是 n
 * @param {ListNode} head
 * @return {ListNode}
 * @example
 *
 * 输入: 1->2->3->3->4->4->5
 * 输出: 1->2->5
 *
 */
function deleteDuplicates(head) {
    if (head == null || head.next == null) return head;

    if (head.next && head.val === head.next.val) {
        while (head.next && head.val === head.next.val) {
            head = head.next;
        }
        return deleteDuplicates(head.next);
    }

    head.next = deleteDuplicates(head.next);
    return head;
}
