/**
 * 题述：找出所有相加之和为 n 的 k 个数的组合。组合中只允许含有 1 - 9 的正整数，并且每种组合中不存在重复的数字。
 * 思路：回溯，因为要求组合不能重复，因此不能采用交换和 visited 数组的方式划分已选元素和未选择的元素
 * 时间复杂度：低于求 n 个数中选 k 个数的组合
 * 空间复杂度：解空间不参与计算就是 1，path 长度不可能超过 9
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
function combinationSum3(k, n) {
    const result = [];
    const candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const path = [];
    function backTrace(start, sum) {
        if (path.length === k) {
            if (sum === n) result.push([...path]);
            return;
        }

        for (let i = start; i < 9 - (k - path.length) + 1; i++) {
            // !: 剪枝
            if (sum > n) return;
            path.push(candidates[i]);
            sum += candidates[i];
            backTrace(i + 1, sum);
            path.pop();
            sum -= candidates[i];
        }
    }
    backTrace(0, 0);
    return result;
}
