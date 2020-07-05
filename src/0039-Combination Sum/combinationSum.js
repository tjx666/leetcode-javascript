/**
 * 题述：求和为 target 的所有组合，候选数组中元素不重复，，允许重复使用某个元素，结果不允许有重复的组合
 * 思路：回溯
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function combinationSum(candidates, target) {
    const combines = [];
    const path = [];
    function backTrace(start) {
        if (target === 0) {
            combines.push([...path]);
        }
        for (let i = start; i < candidates.length; i++) {
            const value = candidates[i];
            if (target - value < 0) break;

            target -= value;
            path.push(value);
            // 注意这里是 i 才可以达到重复使用当前元素
            backTrace(i);
            target += value;
            path.pop(value);
        }
    }
    backTrace(0);
    return combines;
}
