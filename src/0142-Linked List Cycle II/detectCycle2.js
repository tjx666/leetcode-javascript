/**
 * 题述：在空间复杂度为常数级别的情况下获取链表环的入口
 * 思路：
 * 参考 https://leetcode-cn.com/problems/linked-list-cycle-ii/solution/huan-xing-lian-biao-ii-by-leetcode/
 * 主要还是要能证明出确定交点时再走 a 步其实就可以走到环入口
 * 时间复杂度：n，n 为节点的长度，
 * 空间复杂度：0
 * @param {ListNode} head
 * @return {ListNode}
 */
function detectCycle(head) {
    let fast = head;
    let slow = head;

    let joined;
    while (fast != null && fast.next != null) {
        fast = fast.next.next;
        slow = slow.next;
        if (fast === slow) {
            joined = fast;
            break;
        }
    }

    if (joined === undefined) {
        return null;
    }

    let i = head;
    let j = joined;
    while (i !== j) {
        i = i.next;
        j = j.next;
    }

    return i;
}
