/**
 * 题述：真.大数相加，更简单的考法是数字字符串是逆序的
 * 思路：字符串转 BigInt
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
function addStrings(num1, num2) {
    return (BigInt(num1) + BigInt(num2)).toString(10);
}
