/**
 * 题述：判断一颗树是否是二叉搜索树
 * 思路：判断其中序遍历是否是从小到大的顺序
 * 时间复杂度：n，递归次数是节点数量
 * 空间复杂度：H，树高
 * @param {TreeNode} root
 * @return {boolean}
 */
function isValidBST(root) {
    let lastNodeVal = -Infinity;
    function inOrderTravel(node) {
        if (node == null) return true;

        if (!inOrderTravel(node.left)) return false;

        if (node.val <= lastNodeVal) {
            return false;
        }
        lastNodeVal = node.val;

        return inOrderTravel(node.right);
    }
    return inOrderTravel(root);
}
