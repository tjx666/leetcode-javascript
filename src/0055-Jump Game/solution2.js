/**
 * 题述：
 * 给定一个非负整数数组，你最初位于数组的第一个位置。
 * 数组中的每个元素代表你在该位置可以跳跃的最大长度。
 * 判断你是否能够到达最后一个位置。
 * 思路：穷举 DFS
 * 超时...
 * @param {number[]} nums
 * @return {boolean}
 */
function canJump(nums) {
    const { length } = nums;
    if (length === 0) return true;
    const lastIndex = length - 1;
    function dfs(i) {
        if (i + nums[i] >= lastIndex) return true;
        const end = i + nums[i];
        i++;
        for (; i <= end; i++) {
            if (dfs(i)) return true;
        }
        return false;
    }
    return dfs(0);
}
