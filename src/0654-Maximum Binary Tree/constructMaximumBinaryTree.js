/**
 * 题述：通过给定的数组构建最大二叉树，并且输出这个树的根节点。
 * 思路: 递归构造
 * 时间复杂度：n平方，n 为 nums 长度，最复杂的情况是有序的情况
 * 空间复杂度：n，递归 n 次
 *
 * 给定一个不含重复元素的整数数组。一个以此数组构建的最大二叉树定义如下：
 * 二叉树的根是数组中的最大元素。
 * 左子树是通过数组中最大值左边部分构造出的最大二叉树。
 * 右子树是通过数组中最大值右边部分构造出的最大二叉树。
 * @param {number[]} nums
 * @return {TreeNode}
 */
function constructMaximumBinaryTree(nums) {
    function constructRecursive(left, right) {
        if (left > right) return null;

        let maxIndex = left;
        for (let i = left; i <= right; i++) {
            if (nums[i] > nums[maxIndex]) {
                maxIndex = i;
            }
        }

        const node = { val: nums[maxIndex] };
        node.left = constructRecursive(left, maxIndex - 1);
        node.right = constructRecursive(maxIndex + 1, right);
        return node;
    }
    return constructRecursive(0, nums.length - 1);
}
