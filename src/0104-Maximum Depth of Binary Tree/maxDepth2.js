/**
 * 获取二叉树的最大深度
 *
 * 这不就是考层序遍历嘛...
 *
 * @param {TreeNode} root
 * @return {number}
 */
function maxDepth(root) {
    if (root === null) return 0;

    const queue = [root];
    let depth = 0;
    while (queue.length !== 0) {
        depth++;
        for (let i = 0, len = queue.length; i < len; i++) {
            const front = queue.shift();
            if (front.left) queue.push(front.left);
            if (front.right) queue.push(front.right);
        }
    }

    return depth;
}

module.exports = maxDepth;
