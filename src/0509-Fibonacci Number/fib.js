/**
 * 题述：斐波那契数列
 * 思路：递归的启蒙题，这里只写一下非递归
 * 时间复杂度：N
 * 空间复杂度：常数级
 * @param {number} N
 * @return {number}
 */
function fib(N) {
    if (N === 0) return 0;
    if (N === 1) return 1;

    let a = 0;
    let b = 1;
    for (let i = 2; i <= N; i++) {
        [a, b] = [b, a + b];
    }

    return b;
}
