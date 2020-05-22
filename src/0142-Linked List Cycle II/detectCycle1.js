/**
 * 题述：获取链表环的入口
 * 思路：使用 set 保存遍历过的节点
 * 时间复杂度：n，n 为节点的长度，
 * 空间复杂度：n
 * @param {ListNode} head
 * @return {ListNode}
 */
function detectCycle(head) {
    if (head == null) return null;

    const traveledNode = new Set();
    let current = head;
    while (current != null) {
        if (traveledNode.has(current)) {
            return current;
        }

        traveledNode.add(current);
        current = current.next;
    }

    return null;
}
