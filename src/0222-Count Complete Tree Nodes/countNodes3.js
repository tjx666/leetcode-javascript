/**
 * 题述：获取完全二叉树的节点个数
 * 思路：通过判断左右子树的深度是否相等来跳过半边子树的遍历
 * 时间复杂度：logn * logn,
 * 空间复杂度：logn
 * @param {TreeNode} root
 * @return {number}
 */
function countNodes(root) {
    if (root == null) return 0;

    const leftDepth = getDepth(root.left);
    const rightDepth = getDepth(root.right);
    // 说明左子树是满二叉树
    if (leftDepth === rightDepth) {
        return 2 ** leftDepth + countNodes(root.right);
    }

    // 说明右子树没有最后一层的节点是一颗满二叉树
    return 2 ** rightDepth + countNodes(root.left);
}

// 这个获取深度的辅助函数并不是一般意义的获取二叉树深度的函数
// 这里只是用来获取前序 DFS 深度
function getDepth(node) {
    let depth = 0;
    while (node) {
        depth++;
        node = node.left;
    }
    return depth;
}
