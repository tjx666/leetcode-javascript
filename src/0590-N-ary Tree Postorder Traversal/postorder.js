/**
 * 题述：后序遍历 n 叉树
 * 思路：这里采用一个取巧的方式获取后序遍历数组，实际遍历的顺序和后序遍历顺序是刚好相反
 * 算法复杂度：n。n 为 n 叉树节点数量
 * 空间复杂度：最差的情况就是 n - 1 个节点全在第二层
 * @param {Node} root
 * @return {number[]}
 */
function postorder(root) {
    if (root == null) return [];

    const stack = [root];
    const result = [];
    while (stack.length !== 0) {
        const { val, children } = stack.pop();
        result.push(val);
        for (let i = 0, len = children.length; i < len; i++) {
            stack.push(children[i]);
        }
    }
    return result.reverse();
}
