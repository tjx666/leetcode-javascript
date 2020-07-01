/**
 * 题述：n 叉树的层序遍历
 * 思路：队列
 * 时间复杂度：n，n 为节点个数
 * 空间复杂度：n
 * @param {Node} root
 * @return {number[][]}
 */
function levelOrder(root) {
    if (root == null) return [];

    const result = [];
    const queue = [root];
    while (queue.length !== 0) {
        const level = [];
        for (let i = 0, len = queue.length; i < len; i++) {
            const front = queue.shift();
            level.push(front.val);
            queue.push(...front.children);
        }
        result.push(level);
    }
    return result;
}
