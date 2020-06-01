/**
 * 题述：两个二级制数字符串相加求和字符串
 * 思路：和前端面试常考的大数相加思路一样的，只不过这里是二进制，满 2 进一位
 * 时间复杂度：max(m, n), m 和 n 分别为 a 和 b 的长度
 * 空间复杂度：max(m, n)
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
function addBinary(a, b) {
    let result = '';
    let i = a.length - 1;
    let j = b.length - 1;

    let carryBit = 0;
    while (i >= 0 || j >= 0 || carryBit === 1) {
        const sum = ~~a[i] + ~~b[j] + carryBit;
        carryBit = sum >= 2 ? 1 : 0;
        result = `${sum % 2}${result}`;
        i--;
        j--;
    }
    return result;
}

module.exports = addBinary;
