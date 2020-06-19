/**
 * 题述：给定一个不为空的二叉搜索树和一个目标值 target，请在该二叉搜索树中找到最接近目标值 target 的数值。
 * 思路：在二叉树中查找该元素，每遍历一个元素更新最接近 target 的值
 * 时间复杂度：H，树高
 * 空间复杂度：0
 * @param {TreeNode} root
 * @param {number} target
 * @return {number}
 */
function closestValue(root, target) {
    // 题目说了非空
    let result = root.val;
    let minDifference = Math.abs(root.val - target);
    let current = root;
    while (current != null) {
        const difference = Math.abs(current.val - target);
        if (difference < minDifference) {
            minDifference = difference;
            result = current.val;
        }

        // 由题意可知 target 不会等于节点值
        if (target > current.val) {
            current = current.right;
        } else {
            current = current.left;
        }
    }
    return result;
}
