/**
 * 题述：克隆 n 叉树
 * 思路：递归，和 JS 深克隆对象其实是一样的...
 * 时间复杂度：n，n 为节点的个数，调用 cloneTree 的总次数就是节点的总个数
 * 空间复杂度：H，树高
 * @param {Node} node
 * @return {Node}
 */
function cloneTree(root) {
    if (root == null) return null;

    const clonedTree = {
        val: root.val,
        children: [],
    };

    for (let i = 0, len = root.children.length; i < len; i++) {
        clonedTree.children[i] = cloneTree(root.children[i]);
    }

    return clonedTree;
}
