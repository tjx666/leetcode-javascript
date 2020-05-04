/**
 * 题述：给定一个排序链表，删除所有含有重复数字的节点，只保留原始链表中 没有重复出现 的数字
 * 时间复杂度：n，遍历次数就是节点数
 * 空间复杂度：0
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

    const sentinel = { val: null, next: head };
    let previous = sentinel;
    let current = head;
    while (current != null && current.next != null) {
        if (current.val === current.next.val) {
            while (current.next && current.val === current.next.val) {
                current = current.next;
            }
            previous.next = current.next;
        } else {
            previous = current;
        }
        current = current.next;
    }

    return sentinel.next;
}
