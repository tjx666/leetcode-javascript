/**
 * 题述：求二叉树的层平均值
 * 思路：层序遍历
 * 时间复杂度：n
 * 空间复杂度：树的最大宽度
 * @param {TreeNode} root
 * @return {number[]}
 */
function averageOfLevels(root) {
    if (root == null) return [];

    const queue = [root];
    const result = [];
    while (queue.length !== 0) {
        let sum = 0;
        const levelLength = queue.length;
        for (let i = 0; i < levelLength; i++) {
            const { val, left, right } = queue.shift();
            sum += val;
            if (left) {
                queue.push(left);
            }
            if (right) {
                queue.push(right);
            }
        }
        result.push(sum / levelLength);
    }
    return result;
}
