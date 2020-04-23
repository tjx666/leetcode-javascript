/**
 * 题述：链表加一，高位在左
 * 思路：
 * 类似的题目做过很多了，这道题一个思路是把链表先反转，再计算出从左到右加一的结果，最后再反转
 * 之前面猿辅导考过这道题，她当时的要求是不能用额外的空间，用反转的方式是可以，
 * 其实可以更简单，仔细思考下这个问题，我们其实只要找到从末尾开始到头部连续的最后一个 9 前一个节点即可，只要一个节点不是 9 再前面的节点值是不受影响的
 * 可以使用快慢指针，慢指针保存节点值为 9 的前一个节点，快指针遍历到非 9 的时候就将慢指针置空
 * 时间复杂度：2n，快指针遍历一遍，慢指针遍历一遍
 * 空间复杂度：常数级别
 * @param {ListNode} head
 * @return {ListNode}
 */
function plusOne(head) {
    let slow = null;
    const sentinel = { val: null, next: head };
    let previous = sentinel;
    let fast = head;

    while (fast != null) {
        if (fast.val === 9) {
            if (slow === null) {
                slow = previous;
            }
        } else {
            slow = null;
        }
        previous = fast;
        fast = fast.next;
    }

    if (slow == null) {
        previous.val++;
        return sentinel.next;
    }

    while (slow != null) {
        slow.val = (slow.val + 1) % 10;
        slow = slow.next;
    }

    return sentinel.val === null ? sentinel.next : sentinel;
}
