/**
 * 题述：组合
 * 思路：请先做 46 题-全排列，回溯
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
function combine(n, k) {
    const combinations = [];
    const path = [];
    function backTrace(first) {
        if (path.length === k) {
            combinations.push([...path]);
            return;
        }

        for (let i = first; i <= n; i++) {
            path.push(i);
            backTrace(first + 1);
            path.pop();
        }
    }
    backTrace(1);
    return combinations;
}
