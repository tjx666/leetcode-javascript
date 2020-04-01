/**
 * 合并二叉树
 *
 * 非递归解法，合并到 t1 上
 *
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
function mergeTrees(t1, t2) {
    if (t1 == null) return t2;
    if (t2 == null) return t1;

    t1.val += t2.val;
    const queue = [[t1, t2]];
    while (queue.length !== 0) {
        const [top1, top2] = queue.shift();
        if (top1.left == null && top2.left != null) {
            top1.left = top2.left;
        } else if (top1.left != null && top2.left != null) {
            top1.left.val += top2.left.val;
            queue.push([top1.left, top2.left]);
        }

        if (top1.right == null && top2.right != null) {
            top1.right = top2.right;
        } else if (top1.right != null && top2.right != null) {
            top1.right.val += top2.right.val;
            queue.push([top1.right, top2.right]);
        }
    }

    return t1;
}
