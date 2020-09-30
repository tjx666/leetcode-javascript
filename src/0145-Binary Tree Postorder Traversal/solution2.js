/**
 * 题述：二叉树的后序遍历
 * 思路：如果一个节点子节点都遍历完了才遍历自身
 * 事件复杂度：n, n 为节点个数
 * 空间复杂度：n
 * @param {TreeNode} root
 * @return {number[]}
 */
function postorderTraversal(root) {
    if (root == null) return [];
    const stack = [root];
    const traveledSet = new Set();
    const result = [];
    while (stack.length !== 0) {
        const { left, right } = stack[stack.length - 1];
        let childrenTraveled = true;

        if (right && !traveledSet.has(right)) {
            stack.push(right);
            childrenTraveled = false;
        }

        if (left && !traveledSet.has(left)) {
            stack.push(left);
            childrenTraveled = false;
        }

        if (childrenTraveled) {
            const top = stack.pop();
            result.push(top.val);
            traveledSet.add(top);
        }
    }

    return result;
}
