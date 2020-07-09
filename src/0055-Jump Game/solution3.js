/**
 * 题述：
 * 给定一个非负整数数组，你最初位于数组的第一个位置。
 * 数组中的每个元素代表你在该位置可以跳跃的最大长度。
 * 判断你是否能够到达最后一个位置。
 * 思路：动态规划
 * 时间复杂度：n², n 为 nums 长度
 * 空间复杂度：n
 * @param {number[]} nums
 * @return {boolean}
 */
function canJump(nums) {
    const { length } = nums;
    if (length === 0) return true;
    const dp = [true];
    for (let i = 1; i < length; i++) {
        dp[i] = false;
        for (let j = i - 1; j >= 0; j--) {
            if (dp[j] && j + nums[j] >= i) {
                dp[i] = true;
                break;
            }
        }
    }
    return dp[length - 1];
}
