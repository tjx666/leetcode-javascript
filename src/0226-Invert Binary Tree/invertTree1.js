/**
 * 反转二叉树
 * 递归就完事了
 *
 * @param {TreeNode} root
 * @return {TreeNode}
 */
function invertTree(root) {
    if (root == null) return null;

    [root.left, root.right] = [root.right, root.left];
    invertTree(root.left);
    invertTree(root.right);

    return root;
}

module.exports = invertTree;
