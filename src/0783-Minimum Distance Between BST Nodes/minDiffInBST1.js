/**
 * 题述：给定一个二叉搜索树的根节点 root，返回树中任意两节点的差的最小值。
 * 思路：其实还是考察中序遍历，这里我就写一个非递归版的
 * 时间复杂度：n，遍历了 n 个树节点
 * 空间复杂度：H，树高
 * @param {TreeNode} root
 * @return {number}
 */
function minDiffInBST(root) {
    const stack = [];
    let current = root;
    let minDifference;
    let lastValue;
    while (current || stack.length !== 0) {
        if (current) {
            stack.push(current);
            current = current.left;
        } else {
            const top = stack.pop();
            const difference = lastValue === undefined ? Infinity : top.val - lastValue;
            if (minDifference === undefined || difference < minDifference)
                minDifference = difference;
            lastValue = top.val;
            current = top.right;
        }
    }
    return minDifference;
}
