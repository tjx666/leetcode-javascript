/**
 * 获取二叉树所有路径数组
 *
 * @param {TreeNode} root
 * @return {string[]}
 */
function binaryTreePaths(root) {
    if (root == null) return [];
    const pathArray = [];

    function travelRecursive(node, path) {
        if (node == null) return;
        path += `->${node.val}`;
        if (node.left == null && node.right == null) {
            pathArray.push(path.slice(2));
        }

        travelRecursive(node.left, path);
        travelRecursive(node.right, path);
    }

    travelRecursive(root, '');

    return pathArray;
}

module.exports = binaryTreePaths;
