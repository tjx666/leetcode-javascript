/**
 * 题述：向 BST 插入新节点
 * 思路：递归
 * 时间复杂度：n, n 为节点个数
 * 空间复杂度：H，树的高度
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
function insertIntoBST(root, val) {
    if (root == null) return { val, left: null, right: null };

    if (val > root.val) {
        root.right = insertIntoBST(root.right, val);
        return root;
    }

    if (val < root.val) {
        root.left = insertIntoBST(root.left, val);
        return root;
    }
}
