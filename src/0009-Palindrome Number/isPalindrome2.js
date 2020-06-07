/**
 * 题述：判断数字是否为回文数
 * 思路：
 * 将数字转换成字符串，再判断字符串是否是回文字符串
 * 判断字符串是否是回文字符串可以采用双指针或者判断它和反转后的字符串是否相同
 * 时间复杂度：㏒n / 2，n 为 数字的位数
 * 空间复杂度：0
 * @param {number} x
 * @return {boolean}
 * @example
 *
 * Input: 121
 * Output: true
 *
 * Input: -121
 * Output: falseOutput: true
 *
 * Input: 10
 * Output: false
 *
 */
function isPalindrome(x) {
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }

    const xStr = `${x}`;
    for (let i = 0, j = xStr.length - 1; i < j; i++, j--) {
        if (xStr[i] !== xStr[j]) {
            return false;
        }
    }

    return true;
}
