/**
 * 题述：判断一个字符串是否能够由多个重复子串组成，字符串 s 是由小写字母组成
 * 思路：使用正则捕获组
 *
 * @param {string} s
 * @return {boolean}
 */
function repeatedSubstringPattern(s) {
    return s.test(/({a-z}+)+/);
}
