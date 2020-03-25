/**
 * 整数转罗马数字
 *
 * @param {number} num
 * @returns {string}
 */
function intToRoman(num) {
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

    let currentMaxIndex = -1;
    let currentNum = num;
    let result = '';
    while (++currentMaxIndex < intRomanMapper.size) {
        const currentMax = [...intRomanMapper.entries()][currentMaxIndex][0];
        while (currentNum >= currentMax) {
            result = `${result}${intRomanMapper.get(currentMax)}`;
            currentNum -= currentMax;
        }
    }

    return result;
}
module.exports = intToRoman;
