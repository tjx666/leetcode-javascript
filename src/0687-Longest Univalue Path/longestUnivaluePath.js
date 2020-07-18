/**
 * 题述：给定一个二叉树，找到最长的路径，这个路径中的每个节点具有相同值。 这条路径可以经过也可以不经过根节点。
 * 思路：递归，递归函数功能为返回从传入节点出发的最长同值路径，但是因为遍历遍历方式采用的是后序遍历，使得和传入节点不同的子节点有机会遍历
 * 时间复杂度： n，n 为节点数
 * 空间复杂度；树的高度
 * @param {TreeNode} root
 * @return {number}
 */
function longestUnivaluePath(root) {
    let answer = 0;
    function postOrderTravel(node) {
        if (node == null) return 0;
        const left = postOrderTravel(node.left);
        const right = postOrderTravel(node.right);

        let leftLength = 0;
        let rightLength = 0;
        if (node.left && node.left.val === node.val) {
            leftLength += left + 1;
        }
        if (node.right && node.right.val === node.val) {
            rightLength += right + 1;
        }

        answer = Math.max(answer, leftLength + rightLength);
        return Math.max(leftLength, rightLength);
    }
    postOrderTravel(root);
    return answer;
}
