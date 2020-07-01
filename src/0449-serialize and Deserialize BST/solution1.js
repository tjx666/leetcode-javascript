/**
 * Encodes a tree to a single string.
 * 思路：
 * 一颗二叉树可以通过前序 + 中序或者后序 + 中序还原出来，而二叉搜索树的中序序列是有序的，
 * 我们可以通过将前序遍历序列或者后序遍历序列排序而得到中序遍历序列
 * 因此只需要保存前序序列或者中序序列即可
 * 时间复杂度：n，遍历所有节点一遍
 * 空间复杂度：H
 * @param {TreeNode} root
 * @return {string}
 */
function serialize(root) {
    let str = '';
    function preOrderTravel(node) {
        if (node == null) return;
        str += ` ${node.val}`;
        preOrderTravel(node.left);
        preOrderTravel(node.right);
    }
    preOrderTravel(root);
    return str.slice(1);
}

/**
 * Decodes your encoded data to tree.
 * 思路：这里其实并不需要去对保存的前序序列排序，这里利用中序序列是有序的可以获取在每次构造节点是该节点的范围
 * 时间复杂度：n
 * 空间复杂度：H
 * @param {string} data
 * @return {TreeNode}
 */
function deserialize(data) {
    const nums = data
        .split(' ')
        .filter((numStr) => numStr.trim() !== '')
        .map((numStr) => Number(numStr));
    let preIndex = 0;
    function helper(lower, higher) {
        if (preIndex === nums.length) return null;
        const val = nums[preIndex];
        if (val < lower || val > higher) return null;
        preIndex++;
        const newNode = { val };
        newNode.left = helper(lower, val);
        newNode.right = helper(val, higher);
        return newNode;
    }
    return helper(-Infinity, Infinity);
}
