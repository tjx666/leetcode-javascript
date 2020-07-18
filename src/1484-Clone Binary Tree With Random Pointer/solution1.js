/**
 * 题述：克隆含随机指针的二叉树
 * 思路：先 DFS 深克隆，再 DFS 一遍设置 random，使用一个 map 来保存原节点和克隆节点的映射处理循环引用以及设置 random 时加速访问
 * 时间复杂度: n，n 为节点个数
 * 空间复杂度：n，树为单链表的时候
 * @param {Node} root
 * @return {NodeCopy}
 */
function copyRandomBinaryTree(root) {
    const clonedMap = new Map();
    function cloneDeep(node) {
        if (node == null) return null;

        if (clonedMap.get(node)) {
            return clonedMap.get(node);
        }
        const cloned = { val: node.val };
        clonedMap.set(node, cloned);
        cloned.left = cloneDeep(node.left);
        cloned.right = cloneDeep(node.right);
        return node;
    }
    const cloned = cloneDeep(root);
    function setRandom(node) {
        if (node == null) return;
        clonedMap.get(node).random = clonedMap.get(node.random);
        setRandom(node.left);
        setRandom(node.right);
    }
    setRandom(cloned);
    return cloned;
}
