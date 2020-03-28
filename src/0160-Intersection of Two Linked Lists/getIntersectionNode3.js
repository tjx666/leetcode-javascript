/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 求两个两个链表的交点
 *
 * 解法三：
 * 将 list1 末尾节点的 next 置为 headB，构造一个环，
 * 如果没有环说明没交点，如果有交点那么找出这个交点
 * 最后将两个链表复原
 *
 * @see https://leetcode-cn.com/problems/intersection-of-two-linked-lists/
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 *
 */
function getIntersectionNode(headA, headB) {
    if (headA == null || headB == null) return null;

    let currentA = headA;
    while (currentA.next != null) {
        currentA = currentA.next;
    }
    const endA = currentA;
    endA.next = headB;

    const set = new Set();
    currentA = headA;
    while (currentA != null) {
        if (set.has(currentA)) {
            endA.next = null;
            return currentA;
        }

        set.add(currentA);
        currentA = currentA.next;
    }

    endA.next = null;
    return null;
}

module.exports = getIntersectionNode;
