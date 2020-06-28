/**
 * 题述：给定一个二叉树，判断它是否是高度平衡的二叉树。一棵高度平衡二叉树定义为：一个二叉树每个节点的左右两个子树的高度差的绝对值不超过1
 * 思路：根据平衡二叉树的定义想到可以使用一个获取深度的函数来判断当前节点是否满足定义，递归过程中可以判断其它节点是否满足定义
 * 时间复杂度：n，需要将每一个节点遍历一次
 * 空间复杂度：H，树高
 * @param {TreeNode} root
 * @return {boolean}
 */
function isBalanced(root) {
    function getDepth(node) {
        if (node == null) return 0;

        const leftDepth = getDepth(node.left);
        if (leftDepth === -1) return -1;

        const rightDepth = getDepth(node.right);
        if (rightDepth === -1 || Math.abs(leftDepth - rightDepth) > 1) {
            return -1;
        }

        return Math.max(leftDepth, rightDepth) + 1;
    }
    return getDepth(root) !== -1;
}
