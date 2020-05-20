/**
 * 题述：给定一个二叉树，在树的最后一行找到最左边的值。
 * 思路：递归前序dfs, 递归函数传表示当前层数的参数，每次遍历到一个新的层次时，因为是前序 dfs 遍历方式，这个节点必然是最左边的节点
 * 时间复杂度：n，n 为节点数量
 * 空间复杂度：h，递归深度为树的高度
 * @param {TreeNode} root
 * @return {number}
 */
function findBottomLeftValue(root) {
    // 存放每一
    let deepestLevel = -1;
    let answer;
    function preOrderDFS(node, level) {
        if (node == null) return;
        if (level > deepestLevel) {
            deepestLevel = level;
            answer = node.val;
        }

        preOrderDFS(node.left, level + 1);
        preOrderDFS(node.right, level + 1);
    }

    preOrderDFS(root, 0);
    return answer;
}
