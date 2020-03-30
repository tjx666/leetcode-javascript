/**
 * 获取二叉树的最大深度
 * 数这种结构非常适合使用递归来解题
 *
 * @param {TreeNode} root
 * @return {number}
 */
function maxDepth(root) {
    if (root === null) return 0;
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}

module.exports = maxDepth;
