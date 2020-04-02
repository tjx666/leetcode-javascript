/**
 * 从中序和后序遍历数组构造二叉树
 * 思路：
 * 和从前序和后序遍历数组构造二叉树其实很像
 * 后序遍历的最后一个元素即是根节点 root
 * 在前序遍历数组中 root 左边的是左子树节点，右边是右子树节点
 * 注意的是后序遍历中根节点左边是右节点，所以需要先遍历右节点再左节点
 *
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
function buildTree(inorder, postorder) {
    const { length } = inorder;
    if (length === 0) return null;

    const inorderValIndexMapper = new Map();
    for (let i = 0; i < length; i++) {
        inorderValIndexMapper.set(inorder[i], i);
    }

    let preIndex = length - 1;
    function travelRecursive(leftIndex, rightIndex) {
        if (leftIndex === rightIndex) return null;

        const val = postorder[preIndex];
        const root = { val };
        preIndex--;
        const index = inorderValIndexMapper.get(val);
        root.right = travelRecursive(index + 1, rightIndex);
        root.left = travelRecursive(leftIndex, index);
        return root;
    }

    return travelRecursive(0, length);
}
