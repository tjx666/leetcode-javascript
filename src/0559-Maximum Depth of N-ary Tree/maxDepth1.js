/**
 * 题述：获取 n 叉树的深度
 * 思路：使用递归或者迭代遍历下一层节点的时候带上当前层的深度即可
 * 时间复杂度：n
 * 空间复杂度：最差为 n，退化为单链表的时候
 * @param {Node} root
 * @return {number}
 */
function maxDepth(root) {
    if (root == null) return 0;

    let max = 0;
    const stack = [{ node: root, depth: 1 }];
    while (stack.length !== 0) {
        const { node, depth } = stack.pop();
        if (depth > max) max = depth;
        for (let i = node.children.length - 1; i >= 0; i--) {
            stack.push({ node: node.children[i], depth: depth + 1 });
        }
    }
    return max;
}
