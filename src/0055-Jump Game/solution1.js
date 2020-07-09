/**
 * 题述：
 * 给定一个非负整数数组，你最初位于数组的第一个位置。
 * 数组中的每个元素代表你在该位置可以跳跃的最大长度。
 * 判断你是否能够到达最后一个位置。
 * 思路：贪心法，尽量向前遍历元素，不断更新能到达的最远距离
 * 时间复杂度：n
 * 空间复杂度：0
 * @param {number[]} nums
 * @return {boolean}
 */
function canJump(nums) {
    let maxIndex = 0;
    for (let i = 0, len = nums.length; i < len; i++) {
        if (i > maxIndex) return false;
        const currentMax = i + nums[i];
        if (currentMax > maxIndex) maxIndex = currentMax;
        if (maxIndex > len) return true;
    }
    return true;
}
