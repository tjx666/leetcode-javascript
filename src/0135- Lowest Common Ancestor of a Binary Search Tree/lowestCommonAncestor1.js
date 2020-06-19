/**
 * 题述：给定一个二叉搜索树, 找到该树中两个指定节点的最近公共祖先。
 * 思路：,
 * 由于 BST 的定义容易得出推论：最近公共父节点的父节点只有可能大于两数或者小于两数
 * x 是 p,q 的最近公共父祖先，x 要满足 p.val <= x.val <= q.val，
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

        if (val > p.val) {
            current = current.left;
        } else {
            current = current.right;
        }
    }
}
