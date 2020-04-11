/**
 * @param {TreeNode} root
 * @return {number}
 */
function sumOfLeftLeaves(root) {
    if (root == null) return 0;

    let sum = 0;
    const queue = [root];
    while (queue.length !== 0) {
        for (let i = 0, len = queue.length; i < len; i++) {
            const { left, right } = queue.shift();
            if (left != null) {
                queue.push(left);
                if (left.left == null && left.right == null) {
                    sum += left.val;
                }
            }

            if (right != null) {
                queue.push(right);
            }
        }
    }

    return sum;
}
