/**
 * z 形遍历
 *
 * @param {TreeNode} root
 * @return {number[][]}
 */
function zigzagLevelOrder(root) {
    if (root == null) return [];

    const result = [[]];
    const queue = [root, null];
    let leftToRight = true;
    while (queue.length !== 0) {
        const front = queue.shift();
        if (front != null) {
            const level = result.length - 1;
            leftToRight ? result[level].push(front.val) : result[level].unshift(front.val);
            const { left, right } = front;
            if (left) queue.push(left);
            if (right) queue.push(right);
        } else if (queue.length > 0) {
            queue.push(null);
            result.push([]);
            leftToRight = !leftToRight;
        }
    }

    return result;
}
