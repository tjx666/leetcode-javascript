/**
 * 题述：将有序链表转换成平衡二叉树
 * 思路：
 * 1.计算链表的长度len 。
 * 2.根据链表长度len用递归法创建总节点数为len的完全二叉树空间。
 * 3.用中序遍历填入对应的数据。 第二步和第三步是同时进行的
 * 时间复杂度：n
 * 空间复杂度: logN
 * @param {ListNode} head
 * @return {TreeNode}
 */
function sortedListToBST(head) {
    let len = 0;
    let current = head;
    while (current) {
        len++;
        current = current.next;
    }

    function buildBST(start, end) {
        if (start > end) return null;
        const mid = ((start + end) / 2) | 0;
        const leftChild = buildBST(start, mid - 1);
        const node = { val: head.val, left: leftChild };
        head = head.next;
        const rightChild = buildBST(mid + 1, end);
        node.right = rightChild;
        return node;
    }
    return buildBST(0, len - 1);
}
