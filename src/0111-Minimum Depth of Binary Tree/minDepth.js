/**
 * 二叉树最小深度
 * 递归太简单我就不写了
 * 深度优先也行，但是必须遍历所有节点，然后取所有叶子节点深度最小的那个
 * 这题明显更适合用广度优先
 *
 * @param {TreeNode} root
 * @return {number}
 */
function minDepth(root) {
    if (root == null) return 0;

    const queue = [root];
    let depth = 0;
    while (queue.length !== 0) {
        depth++;
        const { length } = queue;
        for (let i = 0; i < length; i++) {
            const { left, right } = queue.shift();
            if (left == null && right == null) {
                return depth;
            }

            if (left != null) {
                queue.push(left);
            }

            if (right != null) {
                queue.push(right);
            }
        }
    }
}
