/**
 * 题述：您需要在二叉树的每一行中找到最大的值。
 * 思路：太简单了，BFS，别和我扯什么 DFS，有更好理解的解法不用偏要去折腾那些不好理解的非常规思路，简直是浪费生命。
 * 时间复杂度：n，n 为树的节点树
 * 空间复杂度：n
 * @param {TreeNode} root
 * @return {number[]}
 */
function largestValues(root) {
    if (root == null) return [];

    const result = [];
    const queue = [root];
    while (queue.length !== 0) {
        let max = -Infinity;
        for (let i = 0, len = queue.length; i < len; i++) {
            const { val, left, right } = queue.shift();
            if (val > max) {
                max = val;
            }
            if (left) {
                queue.push(left);
            }
            if (right) {
                queue.push(right);
            }
        }
        result.push(max);
    }
    return result;
}
