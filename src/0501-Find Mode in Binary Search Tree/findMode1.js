/**
 * 题述：给定一个有相同值的二叉搜索树（BST），找出 BST 中的所有众数（出现频率最高的元素）。
 * 思路:
 * BST 的最大特点就是中序遍历是有序的，我们可以采用中序遍历将题目转换成求已排序数组的众数
 * 其实也就是求最长连续重复元素，由于题目说不计算递归消耗的栈空间，这里使用递归版的中序遍历空间复杂度更低
 * 时间复杂度：n，n 为树的节点数量
 * 空间复杂度：Max(众数的个数, 递归栈空间)，递归深度为树高
 * @param {TreeNode} root
 * @return {number[]}
 */
function findMode(root) {
    if (root == null) return [];

    let result = [];
    let lastNode = { val: NaN };
    let maxCount = 0;
    let currentCount = 0;
    function inOrderTravel(node) {
        if (node == null) return;

        inOrderTravel(node.left);

        if (node.val !== lastNode.val) {
            if (currentCount === maxCount) {
                result.push(lastNode.val);
            } else if (currentCount > maxCount) {
                result = [lastNode.val];
                maxCount = currentCount;
            }
            currentCount = 1;
        } else {
            currentCount++;
        }
        lastNode = node;

        inOrderTravel(node.right);
    }
    inOrderTravel(root);

    if (currentCount === maxCount) {
        result.push(lastNode.val);
    } else if (currentCount > maxCount) {
        result = [lastNode.val];
        maxCount = currentCount;
    }

    return result;
}
