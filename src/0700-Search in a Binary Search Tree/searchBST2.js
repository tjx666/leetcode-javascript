/**
 * 题述：给定二叉搜索树（BST）的根节点和一个值。 你需要在BST中找到节点值等于给定值的节点。 返回以该节点为根的子树。 如果节点不存在，则返回 NULL。
 * 思路：这是 BST 的基本操作，迭代版
 * 时间复杂度：H，树高
 * 空间复杂度：1
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
function searchBST(root, val) {
    let current = root;
    while (current != null) {
        if (val === current.val) {
            return current;
        }

        if (val > current.val) {
            current = current.right;
        } else {
            current = current.left;
        }
    }

    return null;
}
