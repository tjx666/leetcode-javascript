/**
 * 题述：输出二叉树右视图
 * 思路：
 * 最符合直觉的做法是层序遍历，取每一层最右边的节点即可
 * 这里只写一种 dfs 解法，采取先遍历自身，再遍历右节点，再遍历左节点的顺序遍历，
 * 这样第一次遍历到每一层的节点便是右视图看到的节点
 * 时间复杂度：n 个节点需要遍历 n 次
 * 空间复杂度: O(n)。最坏情况下，栈内会包含接近树高度的结点数量，占用 O(n) 的空间
 * @param {TreeNode} root
 * @return {number[]}
 */
function rightSideView(root) {
    if (root == null) return [];

    const result = [];
    const stack = [{ node: root, depth: 0 }];
    let currentDepth = 0;
    while (stack.length !== 0) {
        const { node, depth } = stack.pop();
        if (depth === currentDepth) {
            result.push(node.val);
            currentDepth++;
        }

        if (node.left != null) {
            stack.push({ node: node.left, depth: depth + 1 });
        }

        if (node.right != null) {
            stack.push({ node: node.right, depth: depth + 1 });
        }
    }

    return result;
}
