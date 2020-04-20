/**
 * 题述：「外观数列」是一个整数序列，从数字 1 开始，序列中的每一项都是对前一项的描述。
 * 思路：没啥思路，两层循环硬撸
 * 时间复杂度：n²
 * 空间复杂度：n²
 *
 * @param {number} n
 * @return {string}
 * @example
 *
 * 1.     1
 * 2.     11
 * 3.     21
 * 4.     1211
 * 5.     111221
 *
 * Input: 4
 * Output: "1211"
 */
function countAndSay(n) {
    let result = '1';

    for (let i = 2; i <= n; i++) {
        let newResult = '';
        let count = 0;
        let preIndex = -1;
        for (let j = 0; j < result.length; j++, preIndex = j - 1) {
            if (preIndex !== -1 && result[j] !== result[preIndex]) {
                newResult = `${newResult}${count}${result[preIndex]}`;
                count = 1;
            } else {
                count++;
            }
        }

        if (count !== 0) {
            newResult = `${newResult}${count}${result[preIndex]}`;
        }
        result = newResult;
    }

    return result;
}
