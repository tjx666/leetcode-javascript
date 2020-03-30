/**
 * 获取二叉树所有路径数组
 *
 * @param {TreeNode} root
 * @return {string[]}
 */
function binaryTreePaths(root) {
    if (root == null) return [];
    const pathArray = [];
    const queue = [{ node: root, path: `->${root.val}` }];
    while (queue.length !== 0) {
        const { node, path } = queue.shift();
        const { left, right } = node;
        if (left == null && right == null) {
            pathArray.push(path.slice(2));
        }

        if (left != null) {
            queue.push({ node: left, path: `${path}->${left.val}` });
        }

        if (right != null) {
            queue.push({ node: right, path: `${path}->${right.val}` });
        }
    }

    return pathArray;
}

module.exports = binaryTreePaths;
