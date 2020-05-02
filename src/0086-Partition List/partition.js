/**
 * 题述：给定一个链表和一个特定值 x，对链表进行分隔，使得所有小于 x 的节点都在大于或等于 x 的节点之前。你应当保留两个分区中每个节点的初始相对位置。
 * 思路：快慢双指针，慢指针保存最后一个小于 x 的节点，快指针遍历所有节点，碰到小于 x 的接插到慢指针后面，为了方便插入节点可以使用一个哨兵节点
 * 时间复杂度： n，n 为节点的个数
 * 空间复杂度：0
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
function partition(head, x) {
    const sentinel = { val: null, next: head };
    let slow = sentinel;
    let fast = head;
    let previous = sentinel;
    while (fast != null) {
        const { next } = fast;
        if (fast.val < x) {
            if (previous === slow) {
                slow = slow.next;
                previous = fast;
            } else {
                // 删掉当前节点
                previous.next = fast.next;
                fast.next = slow.next;

                // 插到 slow 节点后面
                slow.next = fast;
                slow = fast;
            }
        } else {
            previous = fast;
        }

        fast = next;
    }

    return sentinel.next;
}
