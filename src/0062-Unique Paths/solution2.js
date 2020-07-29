/**
 * 题述：不同路径
 * 思路：动态规划，状态转移方程 dp[i][j] = dp[i][j - 1]  + dp[i - 1][j]
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
function uniquePaths(m, n) {
    const dp = new Array(n).fill(1);
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[j] = dp[j - 1] + dp[j];
        }
    }
    return dp[n - 1];
}
