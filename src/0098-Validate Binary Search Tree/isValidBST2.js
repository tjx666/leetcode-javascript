/**
 * 题述：判断一颗树是否是二叉搜索树
 * 思路：使用一个辅助函数判断当前节点值是否大于左边界小于右边界
 * 时间复杂度：n，递归次数是节点数量
 * 空间复杂度：H，树高
 * @param {TreeNode} root
 * @return {boolean}
 */
function isValidBST(root) {
    function helper(node, low, hight) {
        if (node == null) return true;

        if (node.val <= low || node.val >= hight) return false;

        return helper(node.left, low, node.val) && helper(node.right, node.val, hight);
    }
    return helper(root, -Infinity, Infinity);
}
