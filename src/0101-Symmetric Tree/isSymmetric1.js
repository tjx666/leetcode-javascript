/**
 * 判断一颗树是不是镜像树，
 * 递归解法：
 * 如果一颗树是镜像树，那么它的左子树和右子树也是镜像的
 * 判断两颗树是否是镜像即判断他俩是否相等，并且左子树的左孩子应该和右子树的右孩子也是镜像对称，左子树的右孩子应该和右子树的左孩子也是镜像对称
 *
 * @param {TreeNode} root
 * @return {boolean}
 */
function isSymmetric(root) {
    if (root == null) return true;
    return isMirror(root.left, root.right);
}

function isMirror(left, right) {
    if (left == null && right == null) {
        return true;
    }

    if (left == null || right == null) {
        return false;
    }

    return (
        left.val === right.val &&
        isMirror(left.left, right.right) &&
        isMirror(left.right, right.left)
    );
}

module.exports = isSymmetric;
