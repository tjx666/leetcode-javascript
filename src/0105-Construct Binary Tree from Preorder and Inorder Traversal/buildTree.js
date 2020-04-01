/**
 * 根据前序遍历数组和中序数组构造二叉树
 *
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 * @example
 *
 * preorder = [3,9,20,15,7]
 * inorder = [9,3,15,20,7]
 *   3
 *  / \
 * 9  20
 *   /  \
 *  15   7
 */
function buildTree(preorder, inorder) {
    if (preorder.length === 0) return null;

    let preIndex = 0;
    const inorderValIndexMap = new Map();
    for (let i = 0, len = inorder.length; i < len; i++) {
        inorderValIndexMap.set(inorder[i], i);
    }

    function buildRecursive(inorderLeft, inorderRight) {
        if (inorderLeft === inorderRight) return null;
        const preVal = preorder[preIndex];
        const node = {
            val: preVal,
        };
        preIndex++;
        const preNodeIndex = inorderValIndexMap.get(preVal);
        node.left = buildRecursive(inorderLeft, preNodeIndex);
        node.right = buildRecursive(preNodeIndex + 1, inorderRight);

        return node;
    }

    return buildRecursive(0, inorder.length);
}
