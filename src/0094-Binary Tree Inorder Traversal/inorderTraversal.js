/**
 * 递归版太简单就不写了
 *
 * @param {TreeNode} root
 * @return {number[]}
 */
function inorderTraversal(root) {
    const result = [];
    if (root == null) return result;

    const stack = [];
    let current = root;
    while (current != null || stack.length !== 0) {
        if (current != null) {
            stack.push(current);
            current = current.left;
        } else {
            current = stack.pop();
            result.push(current.val);
            current = current.right;
        }
    }

    return result;
}
