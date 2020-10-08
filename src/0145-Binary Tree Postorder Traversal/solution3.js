/**
 * 题述：二叉树的后序遍历
 * 思路：
 * 后序遍历的顺序是 left -> right -> root, 如果我们按照相反的顺序 root -> right -> left  遍历得到遍历数组
 * 再逆一下序，那就能得到后序遍历的结果
 * 时间复杂度：n, n 为节点的数量
 * 空间复杂度：n，当链表退化成单链表的时候
 * @param {TreeNode} root
 * @return {number[]}
 */
function postorderTraversal(root) {
    const ans = [];
    const stack = [];
    let current = root;
    while (current != null || stack.length !== 0) {
        if (current) {
            ans.push(current.val);
            if (current.left) {
                stack.push(current.left);
            }
            current = current.right;
        } else {
            current = stack.pop();
        }
    }
    ans.reverse();
    return ans;
}
