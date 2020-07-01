/**
 * 题述：给定一颗值不会重复的二叉树的根节点和两个节点的值 x 和 y，判断这两个节点是否为同一层但不是同一个父节点的关系（堂兄弟关系）
 * 思路：
 * 由于两个节点可能存在于树的任意一个位置，你需要遍历每一个节点，所以时间复杂度最低为 n
 * 可以遍历一遍所有的节点，记录下 x 和 y 的深度和父节点，根据定义判断即可
 * 时间复杂度：n, 遍历了一遍所有节点
 * 空间复杂度：H，树高
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
function isCousins(root, x, y) {
    // 栈中的每一个元素保存节点 node，父节点 parent，depth 节点所在的深度, brother 表示兄弟节点
    const stack = [{ node: root, parent: null, brother: null, depth: 0 }];
    let xElement;
    let yElement;
    while (stack.length !== 0) {
        const top = stack.pop();
        const { node, brother, depth } = top;
        if (node.val === x) {
            // 如果是真-兄弟节点可以提前退出
            if (brother && brother.val === y) return false;
            xElement = top;
        } else if (node.val === y) {
            if (brother && brother.val === x) return false;
            yElement = top;
        }

        if (node.right) {
            stack.push({ node: node.right, parent: node, brother: node.left, depth: depth + 1 });
        }

        if (node.left) {
            stack.push({ node: node.left, parent: node, brother: node.right, depth: depth + 1 });
        }
    }
    // 判断是否符合定义
    return xElement.depth === yElement.depth && xElement.parent !== yElement.parent;
}
