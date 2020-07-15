/**
 * 题述：二叉树的垂直遍历
 * 思路：
 * 想办法给每一个元素记录它在当前层从左到右的索引
 * 参考 https://leetcode-cn.com/problems/binary-tree-vertical-order-traversal/solution/c-ceng-xu-bian-li-you-xu-hash-by-sptuan/
 * 时间复杂度：nlgn, 当树退化成链表的时候，最后对 map 进行排序需要 nlgn
 * 空间复杂度：n
 * @param {TreeNode} root
 * @return {number[][]}
 */
function verticalOrder(root) {
    if (root == null) return [];

    const queue = [{ node: root, index: 0 }];
    const indexValuesMapper = new Map();
    while (queue.length !== 0) {
        for (let i = 0, len = queue.length; i < len; i++) {
            const { node, index } = queue.shift();
            const values = indexValuesMapper.get(index) || [];
            values.push(node.val);
            indexValuesMapper.set(index, values);
            if (node.left != null) {
                queue.push({ node: node.left, index: index - 1 });
            }
            if (node.right != null) {
                queue.push({ node: node.right, index: index + 1 });
            }
        }
    }
    const result = [];
    for (const index of [...indexValuesMapper.keys()].sort((a, b) => a - b)) {
        result.push(indexValuesMapper.get(index));
    }
    return result;
}
