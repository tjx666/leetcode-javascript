/**
 * 题述：爬楼梯，每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 * 思路：第 ii 阶可以由以下两种方法得到：
 * 在第 (i-1) 阶后向上爬一阶。
 * 在第 (i−2) 阶后向上爬 2 阶。
 * 时间复杂度：n
 * 空间复杂度：0
 * @param {number} n
 * @return {number}
 */
function climbStairs(n) {
    if (n === 1) return 1;
    if (n === 2) return 2;

    let a = 1;
    let b = 2;
    for (let i = 3; i <= n; i++) {
        [a, b] = [b, a + b];
    }
    return b;
}
