/**
 * 题述： 统计字符串中的单词个数，这里的单词指的是连续的不是空格的字符。
 *
 * @param {string} s
 * @return {number}
 * @example
 *
 * 输入: "Hello, my name is John"
 * 输出: 5
 * 解释: 这里的单词是指连续的不是空格的字符，所以 "Hello," 算作 1 个单词。
 *
 */
function countSegments(s) {
    s = s.trim();
    if (s.length === 0) return 0;
    return s.split(/\s+/m).length;
}

module.exports = countSegments;
