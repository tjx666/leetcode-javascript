/**
 * 题述：真.大数相加，更简单的考法是数字字符串是逆序的
 * 思路：模拟进位
 * 时间复杂度：max(m, n), m 和 n 分别为 num1 和 num2 的长度
 * 空间复杂度：max(m, n)
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
function addStrings(num1, num2) {
    let result = '';
    let i = num1.length - 1;
    let j = num2.length - 1;
    let carryBit = 0;
    while (i >= 0 || j >= 0 || carryBit === 1) {
        const sum = ~~num1[i] + ~~num2[j] + carryBit;
        carryBit = sum >= 10 ? 1 : 0;
        result = `${sum % 10}${result}`;
        i--;
        j--;
    }
    return result;
}
