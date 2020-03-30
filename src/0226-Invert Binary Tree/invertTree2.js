/**
 * 反转二叉树
 * 遍历每一个节点额时候都交换左右节点即可
 * 这里采用层序遍历的方式非递归遍历每一个元素
 *
 * @param {TreeNode} root
 * @return {TreeNode}
 */
function invertTree(root) {
    if (root == null) return null;

    const queue = [root];
    while (queue.length !== 0) {
        const front = queue.shift();
        [front.left, front.right] = [front.right, front.left];
        if (front.left) queue.push(front.left);
        if (front.right) queue.push(front.right);
    }

    return root;
}

module.exports = invertTree;
