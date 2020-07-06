/**
 * 题述：给定一个可包含重复数字的序列，返回所有不重复的全排列。
 * 思路：在给一个坑位做选择的时候不应该重复
 * 时间复杂度：n * n!，n 为 nums 长度
 * 空间复杂度：n * n!
 * @param {number[]} nums
 * @return {number[][]}
 * @example:
 *
 * 输入: [1,1,2]
 * 输出:
 * [
 *   [1,1,2],
 *   [1,2,1],
 *   [2,1,1]
 * ]
 *
 */
function permuteUnique(nums) {
    nums.sort((a, b) => a - b);

    const result = [];
    const path = [];
    function dfs() {
        if (path.length === nums.length) {
            result.push([...path]);
        }

        for (let start = path.length, i = start, set = new Set(); i < nums.length; i++) {
            if (set.has(nums[i])) continue;
            [nums[start], nums[i]] = [nums[i], nums[start]];
            path.push(nums[start]);
            set.add(nums[start]);
            dfs();
            [nums[start], nums[i]] = [nums[i], nums[start]];
            path.pop(nums[start]);
        }
    }
    dfs();
    return result;
}
