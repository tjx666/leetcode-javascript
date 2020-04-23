/**
 * 题述：旋转链表 k 次
 * 思路：基本操作
 * 时间复杂度：2n，第一次遍历计算总节点数并把首尾节点相连，第二次遍历到倒数 k % n
 * 空间复杂度：常数级
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
function rotateRight(head, k) {
    if (head == null) return head;

    let current = head;
    let nodeCount = 1;
    while (current.next != null) {
        current = current.next;
        nodeCount++;
    }

    const tail = current;
    tail.next = head;

    // 倒数第 k % nodeCount 即顺数 nodeCount - (k % nodeCount) + 1 个位置
    const position = nodeCount - (k % nodeCount) + 1;
    current = head;
    let previous = tail;
    let i = 1;
    while (i !== position) {
        previous = current;
        current = current.next;
        i++;
    }

    previous.next = null;
    head = current;

    return head;
}
