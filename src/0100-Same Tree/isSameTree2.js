/**
 * 非递归版，只要遍历过程中每次遍历的元素是相同的就可以保证当前的子树是相同的
 * 本质是贪心
 *
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
function isSameTree(p, q) {
    const queue = [[p, q]];
    while (queue.length !== 0) {
        const { length } = queue;
        for (let i = 0; i < length; i++) {
            const [first, second] = queue.shift();
            // eslint-disable-next-line no-continue
            if (first == null && second == null) continue;
            if (first == null || second == null) return false;
            if (first.val !== second.val) return false;

            queue.push([first.left, second.left]);
            queue.push([first.right, second.right]);
        }
    }

    return true;
}
