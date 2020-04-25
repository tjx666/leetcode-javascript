/**
 * 题述：n 叉树前序遍历
 * 思路：栈
 * 时间复杂度：O(M)，其中 M 是 N 叉树中的节点个数。每个节点会出栈一次。
 * 空间复杂度：O(M)。在最坏的情况下，这棵 N 叉树只有 2 层，所有第 2 层的节点都是根节点的孩子。将根节点推出栈后，需要将这些节点都放入栈，共有 M−1 个节点，因此栈的大小为 O(M)。
 * @param {Node} root
 * @return {number[]}
 */
function preorder(root) {
    if (root == null) return [];

    const result = [];
    const stack = [root];
    while (stack.length !== 0) {
        const top = stack.pop();
        result.push(top.val);
        for (let i = top.children.length - 1; i >= 0; i--) {
            stack.push(top.children[i]);
        }
    }

    return result;
}
