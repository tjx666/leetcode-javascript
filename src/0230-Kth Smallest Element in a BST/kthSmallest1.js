/**
 * 题述：给定一个二叉搜索树，编写一个函数 kthSmallest 来查找其中第 k 个最小的元素。你可以假设 k 总是有效的，1 ≤ k ≤ 二叉搜索树元素个数。
 * 思路：按照中序便利顺序遍历，第 k 次遍历时的元素即使所求答案，递归版比较简单所以这里只写一下非递归版
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
function kthSmallest(root, k) {
    const stack = [];
    let current = root;
    let nth = 0;
    while (current || stack.length !== 0) {
        if (current) {
            stack.push(current);
            current = current.left;
        } else {
            const top = stack.pop();
            nth++;
            if (nth === k) {
                return top.val;
            }
            current = top.right;
        }
    }
}
