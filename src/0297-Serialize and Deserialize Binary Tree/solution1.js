/**
 * Encodes a tree to a single string.
 * 思路：层序遍历
 * 时间复杂度：n，n 为节点数，所有的节点被遍历一遍
 * 空间复杂度：n，满二叉树的情况下最后一层节点数是 n / 2 - 1
 * @param {TreeNode} root
 * @return {string}
 */
function serialize(root) {
    if (root == null) return '[]';

    const strArr = [root.val];
    const queue = [root];
    while (queue.length !== 0) {
        for (let i = 0, len = queue.length; i < len; i++) {
            const { left, right } = queue.shift();
            strArr.push(left ? left.val : 'null');
            strArr.push(right ? right.val : 'null');
            if (left != null) queue.push(left);
            if (right != null) queue.push(right);
        }
    }
    for (let i = strArr.length - 1; i >= 0; i--) {
        if (strArr[i] === 'null') {
            strArr.pop();
        } else {
            break;
        }
    }
    return `[${strArr.toString()}]`;
}

/**
 * Decodes your encoded data to tree.
 * 思路：逆操作
 * 时间复杂度：n
 * 空间复杂度：n
 * @param {string} data
 * @return {TreeNode}
 */
function deserialize(data) {
    const nums = JSON.parse(data);
    if (nums.length === 0) return null;

    const root = { val: nums.shift() };
    const queue = [root];
    while (queue.length !== 0) {
        for (let i = 0, len = queue.length; i < len; i++) {
            const node = queue.shift();

            const leftVal = nums.shift();
            node.left = leftVal == null ? null : { val: leftVal };
            const rightVal = nums.shift();
            node.right = rightVal == null ? null : { val: rightVal };

            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
    }
    return root;
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
