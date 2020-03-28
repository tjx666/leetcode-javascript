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
 * 解法二：两个下标以相同速度遍历，走到头后分别走对方的路，只要当前节点俩相同，那么一定是交点
 * 例如:
 *
 * 下面是交点前路径一样长的情况
 * 1 -> 4 -> 6 -> 8
 * 1 -> 3 -> 6 -> 8
 * 每次遍历都是走一步，第一次俩相同的时候就是交点 6
 *
 * 如果前面不一样长：
 * 1 -> 4 -> 6 -> 8
 * 1 -> 6 -> 8
 *
 * 让 j 走完 list2，接着从 list1 头部走
 * 让 i 走完 list1，接着从 list2 头部走
 * 这样当 i 走到交点时，走过 list1前缀 + 共同部分 + list2 前缀
 * 因为俩速度相同：
 * j 必然走过 list2 前缀 + 共同部分 + list1 前缀
 * 也就是都到交点
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
    let currentB = headB;

    while (currentA !== currentB) {
        currentA = currentA == null ? headB : currentA.next;
        currentB = currentB == null ? headA : currentB.next;
    }

    return currentA;
}

module.exports = getIntersectionNode;
