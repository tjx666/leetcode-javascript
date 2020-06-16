/**
 * 题述：
 * 将一个按照升序排列的有序数组，转换为一棵高度平衡二叉搜索树。
 * 本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。
 * 思路：
 * 要想 BST 平衡，尽量让每个节点的左子树节点数量和右节点数量相等，因此应该将有序数组的中间元素作为根节点，
 * 左边元素和右边元素相差不会超过 1， 分别用于构建左右子树
 * 时间复杂度：n，每次递归构造一个节点
 * 空间复杂度: n
 * @param {number[]} nums
 * @return {TreeNode}
 */
function sortedArrayToBST(nums) {
    function helper(left, right) {
        if (left > right) return null;

        const mid = ((left + right) / 2) | 0;
        const root = { val: nums[mid] };
        root.left = helper(left, mid - 1);
        root.right = helper(mid + 1, right);

        return root;
    }
    return helper(0, nums.length - 1);
}
