/**
 * 题述：组合
 * 思路：在解法 1 的基础上剪枝优化
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
function combine(n, k) {
    const combinations = [];
    const path = [];
    function backTrace(first, selectCount) {
        if (path.length === k) {
            combinations.push([...path]);
            return;
        }

        for (let i = first; i <= n + 1 - selectCount; i++) {
            path.push(i);
            backTrace(i + 1, selectCount - 1);
            path.pop();
        }
    }
    backTrace(1, k);
    return combinations;
}
