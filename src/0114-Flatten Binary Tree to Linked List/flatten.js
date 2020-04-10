/**
 * 将二叉树按照前序遍历的顺序构造成一个链表
 * 这道题递归更难理解，非递归其实很简单
 * 循环遍历右节点，如果有左节点就把左节点接到右节点，并把右节点接到左子树最右节点
 *
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
function flatten(root) {
    if (root == null) return null;

    while (root != null) {
        const { left, right } = root;

        if (left != null) {
            root.left = null;
            root.right = left;

            let current = left;
            while (current.right != null) {
                current = current.right;
            }
            current.right = right;
        }

        root = root.right;
    }
}
