/**
 * 题述：第k个排列
 * 思路：可以通过求模计算出每一位
 * 时间复杂度： n²
 * 空间复杂度：n
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
function getPermutation(n, k) {
    const factorial = new Array(n);
    factorial[0] = 1;
    for (let i = 1; i < n; i++) {
        factorial[i] = factorial[i - 1] * i;
    }

    k--;
    const visited = new Array(n + 1).fill(1);
    let ans = '';
    for (let i = 1; i <= n; i++) {
        let order = k / factorial[n - i] + 1;
        for (let j = 1; j <= n; j++) {
            order -= visited[j];
            if (order === 0) {
                ans = `${ans}${j}`;
                visited[0];
                break;
            }
        }
    }
    return ans;
}
