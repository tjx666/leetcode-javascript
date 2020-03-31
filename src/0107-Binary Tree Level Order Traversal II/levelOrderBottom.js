/**
 * 写个非递归版的
 * 递归版感觉可以先层序遍历再反转，但效率比较低，最好能不反转
 *
 * @param {TreeNode} root
 * @return {number[][]}
 */
function levelOrderBottom(root) {
    if (root == null) return [];

    const result = [];
    const queue = [root];
    while (queue.length !== 0) {
        const levelNodes = [];
        for (let i = 0, len = queue.length; i < len; i++) {
            const { val, left, right } = queue.shift();
            levelNodes.push(val);
            if (left != null) queue.push(left);
            if (right !== null) queue.push(right);
        }
        result.unshift(levelNodes);
    }

    return result;
}
