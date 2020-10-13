/**
 * 题述：给你一棵所有节点为非负值的 `二叉搜索树` ，请你计算树中任意两节点的差的绝对值的最小值。
 * 思路：利用二叉搜索树中序遍历是有序的的特点
 * 时间复杂度：n，n 为节点个数
 * 空间复杂度：当树退化成单链表时就是 n
 * @param {TreeNode} root
 * @return {number}
 */
function getMinimumDifference(root) {
    let minDiff = Infinity;
    let lastNode = null;

    function travelNode(node) {
        if (lastNode === null) {
            lastNode = node;
            return;
        }
        const diff = node.val - lastNode.val;
        if (diff < minDiff) {
            minDiff = diff;
        }
        lastNode = node;
    }

    function middleOrderTraversal(node) {
        const { left, right } = node;

        if (left) {
            middleOrderTraversal(node.left);
        }

        travelNode(node);

        if (right) {
            middleOrderTraversal(right);
        }
    }

    middleOrderTraversal(root);

    return minDiff;
}

const testNode = {
    val: 1,
    right: {
        val: 3,
        left: {
            val: 2,
        },
    },
};

getMinimumDifference(testNode);
