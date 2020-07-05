/**
 * 题述：求和为 target 的所有组合，候选数组元素是允许重复，结果不允许有重复的组合
 * 思路：回溯
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function combinationSum2(candidates, target) {
    candidates.sort((a, b) => a - b);
    const combines = [];
    const path = [];
    function backTrace(start) {
        if (target === 0) {
            combines.push([...path]);
        }
        for (let i = start; i < candidates.length; i++) {
            const value = candidates[i];
            if (target - value < 0) break;
            if (i !== start && candidates[i] === candidates[i - 1]) continue;
            target -= value;
            path.push(value);
            // 注意这里是 i 才可以达到重复使用当前元素
            backTrace(i + 1);
            target += value;
            path.pop(value);
        }
    }
    backTrace(0);
    return combines;
}
