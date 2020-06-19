/**
 * 题述：BST 范围和
 * 思路：DFS + 剪枝
 * 时间复杂度：最复杂的情况就是 L 和 R 分别是最小和最大值
 * 空间复杂度：H，H 为树高
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
function rangeSumBST(root, L, R) {
    if (root == null) return 0;

    if (root.val < L) {
        return rangeSumBST(root.right, L, R);
    }

    if (root.val > R) {
        return rangeSumBST(root.left, L, R);
    }

    return root.val + rangeSumBST(root.left, L, R) + rangeSumBST(root.right, L, R);
}
