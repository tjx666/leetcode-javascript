/**
 * 题述：俩字符串 s 和 t，t 是由 s 乱序后再插一个字符串 e 组成的，求这个 e
 * 思路：参考 136
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
function findTheDifference(s, t) {
    let sum = 0;
    for (const char of `${s}${t}`) {
        sum ^= char.codePointAt(0);
    }
    return String.fromCodePoint(sum);
}
