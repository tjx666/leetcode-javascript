/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 给定一个链表中的节点，在链表中删除该节点
 * 考察链表朝左基础
 *
 * 说明：
 * 链表至少包含两个节点。
 * 链表中所有节点的值都是唯一的。
 * 给定的节点为非末尾节点并且一定是链表中的一个有效节点。
 * 不要从你的函数中返回任何结果。
 *
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 * @example
 *
 * Input: head = [4,5,1,9], node = 5
 * Output: [4,1,9]
 *
 * Input: head = [4,5,1,9], node = 1
 * Output: [4,5,9]
 */
function deleteNode(node) {
    const nextNode = node.next;
    node.val = nextNode.val;
    node.next = nextNode.next;
}

module.exports = deleteNode;
