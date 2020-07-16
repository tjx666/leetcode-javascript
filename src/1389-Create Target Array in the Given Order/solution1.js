/**
 * 题述：既定顺序创建目标数组，https://leetcode-cn.com/problems/create-target-array-in-the-given-order/
 * 思路：按部就班
 * 时间复杂度：n²
 * 空间复杂度：n
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
function createTargetArray(nums, index) {
    const { length } = nums;
    const target = [];
    for (let i = 0; i < length; i++) {
        const insertIndex = index[i];
        target.splice(insertIndex, 0, nums[i]);
    }
    return target;
}
