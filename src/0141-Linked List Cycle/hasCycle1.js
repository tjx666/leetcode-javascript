/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 判断链表是否有环
 * 使用 set 保存已遍历过的节点，如果再次遍历到元素就说明有环
 *
 * @param {ListNode} head
 * @return {boolean}
 */
function hasCycle(head) {
    if (head == null || head.next == null) return false;
    const set = new Set();
    let current = head;
    while (current !== null) {
        if (set.has(current)) return true;

        set.add(current);
        current = current.next;
    }

    return false;
}

module.exports = hasCycle;
