/**
 * 题述：第k个排列
 * 思路：回溯
 * 时间复杂度：n!
 * 空间复杂度：n
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
function getPermutation(n, k) {
    const candidates = Array.from({ length: n }).map((_, index) => index + 1);
    const visited = Array.from({ length: n }).fill(false);
    const path = [];
    let result;

    function backTrace() {
        if (path.length === n) {
            k--;
            if (k === 0) {
                result = [...path];
            }
            return;
        }

        for (let i = 0; i < n && k !== 0; i++) {
            if (!visited[i]) {
                path.push(candidates[i]);
                visited[i] = true;
                backTrace();
                path.pop();
                visited[i] = false;
            }
        }
    }
    backTrace();
    return result.join('');
}
