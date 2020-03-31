/**
 * 二叉树前序遍历
 * 只写一下非递归版的
 *
 * @param {TreeNode} root
 * @return {number[]}
 */
function preorderTraversal(root) {
    if (root == null) return [];

    const result = [];
    const stack = [];
    let current = root;
    while (current != null || stack.length !== 0) {
        if (current != null) {
            result.push(current.val);
            stack.push(current);
            current = current.left;
        } else {
            const top = stack.pop();
            current = top.right;
        }
    }

    return result;
}
