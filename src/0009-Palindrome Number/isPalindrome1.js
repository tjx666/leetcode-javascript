/**
 * 题述：判断数字是否为回文数
 * 思路：
 * 将数字前一半组成的数字和后一半组成的数组比较即可
 * 获取每一位数字可以通过对 10 求模，例如 123，获取第一位 3，就是 123 % 10，获取第二位 2 就是 123 / 10 % 10
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
    // 要针对性处理 1000 这种 0 结尾的数字
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }

    let reverseNumber = 0;
    while (reverseNumber < x) {
        reverseNumber = reverseNumber * 10 + (x % 10);
        x = Math.trunc(x / 10);
    }

    return x === reverseNumber || x === Math.trunc(reverseNumber / 10);
}
