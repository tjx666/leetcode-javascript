/**
 * 题述：1比特与2比特字符
 * 思路：从左向右遍历，碰到 1 就是 2 比特字符，可以跳过下一个，看最后遍历的一次是否是最后的 0
 * 时间复杂度：n
 * 空间复杂度：1
 * @param {number[]} bits
 * @return {boolean}
 */
function isOneBitCharacter(bits) {
    const { length } = bits;
    let i = 0;
    while (i < length) {
        if (i === length - 1) {
            return true;
        }

        if (bits[i] === 1) {
            i += 2;
        } else {
            i += 1;
        }
    }
    return false;
}
