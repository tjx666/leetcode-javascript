/**
 * 题述：整数转罗马数字
 * 时间复杂度：n，外层循环是常数级别的，所以看里层循环的复杂度级别
 * 空间复杂度：1
 * @param {number} num
 * @returns {string}
 */
function intToRoman(num) {
    // 权重由高到低
    const intRomanMapper = new Map([
        [1000, 'M'],
        [900, 'CM'],
        [500, 'D'],
        [400, 'CD'],
        [100, 'C'],
        [90, 'XC'],
        [50, 'L'],
        [40, 'XL'],
        [10, 'X'],
        [9, 'IX'],
        [5, 'V'],
        [4, 'IV'],
        [1, 'I'],
    ]);

    let result = '';
    for (const [value, RomanStr] of intRomanMapper.entries()) {
        if (num === 0) return result;
        while (num >= value) {
            result += RomanStr;
            num -= value;
        }
    }

    return result;
}

module.exports = intToRoman;
