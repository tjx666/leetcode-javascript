/**
 * 题述：判断树的所有节点值是否相同
 * 思路：考察树的遍历，这里写个后序遍历非递归版
 * 时间复杂度：n
 * 空间复杂度：n
 * @param {TreeNode} root
 * @return {boolean}
 */
function isUnivalTree(root) {
    if (root == null) return [];
    const stack = [root];
    const value = root.val;
    const traveledSet = new Set();
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
            if (top.val !== value) return false;
            traveledSet.add(top);
        }
    }
    return true;
}
