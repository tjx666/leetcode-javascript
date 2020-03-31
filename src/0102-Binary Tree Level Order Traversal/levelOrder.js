/**
 * 层序遍历非递归版其实更简单
 * 这道题只写一下递归版
 * 由于递归遍历就是深度优先的，所以需要每次递归的时候转递一个深度参数
 * 使用前序遍历或中序遍历都可以，只要确保同一级的节点是最后是从左到右的顺序加入的就行
 *
 *
 * @param {TreeNode} root
 * @return {number[][]}
 */
function levelOrder(root) {
    const result = [];
    if (root == null) return result;

    function travel(node, level) {
        if (result.length === level) {
            result.push([]);
        }

        const { left, right } = node;
        if (left) {
            travel(left, level + 1);
        }
        result[level].push(node.val);
        if (right) {
            travel(right, level + 1);
        }
    }
    travel(root, 0);

    return result;
}
