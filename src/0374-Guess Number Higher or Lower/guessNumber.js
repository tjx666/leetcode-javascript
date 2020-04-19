/* eslint-disable */
/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * 题述：猜数字大小
 * 思路：二分
 * 时间复杂度：logn
 * 空间复杂度：0
 *
 * @param {number} n
 * @return {number}
 */
function guessNumber(n) {
    let left = 1;
    let right = n;

    while (left !== right) {
        const mid = ((left + right) / 2) | 0;
        const guessResult = guess(mid);

        if (guessResult === 0) {
            return mid;
        }

        if (guessResult === -1) {
            right = mid - 1;
        } else if (guessResult === 1) {
            left = mid + 1;
        }
    }

    return left;
}
