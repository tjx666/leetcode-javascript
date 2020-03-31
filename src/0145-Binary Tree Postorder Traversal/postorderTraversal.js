/**
 * 这里只写非递归版的
 * 其实中序遍历和后续遍历时刚好左右相反的操作
 *
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
