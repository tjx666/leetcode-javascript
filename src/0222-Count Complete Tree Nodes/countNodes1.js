/**
 * 题述：获取完全二叉树的节点个数
 * 思路：最简单的思路是直接遍历一遍即可
 * 时间复杂度：n，n 为树的节点个数
 * 空间复杂度：
 * 栈空间最大应该为树高 H，因为该树是完全二叉树并且完全二叉树的节点数 n 等于 2 的 H 次方 - 1，所以这里空间复杂度其实也等于 logn
 * @param {TreeNode} root
 * @return {number}
 */
function countNodes(root) {
    if (root == null) return 0;

    const stack = [root];
    let count = 0;
    while (stack.length !== 0) {
        count++;
        const { left, right } = stack.pop();
        if (right) {
            stack.push(right);
        }
        if (left) {
            stack.push(left);
        }
    }
    return count;
}
