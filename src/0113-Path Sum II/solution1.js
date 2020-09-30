/**
 * 题述：给定一个二叉树和一个目标和，找到所有从根节点到叶子节点路径总和等于给定目标和的路径。
 * 思路：利用回溯减少递归过程传递 path 的空间
 * 时间复杂度：在最坏情况下，树的上半部分为链状，下半部分为完全二叉树，并且从根节点到每一个叶子节点的路径都符合题目要求。
 * 此时，路径的数目为 O(N)O(N)，并且每一条路径的节点个数也为 O(N)O(N)，因此要将这些路径全部添加进答案中，时间复杂度为 O(N^2)O(N
 * 空间复杂度：树的最大深度
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
function pathSum(root, sum) {
    const paths = [];
    const path = [];

    function dfs(node, rest) {
        if (node == null) return;
        if (node.left == null && node.right == null) {
            if (rest - node.val === 0) {
                paths.push([...path, node.val]);
            }
            return;
        }

        if (node.left) {
            path.push(node.val);
            dfs(node.left, rest - node.val);
            path.pop();
        }

        if (node.right) {
            path.push(node.val);
            dfs(node.right, rest - node.val);
            path.pop();
        }
    }

    dfs(root, sum);
    return paths;
}
