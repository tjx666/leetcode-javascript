/**
 * 题述：逆序打印不可变链表
 * 思路：递归
 * 时间复杂度：n，n 为节点个数，将所有节点都遍历了一遍
 * 空间复杂度：n, 递归深度为 n
 * @param {ImmutableListNode} head
 * @return {void}
 */
function printLinkedListInReverse(head) {
    if (head == null) return;
    printLinkedListInReverse(head.getNext());
    head.printValue();
}
