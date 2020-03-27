/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 合并两个有序链表，不需要去重
 * 菲递归解法，每次取两个链表中最小的节点插到合并后的链表最后
 *
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function mergeTwoLists(l1, l2) {
    let i = l1;
    let j = l2;
    const l3 = { val: null, next: null };
    let tail = l3;

    while (i != null && j != null) {
        if (i.val < j.val) {
            tail.next = i;
            i = i.next;
        } else {
            tail.next = j;
            j = j.next;
        }
        tail = tail.next;
    }

    tail.next = i == null ? j : i;

    return l3.next;
}

module.exports = mergeTwoLists;
