/**
 * 题述：两个二级制数字符串相加求和字符串
 * 思路：和大数相加差不多，只不过这里是满 2 进位
 * 时间复杂度：n
 * 空间复杂度：n，每次遍历都要构造一个新字符串
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
function addBinary(a, b) {
    let result = '';
    const nums1 = a.split('').map((char) => Number(char));
    const nums2 = b.split('').map((char) => Number(char));
    let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0;

    while (i >= 0 || j >= 0 || carry === 1) {
        const temp = ~~nums1[i] + ~~nums2[j] + carry;
        carry = temp >= 2 ? 1 : 0;
        result = `${temp % 2}${result}`;
        i--;
        j--;
    }

    return result;
}

module.exports = addBinary;
