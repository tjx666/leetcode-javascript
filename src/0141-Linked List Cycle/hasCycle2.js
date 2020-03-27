/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 判断链表是否有环
 * 使用两个下标，一个每次走一步，一个每次走两步，每次遍历快的比慢的多走一步，有环的话快的会慢慢靠近慢的并最终和慢的重叠
 *
 * @param {ListNode} head
 * @return {boolean}
 */
function hasCycle(head) {
    if (head == null || head.next == null) return false;

    let fast = head;
    let slow = head;
    while (fast != null && fast.next != null && slow != null) {
        fast = fast.next.next;
        slow = slow.next;

        if (fast === slow) {
            return true;
        }
    }

    return false;
}

module.exports = hasCycle;
