/**
 * 题述：
 * 给定一个二叉树，它的每个结点都存放着一个整数值。
 * 找出路径和等于给定数值的路径总数。路径不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。
 * 思路：
 * 这道题让我想到剑指 offer 中判断一颗树是否为另一颗树的子结构那道题
 * 因为题目不要求从根节点开始，因为我们需要先 DFS 遍历每一个节点，把当前节点视为起始点，再从当前节点 DFS 找到路径和为给定数值的路径
 * 时间复杂度：n²
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
function pathSum(root, sum) {
    let count = 0;
    function dfsFindPath(node, rest) {
        if (node === null) return;
        const updatedRest = rest - node.val;
        if (updatedRest === 0) {
            count++;
            // 这里不能立即 return，因为有可能继续深搜还可以找到和为给定值的路径，例如和为 0，当前路径 -1, 1, 但是继续深搜可以有 -1, 1, -2, 2
        }

        dfsFindPath(node.left, updatedRest);
        dfsFindPath(node.right, updatedRest);
    }

    function dfsFindStart(node) {
        if (node === null) return;
        dfsFindPath(node, sum);
        dfsFindStart(node.left);
        dfsFindStart(node.right);
    }

    dfsFindStart(root);
    return count;
}
