/**
 * 判断两颗二叉树是否完全相同
 * 使用递归是很好理解的
 * 两个数相同即判断给定的两个根节点是否相同，然后 p 的左右孩子和 q 的左右孩子构成的树也完全相同
 *
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
function isSameTree(p, q) {
    if (p == null && q == null) return true;
    if (p == null || q == null) return false;
    return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}
