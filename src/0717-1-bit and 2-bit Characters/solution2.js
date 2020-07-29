/**
 * 题述：1比特与2比特字符
 * 思路：从右边向左遍历，如果最后一个 0 前面有奇数个 1，那么最后一个 1 前面的 1 必然全是 11，最后是 10，如果是偶数个1，那最后的 0 肯定是单字符
 * 时间复杂度：n
 * 空间复杂度：1
 * @param {number[]} bits
 * @return {boolean}
 */
function isOneBitCharacter(bits) {
    const { length } = bits;
    let oneCount = 0;
    for (let i = length - 2; bits[i] === 1 && i >= 0; i--) {
        oneCount++;
    }
    return oneCount % 2 === 0;
}
