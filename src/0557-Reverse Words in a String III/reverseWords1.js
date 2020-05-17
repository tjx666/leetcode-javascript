/**
 * 题述：
 * 给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。
 * 在字符串中，每个单词由单个空格分隔，并且字符串中不会有任何额外的空格。
 * 思路：基本操作
 * 复杂度分析：空间复杂度较高，主要是由于 reverse 时产生了新的字符串
 * @param {string} s
 * @return {string}
 */
function reverseWords(s) {
    return s
        .split(' ')
        .map((word) => [...word].reverse().join(''))
        .join(' ');
}
