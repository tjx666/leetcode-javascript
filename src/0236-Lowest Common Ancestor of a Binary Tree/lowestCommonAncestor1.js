/**
 * 题述：二叉树的最近公共祖先
 * 思路：先 dfs 获取那两个节点从根节点到它们之间的路径数组，两个数组同时从头开始遍历，第一次两索引对应值不同的前一个节点就是最近公共祖先
 * 时间复杂度：n，n 为树的节点个数
 * 空间复杂度：不算栈空间就是树的高度，算的话就是 n
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
function lowestCommonAncestor(root, p, q) {
    const path = [];
    let pathP;
    let pathQ;
    function backTrace(node) {
        if (node == null || (pathP !== undefined && pathQ !== undefined)) return;

        path.push(node);
        if (pathP === undefined && node === p) {
            pathP = [...path];
        }

        if (pathQ === undefined && node === q) {
            pathQ = [...path];
        }

        if (node.left) {
            backTrace(node.left);
            path.pop();
        }

        if (node.right) {
            backTrace(node.right);
            path.pop();
        }
    }
    backTrace(root);

    let i = 0;
    while (pathP[i] === pathQ[i]) {
        i++;
    }

    return pathP[i - 1];
}
