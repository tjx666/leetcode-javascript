/**
 * 题述：给定一棵二叉树，你需要计算它的直径长度。一棵二叉树的直径长度是任意两个结点路径长度中的最大值。这条路径可能穿过也可能不穿过根结点。
 * 思路：其实这个问题可以转换为求以二叉树任意一个节点为根节点左子树深度 + 右子树深度的最大值
 * 时间复杂度：n，n 为树的节点的个数
 * 空间复杂度：递归深度为树的高度
 * @param {TreeNode} root
 * @return {number}
 */
function diameterOfBinaryTree(root) {
    let max = 0;
    function depth(node) {
        if (node == null) return 0;
        const leftDepth = depth(node.left);
        const rightDepth = depth(node.right);
        max = Math.max(max, leftDepth + rightDepth + 1);
        return Math.max(leftDepth, rightDepth) + 1;
    }
    depth(root);
    return max;
}
