/**
 * 题述：给定一个二叉树，在树的最后一行找到最左边的值。
 * 思路：非递归层序遍历，每次开始清空当前层之前保存当前层第一个节点
 * 时间复杂度：n，n 为节点数量
 * 空间复杂度：n
 * @param {TreeNode} root
 * @return {number}
 */
function findBottomLeftValue(root) {
    const queue = [root];
    let leftFirst;
    while (queue.length !== 0) {
        leftFirst = queue[0].val;
        for (let i = 0, len = queue.length; i < len; i++) {
            const { left, right } = queue.shift();
            if (left) {
                queue.push(left);
            }

            if (right) {
                queue.push(right);
            }
        }
    }
    return leftFirst;
}
