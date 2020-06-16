/**
 * 题述：给定二叉搜索树（BST）的根节点和一个值。 你需要在BST中找到节点值等于给定值的节点。 返回以该节点为根的子树。 如果节点不存在，则返回 NULL。
 * 思路：这是 BST 的基本操作，递归版
 * 时间复杂度：H，树高
 * 空间复杂度：H，递归需要栈空间，最深递归 H 层
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
function searchBST(root, val) {
    if (root == null) return null;

    if (val > root.val) return searchBST(root.right, val);

    if (val < root.val) return searchBST(root.left, val);

    return root;
}
