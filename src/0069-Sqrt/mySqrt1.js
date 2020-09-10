/**
 * 题述：实现 int sqrt(int x) 函数。计算并返回 x 的平方根，其中 x 是非负整数。由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。
 * 思路：二分法
 * 时间复杂度：lgx
 * 空间复杂度：1
 * @param {number} x
 * @return {number}
 */
function mySqrt(x) {
    let left = 0;
    let right = x;
    while (left <= right) {
        const mid = ((left + right) / 2) | 0;
        const square = mid ** 2;
        if (square === x) {
            return mid;
        }

        if (square > x) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    // 为什么是 left - 1?
    // 最后一次循环是 left === right, 假设 square > x, left 不变，那么结果是比 left  小 1，也就是 left - 1
    // 如果 square < x，left = left + 1，但是加一后是大于 x 的，因此是加一后的 left - 1
    return left - 1;
}
