/**
 * 题述：二叉树的最近公共祖先
 * 思路：通过一个递归函数判断一个树是否含有 p 或 q
 * 时间复杂度：n，n 为树的节点个数
 * 空间复杂度：不算栈空间就是 0，算的话就是 n
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
function lowestCommonAncestor(root, p, q) {
    let result;
    function existedQorQ(node) {
        if (node == null || result !== undefined) return false;

        const left = existedQorQ(node.left);
        const right = existedQorQ(node.right);
        const self = node === p || node === q;
        if (self ? left || right : left && right) {
            result = node;
        }

        return left || right || self;
    }
    existedQorQ(root);
    return result;
}
