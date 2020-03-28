/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 移除有序链表中重复元素
 * 和有序数组移除重复元素一样可以使用双指针
 *
 * @param {ListNode} head
 * @return {ListNode}
 * @example
 *
 * Input: 1->1->2
 * Output: 1->2
 *
 * Input: 1->1->2->3->3
 * Output: 1->2->3
 *
 */
function deleteDuplicates(head) {
    if (head == null || head.next == null) return head;

    let slow = head;
    let fast = head.next;
    let previous = head;

    while (fast) {
        if (fast.val !== previous.val) {
            slow.next = fast;
            slow = slow.next;
        }
        previous = fast;
        fast = fast.next;
    }
    slow.next = null;

    return head;
}

module.exports = deleteDuplicates;
