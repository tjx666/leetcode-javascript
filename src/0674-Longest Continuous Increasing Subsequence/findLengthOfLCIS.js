/**
 * 题述：返回最长持续递增序列长度
 * 思路：使用一个变量保存持续递增序列长度 acc, 每次和前一个元素比较，如果不大于前一个就将 acc 置为 1
 * 时间复杂度：n，每个元素遍历一次
 * 空间复杂度：1
 * @param {number[]} nums
 * @return {number}
 */
function findLengthOfLCIS(nums) {
    const { length } = nums;
    if (length <= 1) return length;

    let max = 1;
    let acc = 1;
    for (let i = 1; i < length; i++) {
        if (nums[i] <= nums[i - 1]) {
            acc = 1;
        } else {
            acc++;
            max = Math.max(max, acc);
        }
    }
    return max;
}
