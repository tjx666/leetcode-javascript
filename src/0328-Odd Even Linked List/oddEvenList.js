/**
 * 题述：链表奇偶排序，奇偶指的是节点下标的奇偶性
 * 思路：快慢双指针，慢指针为奇节点最后一个节点
 * 时间复杂度： n, n 为节点个数
 * 空间复杂度：0
 * @param {ListNode} head
 * @return {ListNode}
 */
function oddEvenList(head) {
    if (head == null) return head;

    let odd = false;
    let slow = head;
    let previous = head;
    let fast = head.next;
    while (fast != null) {
        const { next } = fast;
        if (odd) {
            previous.next = fast.next;
            fast.next = slow.next;
            slow.next = fast;
            slow = fast;
            fast = next;
        } else {
            previous = fast;
        }
        fast = next;
        odd = !odd;
    }

    return head;
}
