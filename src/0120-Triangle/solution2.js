/* eslint-disable prefer-destructuring */
/**
 * 题述：
 * 给定一个三角形，找出自顶向下的最小路径和。每一步只能移动到下一行中相邻的结点上。
 * 相邻的结点 在这里指的是 下标 与 上一层结点下标 相同或者等于 上一层结点下标 + 1 的两个结点。
 * 思路：动态规划，直接给一个空间复杂度最优解
 * 时间复杂度：n²
 * 空间复杂度：n，如果原地修改，空间复杂度更低
 * @param {number[][]} triangle
 * @return {number}
 */
function minimumTotal(triangle) {
    const { length: maxFloor } = triangle;
    if (maxFloor === 0) return 0;

    const dp = new Array(maxFloor);
    dp[0] = triangle[0][0];
    for (let i = 1; i < maxFloor; i++) {
        dp[i] = dp[i - 1] + triangle[i][i];
        for (let j = i - 1; j > 0; j--) {
            dp[j] = Math.min(dp[j - 1], dp[j]) + triangle[i][j];
        }
        dp[0] += triangle[i][0];
    }
    return Math.min(...dp);
}
