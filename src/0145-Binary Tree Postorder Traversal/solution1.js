/**
 * 题述：二叉树的后序遍历
 * 思路：递归
 * 时间复杂度：n, n 为节点的数量
 * 空间复杂度：n，当链表退化成单链表的时候
 * @param {TreeNode} root
 * @return {number[]}
 */
function postorderTraversal(root) {
    const ans = [];
    function recursiveTraversal(node) {
        if (node == null) return;

        const { val, left, right } = node;
        recursiveTraversal(left);
        recursiveTraversal(right);
        ans.push(val);
    }
    recursiveTraversal(root);
    return ans;
}
