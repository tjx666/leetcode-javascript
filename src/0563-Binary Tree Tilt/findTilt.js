/**
 * @param {TreeNode} root
 * @return {number}
 */
function findTilt(root) {
    let tilt = 0;

    function sum(node) {
        if (node == null) return 0;

        const { val, left, right } = node;
        const leftSum = sum(left);
        const rightSum = sum(right);
        tilt += Math.abs(leftSum - rightSum);

        return val + leftSum + rightSum;
    }
    sum(root);

    return tilt;
}
