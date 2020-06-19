/**
 * 题述：给定一个二叉搜索树, 找到该树中两个指定节点的最近公共祖先。
 * 思路：
 * x 是 p,q 的最近公共父祖先，x 要满足 p.val <= x.val <= q.val
 * 从根节点开始遍历，根节点是最顶层的祖先，当前节点 current 要么是 x，要么就是 x 的父节点（正确调整 current 的情况下）
 * 当 current 是 x 的祖先时，p,q 要么是在 current 的左子树，要么是右子树，因为 BST 的定义，p,q 必然都大于或者都小于 current
 * 时间复杂度：H，树高
 * 空间复杂度：1
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
function lowestCommonAncestor(root, p, q) {
    if (p.val > q.val) [p, q] = [q, p];
    let current = root;
    while (true) {
        const { val } = current;

        if (val >= p.val && val <= q.val) {
            return current;
        }

        // 此时 p, q 必然都大于或者都小于 val
        if (val > p.val) {
            current = current.left;
        } else {
            current = current.right;
        }
    }
}
