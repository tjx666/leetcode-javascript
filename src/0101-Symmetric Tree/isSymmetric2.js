/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function isSymmetric(root) {
    if (root == null) return true;

    const queue = [[root.left, root.right]];
    while (queue.length !== 0) {
        const [left, right] = queue.shift() || [];
        // eslint-disable-next-line no-continue
        if (left == null && right == null) continue;
        if (left == null || right == null) return false;
        if (left.val !== right.val) return false;
        queue.push([left.left, right.right]);
        queue.push([left.right, right.left]);
    }

    return true;
}

module.exports = isSymmetric;
