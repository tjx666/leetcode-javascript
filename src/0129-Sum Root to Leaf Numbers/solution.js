/**
 * 题述：
 * 给定一个二叉树，它的每个结点都存放一个 0-9 的数字，每条从根到叶子节点的路径都代表一个数字。
 * 例如，从根到叶子节点路径 1->2->3 代表数字 123。
 * 思路：递归的时候把当前路径传下去即可
 * 时间复杂度：n，n 为节点数
 * 空间复杂度：n，当 树退化成单链表时
 * @param {TreeNode} root
 * @return {number}
 */
function sumNumbers(root) {
    let ans = 0;
    function traversal(node, sum) {
        if (node == null) return;

        const { val, left, right } = node;

        sum = sum * 10 + val;
        if (left == null && right == null) {
            ans += sum;
            return;
        }

        if (left) {
            traversal(left, sum);
        }

        if (right) {
            traversal(right, sum);
        }
    }

    traversal(root, 0);
    return ans;
}
