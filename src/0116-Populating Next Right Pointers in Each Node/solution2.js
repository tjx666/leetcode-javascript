/**
 * 思路：递归
 * @param {Node} root
 * @return {Node}
 */
function connect(root) {
    if (root === null) return null;

    if (root.left) {
        root.left.next = root.right;
        if (root.next) {
            root.right.next = root.next.left;
        }

        connect(root.left);
        connect(root.right);
    }

    return root;
}
