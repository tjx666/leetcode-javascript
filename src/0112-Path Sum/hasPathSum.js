/**
 * 是否存在路径和等于某个数
 * 这道题和求二叉树所有路径是一样的，只不过这道题不需要遍历所有路径，只要有符合要求的路径据可以返回
 * 很明显大多数情况下深度优先遍历比广度优先遍历更快到达叶子节点
 * 这里只写非递归版，递归版参考 257 题
 *         1
 *     2       3
 *  4    5   6    7
 *
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
function hasPathSum(root, sum) {
    if (root == null) return false;

    const stack = [{ node: root, rest: sum - root.val }];
    while (stack.length !== 0) {
        const { node, rest } = stack.pop();
        const { left, right } = node;
        if (left == null && right == null && rest === 0) return true;
        if (left != null) {
            stack.push({ node: left, rest: rest - left.val });
        }
        if (right != null) {
            stack.push({ node: right, rest: rest - right.val });
        }
    }

    return false;
}

module.exports = hasPathSum;
