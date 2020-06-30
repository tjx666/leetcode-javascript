/**
 * 题述：获取完全二叉树的节点个数
 * 思路：
 * 解法 1 没有利用到完全二叉树的特点
 * 1: 最后一层上面的节点构成的是一颗满二叉树
 * 2. 完全二叉树最后一层节点是从左到右紧挨着排列的
 * 3. 由 1, 2 可的出结论，求完全二叉树的深度只需要前序 DFS 到底即可
 * 设树的深度为 d，只有根节点时 d 为 0，总的节点数 = 最后一层节点数之前的节点数 + 最后一层节点数
 * 最后一层之前共有 2 的 d 次方 -1 个，这些节点我们不需要遍历，只需要计算出深度即可算出
 * 由于性质 2，计算最后一层节点的节点数可以使用二分搜索
 * 时间复杂度：logn * logn, 最后一层二分需要 logn，每次二分时判断节点是否存在是需要 logn  的时间
 * 空间复杂度：1
 * @param {TreeNode} root
 * @return {number}
 */
function countNodes(root) {
    if (root == null) return 0;

    let depth = -1;
    let current = root;
    while (current) {
        depth++;
        current = current.left;
    }

    function isExisted(index) {
        let left = 0;
        let right = 2 ** depth - 1;
        let node = root;
        for (let i = 0; i < depth; i++) {
            const mid = ((left + right) / 2) | 0;
            if (index <= mid) {
                node = node.left;
                right = mid;
            } else {
                node = node.right;
                left = mid + 1;
            }
        }
        return node != null;
    }

    let left = 0;
    let right = 2 ** depth - 1;
    while (left <= right) {
        const mid = ((left + right) / 2) | 0;
        if (isExisted(mid)) {
            left += 1;
        } else {
            right -= 1;
        }
    }

    return 2 ** depth - 1 + left;
}
