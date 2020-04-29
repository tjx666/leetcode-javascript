/**
 * 题述：给定一个 没有重复 数字的序列，返回其所有可能的全排列。
 * @param {number[]} nums
 * @return {number[][]}
 * @example
 * 输入: [1,2,3]
 * 输出:
 * [
 *  [1,2,3],
 *  [1,3,2],
 *  [2,1,3],
 *  [2,3,1],
 *  [3,1,2],
 *  [3,2,1]
 * ]
 */
function permute(nums) {
    const { length } = nums;
    if (length === 0) return [];

    const result = [];
    const used = new Array(length).fill(false);
    const path = [];
    function backTrace() {
        if (path.length === length) {
            result.push([...path]);
        }

        for (let i = 0; i < length; i++) {
            if (used[i] === false) {
                used[i] = true;
                // 做选择
                path.push(nums[i]);
                // 递归
                backTrace(path);
                // 回溯
                path.pop();
                used[i] = false;
            }
        }
    }
    backTrace();

    return result;
}
