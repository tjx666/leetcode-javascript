/**
 * 题述：
 * 给你一个链表的头节点 head，请你编写代码，反复删去链表中由总和值为 0 的连续节点组成的序列，直到不存在这样的序列为止。
 * 删除完毕后，请你返回最终结果链表的头节点。
 * 思路：
 * 考虑到连续的节点和为 0，那么如果累加每一个节点的值，在连续节点两头的节点值肯定是相等的
 * 例如：1 -> 2 -> 1 -> -1 -> 3，累加到 2 是和为 3，累加到 -1 时也是 3
 * 具体实现可以用 map 来保存遍历到每个元素的累加和，因为题目要求反复删去，所以是需要两次遍历
 * 时间复杂度：n，n为节点数量，最复杂的情况是遍历两遍 2n，所以是 n 级别的复杂度
 * 空间复杂度：n，map 长度最长为节点数量
 * @param {ListNode} head
 * @return {ListNode}
 */
function removeZeroSumSublists(head) {
    const map = new Map();
    const dummy = { val: 0, next: head };
    let current = dummy;
    let sum = 0;
    while (current != null) {
        sum += current.val;
        map.set(sum, current);
        current = current.next;
    }

    current = dummy;
    sum = 0;
    while (current != null) {
        sum += current.val;
        if (map.has(sum)) {
            current.next = map.get(sum).next;
        }
        current = current.next;
    }

    return dummy.next;
}
